//ProductList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function ProductList() {
  const { t, i18n } = useTranslation("global");
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();

  // Configuración de Notyf con estilos personalizados
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

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api`);
      setProducts(response.data.products);
      // console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
      const img = new Image();
      img.src = product.product_image02; // Precarga imagen hover
    });
  }, [products]);

  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <div className="ProductList flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="ProductCard bg-white border rounded-2xl border-gray-300 w-64 hover:shadow-lg transition-shadow duration-300"
          onMouseEnter={() => setHoveredProductId(product.product_id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div className="ProductImage hover:bg-gray-100 rounded-t-2xl overflow-hidden">
            <img
              src={
                hoveredProductId === product.product_id
                  ? product.product_image02 
                  : product.product_image
              }
              alt={product.product_name}
              className="object-cover w-full h-auto transition-all duration-1000 hover:scale-105"
              loading="lazy"
            />
          </div>
  
          <hr className="border border-gray-300 mx-6 my-2" />
  
          <div className="ProductDetails p-6 text-gray-600">
            <p className="ProductName text-xl font-semibold mb-1">
              {product.product_name}
            </p>
            <p className="ProductCategory text-sm text-gray-400 mb-2">
              {product.product_category}
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
                <Icon icon="icon-park-twotone:shopping" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  }
  
  export default ProductList;
  