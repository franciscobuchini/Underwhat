// Updated ProductList.jsx
import { useState, useEffect, useMemo } from "react";
import { useCart } from "../components/CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function ProductList() {
  const { t } = useTranslation("global");
  
  // Opciones de tallas según categoría
  const sizeOptionsByCategory = {
    regular_tshirt: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    sleeveless_shirt: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    oversized_tshirt: ["S", "M", "L", "XL", "2XL"],
    zip_hoodie: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    hoodie: ["S", "M", "L", "XL", "2XL", "3XL"],
    sweatshirt: ["S", "M", "L", "XL", "XXL", "3XL"],
  };

  // Define la lista de productos de forma local
  const [products] = useState([
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748806188/celt01_us6fi2.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749206500/celt02_xtmbz1.webp",
      product_name: "Celt",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748806521/viking01_edjnxi.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749206500/viking02_fblf34.webp",
      product_name: "Viking",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748808521/burgundian01_hqekos.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748809567/burgundian02_idzuqt.webp",
      product_name: "Burgundian",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748809778/persian01_a1rqcr.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748809779/persian02_gt04ma.webp",
      product_name: "Persian",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983583/butta01_nbgdzi.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983583/butta02_tnmqxt.webp",
      product_name: "Butta",
      product_category_key: "regular_tshirt",
      product_selling: 27.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983584/dodoria01_vwv1z3.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983583/dodoria02_qpjpuz.webp",
      product_name: "Dodoria",
      product_category_key: "regular_tshirt",
      product_selling: 27.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983584/zarbon01_z3wesu.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983585/zarbon02_dauayp.webp",
      product_name: "Zarbon",
      product_category_key: "regular_tshirt",
      product_selling: 28.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1748983587/ginew01_vknm96.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749218591/ginew02_vblsqm.webp",
      product_name: "Ginew",
      product_category_key: "regular_tshirt",
      product_selling: 28.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749225251/assault01_u4nfdg.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749225252/assault02_t6vpbg.webp",
      product_name: "Assault",
      product_category_key: "hoodie",
      product_selling: 44.98,
    },
        {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749225852/piranesi01_gpkhii.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749225855/piranesi02_ny9ivx.webp",
      product_name: "Piranesi",
      product_category_key: "hoodie",
      product_selling: 45.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749226868/nuke01_stcuh3.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749226870/nuke02_zbm8d5.webp",
      product_name: "Nuke",
      product_category_key: "hoodie",
      product_selling: 45.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749226877/poolday01_dd2ceb.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1749226874/poolday02_cf7ka3.webp",
      product_name: "Pool Day",
      product_category_key: "hoodie",
      product_selling: 45.98,
    },
  ]);
  
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();

  const notyf = new Notyf({
    types: [
      {
        type: "success",
        background: "#4caf50", // Verde
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
  }, [products]);

  // Utilizamos el índice del producto para identificar el hover
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

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
          <div className="ProductImage  rounded-t-2xl overflow-hidden">
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
            <p className="ProductName text-xl font-semibold mb-1">
              {product.product_name}
            </p>
            <p className="ProductCategory text-sm text-gray-400 mb-2">
              {t(product.product_category_key)}
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
                  {sizeOptionsByCategory[product.product_category_key]?.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
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
