//ProductList.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../components/CartContext";

function ProductList({ image }) {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();

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
    addToCart({ ...product, selectedSize: size });
  };

  return (
    <div className="ProductList flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={index} className="ProductCard bg-white border border-gray-200 rounded-2xl m-2 w-64">
          <div className="ProductImage ">
            <img src={image} alt="Product" className="rounded-2xl object-cover w-full h-auto " />
          </div>
          <div className="ProductDetails p-4 text-gray-600">
            <p className="ProductName text-xl font-semibold">{product.product_name}</p>
            <p className="ProductCategory text-sm text-gray-400">{product.product_category}</p>
            <p className="ProductPrice">{product.product_selling.toFixed(2)} USD</p>
            <div className="ProductInteractions flex justify-left space-x-2 mt-4">
              <select
                id="size"
                className="ProductSize rounded-lg p-1 w-24 bg-white text-gray-600 border border-gray-300 focus:border-gray-300 focus:outline-0"
                aria-label="select"
                value={selectedSizes[index] || ""}
                onChange={(e) => handleSizeChange(index, e.target.value)}
              >
                <option value="" disabled>
                  Size
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <button
                className={`ProductAdd btn ${
                  selectedSizes[index] ? "btn-outline btn-success" : "text-gray-400 bg-white border border-gray-400 cursor-not-allowed"
                }`}
                disabled={!selectedSizes[index]}
                onClick={() => handleAddToCart(product, selectedSizes[index])}
              >
                <span className="icon-[tabler--shopping-cart-plus] size-5"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

