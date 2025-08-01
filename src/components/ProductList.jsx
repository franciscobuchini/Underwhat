// src/components/ProductList.jsx
import { useState, useEffect, useMemo, useRef, Fragment } from "react";
import { useCart } from "./CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Listbox } from "@headlessui/react";
import products from "../data/Products";
import FilterSort from "./FilterSort";

export default function ProductList() {
  const { t } = useTranslation("global");
  const { addToCart } = useCart();
  const notyf = new Notyf({ types: [{ type: "success", background: "#4caf50", duration: 2000 }] });

  // Detectar si es dispositivo táctil
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Estado para alternar imágenes en mobile
  const [toggledImages, setToggledImages] = useState({});

  const sizeOptionsByCategory = {
    regular_tshirt: ["XS","S","M","L","XL","2XL"],
    sleeveless_shirt: ["XS","S","M","L","XL","2XL"],
    oversized_tshirt: ["S","M","L","XL","2XL"],
    zip_hoodie: ["XS","S","M","L","XL","2XL"],
    hoodie: ["XS","S","M","L","XL"],
    sweatshirt: ["XS","S","M","L","XL"],
    shorts: ["US 28","US 29","US 30","US 32","US 33","US 34","US 36"],
  };

  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedBackNumbers, setSelectedBackNumbers] = useState({});
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [filter, setFilter] = useState({ category: "", year: "", team: "" });
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => { products.forEach(p => new Image().src = p.product_image02); }, []);

  const categories = useMemo(() => [...new Set(products.map(p => p.product_category_key))], []);
  const years = useMemo(() => [...new Set(products.map(p => p.product_year))], []);
  const teams = useMemo(() => [...new Set(products.map(p => p.product_team))], []);

  const visible = useMemo(() => {
    let arr = products;
    if (filter.category) arr = arr.filter(p => p.product_category_key === filter.category);
    if (filter.year)     arr = arr.filter(p => String(p.product_year) === filter.year);
    if (filter.team === "ONLY_TEAMS") {
      arr = arr.filter(p => p.product_team && p.product_team.trim() !== "");
    } else if (filter.team) {
      arr = arr.filter(p => p.product_team === filter.team);
    }
    if (sortOrder === "cheapfirst") arr = [...arr].sort((a,b)=>a.product_selling-b.product_selling);
    if (sortOrder === "cheaplast")  arr = [...arr].sort((a,b)=>b.product_selling-a.product_selling);
    return arr;
  }, [filter, sortOrder]);

  const handleSizeChange = (idx, size) => setSelectedSizes(s => ({ ...s, [idx]: size }));
  const handleBackNumberChange = (idx, num) => setSelectedBackNumbers(n => ({ ...n, [idx]: num }));
  const handleAdd = (product, idx) => {
    addToCart({
      ...product,
      selectedSize: selectedSizes[idx],
      backNumber: product.product_number ? selectedBackNumbers[idx] || null : null,
      image: product.product_image
    });
    notyf.success(t("product.add_to_cart"));
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-12 w-full mt-8 mb-12 sm:mt-16 sm:mb-20 px-2 sm:px-8">
      <FilterSort
        categories={categories}
        years={years}
        teams={teams}
        onFilterChange={setFilter}
        onSortChange={setSortOrder}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 sm:gap-10 sm:px-8">
        {visible.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-lg sm:rounded-2xl w-full hover:shadow-lg transition-shadow"
            onMouseEnter={() => !isTouch && setHoveredIdx(idx)}
            onMouseLeave={() => !isTouch && setHoveredIdx(null)}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={
                  isTouch
                    ? toggledImages[idx]
                      ? product.product_image02
                      : product.product_image
                    : hoveredIdx === idx
                      ? product.product_image02
                      : product.product_image
                }
                alt={product.product_name}
                className="object-cover w-full h-auto transition-transform duration-200 hover:scale-105"
                loading="lazy"
                onClick={() => {
                  if (isTouch) {
                    setToggledImages(prev => ({ ...prev, [idx]: !prev[idx] }));
                  }
                }}
                style={{ cursor: isTouch ? 'pointer' : 'default' }}
              />
            </div>
            <hr className="border-gray-300 mx-4 my-1 sm:mx-6 sm:my-2" />

            <div className="p-6 sm:p-8 text-gray-600 flex flex-col gap-2 justify-between">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 font-semibold sm:text-lg">
                  {product.product_icon && (
                    <Icon icon={product.product_icon} className="w-4 h-4 sm:w-5 sm:h-5 text-pink-800" />
                  )}
                  {product.product_name}
                </p>
                <p className="text-sm">{product.product_selling.toFixed(2)} USD</p>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  {t(product.product_category_key)} - {product.product_year}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full mt-auto">
                <div className="relative flex-1">
                  <Listbox value={selectedSizes[idx] || ""} onChange={sz => handleSizeChange(idx, sz)}>
                    <Listbox.Button className={`flex items-center justify-between w-full h-8 px-2 border focus:outline-none ${selectedSizes[idx] ? 'border-pink-800 bg-white' : 'border-gray-200'} rounded text-xs sm:text-sm cursor-pointer`}>                    
                      <span className={!selectedSizes[idx] ? "text-gray-400" : ""}>
                        {selectedSizes[idx] || t("product.size_placeholder")}
                      </span>
                      <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 focus:outline-none w-full bg-white border border-gray-200 rounded shadow-sm overflow-auto text-xs sm:text-sm list-none">
                      {sizeOptionsByCategory[product.product_category_key].map(sz => (
                        <Listbox.Option key={sz} value={sz} as={Fragment}>
                          {({ active, selected }) => (
                            <li className={`px-2 py-1 cursor-pointer ${active ? "bg-gray-100" : ""} ${selected ? "font-semibold" : ""}`}>{sz}</li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

{product.product_number && (
<input
  type="number"
  min="0"
  max="99"
  inputMode="numeric"
  pattern="\d{1,2}"
  maxLength="2"
  placeholder={product.product_number}
  className={`
    w-1/3 h-8 px-2 rounded 
    border-gray-200 border 
    appearance-none
    text-xs sm:text-sm text-center focus:outline-none
    ${selectedBackNumbers[idx] ? 'border-pink-800' : ''}
  `}
  value={selectedBackNumbers[idx] || ""}
  onChange={e => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      handleBackNumberChange(idx, value);
    }
  }}
/>
)}

                {!product.product_number && (
                  <button
                    disabled={!selectedSizes[idx]}
                    onClick={e => { e.stopPropagation(); handleAdd(product, idx); }}
                    className={`flex-2 h-8 w-full py-2 rounded text-sm flex items-center justify-center gap-2 focus:outline-none ${!selectedSizes[idx] ? 'bg-white cursor-not-allowed text-gray-300' : 'bg-pink-800 text-white cursor-pointer'}`}
                  >
                    {t("product.add")}
                    <Icon icon="icon-park-twotone:shopping" className="w-4 h-4" />
                  </button>
                )}
              </div>
                
              {product.product_number && (
              <div className="flex items-center justify-center">
                <button
                  disabled={!selectedSizes[idx]}
                  onClick={e => { e.stopPropagation(); handleAdd(product, idx); }}
                  className={`mt-2 h-8 w-min px-6 py-2 rounded text-sm flex items-center justify-center gap-2 focus:outline-none ${!selectedSizes[idx] ? 'bg-white cursor-not-allowed text-gray-300' : 'bg-pink-800 text-white cursor-pointer'}`}
                >
                  {t("product.add")}
                  <Icon icon="icon-park-twotone:shopping" className="w-5 h-5" />
                </button>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}