import { useState, useEffect, useMemo } from "react";
import { useCart } from "./CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import products from "../data/Products";
import FilterSort from "./FilterSort";

export default function ProductList() {
  const { t } = useTranslation("global");
  const { addToCart } = useCart();
  const notyf = new Notyf({
    types: [{ type: "success", background: "#4caf50", duration: 2000 }],
  });

  const sizeOptionsByCategory = {
    regular_tshirt: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    sleeveless_shirt: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    oversized_tshirt: ["XS", "S", "M", "L", "XL"],
    zip_hoodie: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    hoodie: ["XS", "S", "M", "L", "XL", "2XL"],
    sweatshirt: ["XS", "S", "M", "L", "XL", "2XL"],
  };

  const [selectedSizes, setSelectedSizes] = useState({});
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [filter, setFilter] = useState({ category: "", year: "", team: "" });
  const [sortOrder, setSortOrder] = useState("");

  // precarga de imágenes secundarias
  useEffect(() => {
    products.forEach((p) => new Image().src = p.product_image02);
  }, []);

  // listados únicos para filtros
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.product_category_key))],
    []
  );
  const years = useMemo(
    () => [...new Set(products.map((p) => p.product_year))],
    []
  );
  const teams = useMemo(
    () => [...new Set(products.map((p) => p.product_team))],
    []
  );

  // filtrado y orden
  const visible = useMemo(() => {
    let arr = products;
    if (filter.category) arr = arr.filter(p => p.product_category_key === filter.category);
    if (filter.year)      arr = arr.filter(p => String(p.product_year) === filter.year);
    if (filter.team)      arr = arr.filter(p => p.product_team === filter.team);
    if (sortOrder === "cheapfirst")  arr = [...arr].sort((a,b) => a.product_selling - b.product_selling);
    if (sortOrder === "cheaplast") arr = [...arr].sort((a,b) => b.product_selling - a.product_selling);
    return arr;
  }, [filter, sortOrder]);

  const handleSizeChange = (i, size) => {
    setSelectedSizes(s => ({ ...s, [i]: size }));
  };

  const handleAdd = (product, size) => {
    addToCart({ ...product, selectedSize: size, image: product.product_image });
    notyf.success(t("product.add_to_cart"));
  };

  return (
    <>
      <FilterSort
        categories={categories}
        years={years}
        teams={teams}
        onFilterChange={setFilter}
        onSortChange={setSortOrder}
      />

      <div className="flex flex-wrap justify-center gap-6">
        {visible.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-2xl w-64 hover:shadow-lg transition-shadow"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={hoveredIdx === idx ? product.product_image02 : product.product_image}
                alt={product.product_name}
                className="object-cover w-full h-auto transition-transform duration-2000 hover:scale-105"
                loading="lazy"
              />
            </div>
            <hr className="border-gray-300 mx-6 my-2" />

            <div className="p-6 text-gray-600">
              <p className="flex items-center gap-2 text-xl font-semibold mb-1">
                {product.product_icon && (
                  <Icon icon={product.product_icon} className="w-5 h-5 text-yellow-500" />
                )}
                {product.product_name}
              </p>
              <p className="text-sm text-gray-400">{t(product.product_category_key)}</p>
              <p className="text-sm text-gray-400 mb-2">{product.product_year}</p>
              <p className="mb-4">{product.product_selling.toFixed(2)} USD</p>

              <div className="flex space-x-2 mt-4">
                <select
                  value={selectedSizes[idx] || ""}
                  onChange={e => handleSizeChange(idx, e.target.value)}
                  className="w-24 p-1 border rounded cursor-pointer"
                >
                  <option value="" disabled>{t("product.size_placeholder")}</option>
                  {sizeOptionsByCategory[product.product_category_key].map((sz) => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
                <button
                  disabled={!selectedSizes[idx]}
                  onClick={e => { e.stopPropagation(); handleAdd(product, selectedSizes[idx]); }}
                  className={`flex gap-2 items-center justify-center px-3 py-2 border rounded w-full ${
                    selectedSizes[idx]
                      ? "text-green-600 bg-green-100 hover:outline-green-600"
                      : "text-gray-300 bg-white cursor-not-allowed"
                  }`}
                >
                  {t("product.add")}
                  <Icon icon="icon-park-twotone:shopping" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
