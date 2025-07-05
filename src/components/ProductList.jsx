// src/components/ProductList.jsx
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import products from "../data/Products";

function ProductList() {
  const { t } = useTranslation("global");

  const sizeOptionsByCategory = {
    regular_tshirt: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    sleeveless_shirt: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    oversized_tshirt: ["XS", "S", "M", "L", "XL"],
    zip_hoodie: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    hoodie: ["XS", "S", "M", "L", "XL", "2XL"],
    sweatshirt: ["XS", "S", "M", "L", "XL", "2XL"],
  };

  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

  const notyf = new Notyf({
    types: [
      {
        type: "success",
        background: "#4caf50",
        duration: 2000,
        dismissible: false,
      },
    ],
  });

  const handleSizeChange = (index, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [index]: size,
    }));
  };

  const handleAddToCart = (product, size) => {
    addToCart({
      ...product,
      selectedSize: size,
      image: product.product_image,
    });
    notyf.success(t("product.add_to_cart"));
  };

  useEffect(() => {
    products.forEach((product) => {
      const img = new Image();
      img.src = product.product_image02;
    });
  }, []);

  return (
    <div>
      <div className="ProductList flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="ProductCard bg-white border rounded-2xl border-gray-300 w-64 hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setHoveredProductIndex(index)}
            onMouseLeave={() => setHoveredProductIndex(null)}
          >
            <div className="ProductImage rounded-t-2xl overflow-hidden">
              <img
                src={
                  hoveredProductIndex === index
                    ? product.product_image02
                    : product.product_image
                }
                alt={product.product_name}
                className="object-cover w-full h-auto transition-all duration-2000 hover:scale-105"
                loading="lazy"
              />
            </div>

            <hr className="border border-gray-300 mx-6 my-2" />

            <div className="ProductDetails p-6 text-gray-600">
              <p className="ProductName text-xl font-semibold mb-1 flex items-center gap-2">
                {product.product_icon && (
                  <Icon icon={product.product_icon} className="w-5 h-5 text-yellow-500" />
                )}
                {product.product_name}
              </p>
              <p className="ProductCategory text-sm text-gray-400">
                {t(product.product_category_key)}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                {product.product_year}
              </p>
              <p className="ProductPrice mb-4">
                {product.product_selling.toFixed(2)} USD
              </p>

              <div className="ProductInteractions flex justify-start space-x-2 mt-4">
                <select
                  id="size"
                  className="ProductSize rounded-lg p-1 w-24 bg-white text-gray-600 border border-gray-300 focus:outline-none focus:border-pink-800 cursor-pointer"
                  aria-label="select"
                  value={selectedSizes[index] || ""}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                >
                  <option value="" disabled>
                    {t("product.size_placeholder")}
                  </option>
                  {sizeOptionsByCategory[product.product_category_key]?.map(
                    (size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    )
                  )}
                </select>
                <button
                  className={`ProductAdd border rounded-lg w-full flex justify-center gap-2 items-center px-3 py-2 ${
                    selectedSizes[index]
                      ? "text-green-600 bg-green-100 hover:outline hover:outline-green-600 cursor-pointer"
                      : "text-gray-300 bg-white cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!selectedSizes[index]) return;
                    handleAddToCart(product, selectedSizes[index]);
                  }}
                  disabled={!selectedSizes[index]}
                >
                  {t("product.add")}
                  <Icon
                    icon="icon-park-twotone:shopping"
                    className="w-6 h-6 flex-shrink-0"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
