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
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995152/tpdafgvntneijvjwsiey.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746217350/02-01_jzgwta.png",
      product_name: "🍀 Celt",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746895739/ab8yum9ib7r9opcosbbe.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746217795/03-01_fwv2kr.png",
      product_name: "🪓 Viking",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995153/z6sya9dorbllsupmqeag.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739999981/05-01_vhfybi.webp",
      product_name: "🔮 Burgundian",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995153/mf0o0u7oymwrllt5rviv.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1740006133/uerijezrtvlxbubbfbv1.webp",
      product_name: "🐘 Persian",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746901883/Frame_511306_hxnsjk.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746901874/frame_511311_uybdqe.webp",
      product_name: "☁️ Cloudy",
      product_category_key: "regular_tshirt",
      product_selling: 29.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746901739/frame_511316_oaafiu.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746901738/frame_511317_bndbte.webp",
      product_name: "🐁 Pinky",
      product_category_key: "regular_tshirt",
      product_selling: 29.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746898619/frame_511312_ubfagt.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746898629/frame_511313_lvkwb0.webp",
      product_name: "🍃 Mossy",
      product_category_key: "regular_tshirt",
      product_selling: 29.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746900289/frame_511314_ouyphz.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746900289/frame_511315_fyrifz.webp",
      product_name: "🦀 Crabby",
      product_category_key: "regular_tshirt",
      product_selling: 29.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746907474/frame_511318_u4g1g7.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746907293/frame_511319_en7vps.webp",
      product_name: "💘 Assault",
      product_category_key: "hoodie",
      product_selling: 49.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1747081704/frame_511320_vomibz.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1747081290/frame_511321_jonwrr.webp",
      product_name: "☢️ Nuke",
      product_category_key: "hoodie",
      product_selling: 49.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1747081743/frame_511322_ukzb4d.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1747081742/frame_511323_ix441i.webp",
      product_name: "🏊 Pool Day",
      product_category_key: "hoodie",
      product_selling: 49.98,
    },
  ]);

    // Sorting state
    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
  
    const sortedProducts = useMemo(() => {
      if (!sortField) return products;
      return [...products].sort((a, b) => {
        let valA, valB;
        if (sortField === "price") {
          valA = a.product_selling;
          valB = b.product_selling;
        } else if (sortField === "category") {
          valA = a.product_category_key;
          valB = b.product_category_key;
        }
        if (valA < valB) return sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }, [products, sortField, sortDirection]);
  
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
    products.forEach(product => {
      const img = new Image(); img.src = product.product_image02;
    });
  }, [products]);

  // Hover state (desktop)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Toggle state (touch devices)
  const [toggledIndex, setToggledIndex] = useState(null);

  const handleImageToggle = (index) => {
    setToggledIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      <div className="ProductList flex flex-wrap justify-center gap-6">
        {sortedProducts.map((product, index) => {
          const isHovered = hoveredIndex === index;
          const isToggled = toggledIndex === index;
          const showAlt = isHovered || isToggled;

          return (
            <div
              key={index}
              className="ProductCard bg-white border rounded-2xl border-gray-300 w-64 hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="ProductImage rounded-t-2xl overflow-hidden cursor-pointer"
                onClick={() => handleImageToggle(index)}
              >
                <img
                  src={showAlt ? product.product_image02 : product.product_image}
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
                    value={selectedSizes[index] || ""}
                    onChange={e => handleSizeChange(index, e.target.value)}
                  >
                    <option value="" disabled>{t("product.size_placeholder")}</option>
                    {sizeOptionsByCategory[product.product_category_key]?.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  <button
                    className={`ProductAdd border rounded-lg w-full flex justify-center gap-2 items-center px-3 py-2 ${
                      selectedSizes[index]
                        ? "text-green-600 bg-green-100 hover:outline hover:outline-green-600 cursor-pointer"
                        : "text-gray-300 bg-white cursor-not-allowed"
                    }`}
                    onClick={e => { e.stopPropagation(); if (selectedSizes[index]) handleAddToCart(product, selectedSizes[index]); }}
                    disabled={!selectedSizes[index]}
                  >
                    {t("product.add")}<Icon icon="icon-park-twotone:shopping" className="w-6 h-6 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;