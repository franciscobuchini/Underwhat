//ProductList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";

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
      const response = await axios.get("http://localhost:3002/api");
      setProducts(response.data.products);
      console.log(response.data.products);
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
    <div className="ProductList flex flex-wrap justify-center gap-4">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="ProductCard bg-white border rounded-2xl w-64"
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
              className="Image01 object-cover w-full h-auto transition-all duration-1000 hover:scale-105"
              loading="lazy"
            />
          </div>
          <hr className="border mx-6" />
          <div className="ProductDetails p-4 text-gray-600">
            <p className="ProductName text-xl font-semibold">{product.product_name}</p>
            <p className="ProductCategory text-sm text-gray-400">{product.product_category}</p>
            <p className="ProductPrice">{product.product_selling.toFixed(2)} USD</p>
            <div className="ProductInteractions flex justify-left space-x-2 mt-4">
              <select
                id="size"
                className="ProductSize rounded-lg p-1 w-24 bg-white text-gray-600 border focus:outline-0"
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
                className={`ProductAdd btn ${
                  selectedSizes[index]
                    ? "btn-outline btn-success"
                    : "text-gray-400 bg-white border shadow-none cursor-not-allowed hover:bg-white hover:border hover:shadow-none focus:bg-white focus:border focus:bg-gray-100 focus:shadow-none"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!selectedSizes[index]) return;
                  handleAddToCart(product, selectedSizes[index]);
                }}
                disabled={!selectedSizes[index]}
              >
                <span className="icon-[tabler--shopping-cart-plus] size-4"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
  </div>
  );
}

export default ProductList;
