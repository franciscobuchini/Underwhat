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

  const sizeOptionsByCategory = {
    regular_tshirt: ["XS","S","M","L","XL","2XL","3XL"],
    sleeveless_shirt: ["XS","S","M","L","XL","2XL","3XL"],
    oversized_tshirt: ["XS","S","M","L","XL"],
    zip_hoodie: ["XS","S","M","L","XL","2XL","3XL"],
    hoodie: ["XS","S","M","L","XL","2XL"],
    sweatshirt: ["XS","S","M","L","XL","2XL"],
  };

  const [selectedSizes, setSelectedSizes] = useState({});
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [filter, setFilter] = useState({ category: "", year: "", team: "" });
  const [sortOrder, setSortOrder] = useState("");
  const selectRefs = useRef([]);

  // precarga imágenes
  useEffect(() => { products.forEach(p => new Image().src = p.product_image02); }, []);

  // datos únicos para filtros
  const categories = useMemo(() => [...new Set(products.map(p => p.product_category_key))], []);
  const years      = useMemo(() => [...new Set(products.map(p => p.product_year))], []);
  const teams      = useMemo(() => [...new Set(products.map(p => p.product_team))], []);

  // filtrado y orden
  const visible = useMemo(() => {
    let arr = products;
    if (filter.category) arr = arr.filter(p => p.product_category_key === filter.category);
    if (filter.year)     arr = arr.filter(p => String(p.product_year) === filter.year);
    if (filter.team)     arr = arr.filter(p => p.product_team === filter.team);
    if (sortOrder === "cheapfirst") arr = [...arr].sort((a,b) => a.product_selling - b.product_selling);
    if (sortOrder === "cheaplast")  arr = [...arr].sort((a,b) => b.product_selling - a.product_selling);
    return arr;
  }, [filter, sortOrder]);

  const handleSizeChange = (idx, size) => {
    setSelectedSizes(s => ({ ...s, [idx]: size }));
  };
  const handleAdd = (product, size) => {
    addToCart({ ...product, selectedSize: size, image: product.product_image });
    notyf.success(t("product.add_to_cart"));
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-12 w-full">
      <FilterSort
        categories={categories}
        years={years}
        teams={teams}
        onFilterChange={setFilter}
        onSortChange={setSortOrder}
      />

      <div className="flex flex-wrap justify-around gap-3 sm:gap-6 sm:px-4">
        {visible.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-lg sm:rounded-2xl w-[48%] sm:w-64 hover:shadow-lg transition-shadow"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={hoveredIdx === idx ? product.product_image02 : product.product_image}
                alt={product.product_name}
                className="object-cover w-full h-auto transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            </div>
            <hr className="border-gray-300 mx-4 my-1 sm:mx-6 sm:my-2" />

            <div className="p-2 sm:p-6 text-gray-600">
              <p className="flex items-center gap-2 text-base sm:text-xl font-semibold mb-1">
                {product.product_icon && (
                  <Icon icon={product.product_icon} className="w-4 h-4 sm:w-5 sm:h-5 text-pink-800" />
                )}
                {product.product_name}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                {t(product.product_category_key)}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mb-1">
                {product.product_year}
              </p>
              <p className="mb-2 sm:mb-4 text-sm">
                {product.product_selling.toFixed(2)} USD
              </p>

              {/* Responsive: Select + Botón */}
              <div className="flex gap-1 mt-1 sm:gap-2 sm:mt-2 h-8 sm:h-10 w-full">
                {/* Talle */}
                <div className="relative flex-[2]">
                  <Listbox
                    value={selectedSizes[idx] || ""}
                    onChange={sz => handleSizeChange(idx, sz)}
                  >
                    <Listbox.Button className="flex items-center justify-between w-full h-full px-2 border border-gray-200 bg-white rounded text-xs sm:text-sm cursor-pointer">
                      <span className={!selectedSizes[idx] ? "text-gray-400" : ""}>
                        {selectedSizes[idx] || t("product.size_placeholder")}
                      </span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none"
                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-sm max-h-36 overflow-auto text-xs sm:text-sm list-none">
                      {sizeOptionsByCategory[product.product_category_key].map(sz => (
                        <Listbox.Option key={sz} value={sz} as={Fragment}>
                          {({ active, selected }) => (
                            <li
                              className={`px-2 py-1 cursor-pointer ${
                                active ? "bg-pink-50" : ""
                              } ${selected ? "font-semibold" : ""}`}
                            >
                              {sz}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

                {/* Agregar */}
                <button
                  disabled={!selectedSizes[idx]}
                  onClick={e => { e.stopPropagation(); handleAdd(product, selectedSizes[idx]); }}
                  className={`flex items-center justify-center h-full px-2 sm:px-3 border border-gray-200 rounded text-xs sm:text-sm flex-[3] gap-1 sm:gap-2
                    ${selectedSizes[idx]
                      ? "text-green-600 bg-green-50 hover:bg-green-100"
                      : "text-gray-300 bg-white cursor-not-allowed"
                    }`}
                >
                  {t("product.add")}
                  <Icon icon="icon-park-twotone:shopping" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
