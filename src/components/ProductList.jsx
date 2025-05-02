//ProductList.jsx
import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function ProductList() {
  const { t } = useTranslation("global");
  
  // Define la lista de productos de forma local
  const [products, setProducts] = useState([
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995152/tpdafgvntneijvjwsiey.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995152/tpdafgvntneijvjwsiey.webp",
      product_name: "Lakers",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995152/ab8yum9ib7r9opcosbbe.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995152/ab8yum9ib7r9opcosbbe.webp",
      product_name: "Vikings",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995153/z6sya9dorbllsupmqeag.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739999981/05-01_vhfybi.webp",
      product_name: "Marshmallow",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1739995153/mf0o0u7oymwrllt5rviv.webp",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1740006133/uerijezrtvlxbubbfbv1.webp",
      product_name: "Hologram",
      product_category_key: "oversized_tshirt",
      product_selling: 34.98,
    },
    {
      product_image: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746121808/Frame_511306_hxnsjk.png",
      product_image02: "https://res.cloudinary.com/dpleitc1d/image/upload/v1746121813/Frame_511308_yondwx.png",
      product_name: "Cloudy",
      product_category_key: "regular_tshirt",
      product_selling: 29.98,
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
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
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
  );
}

export default ProductList;
