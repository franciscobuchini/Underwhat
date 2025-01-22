//productCard.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({}); // Guarda los tamaños seleccionados de cada producto

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api');
      setProducts(response.data.products); // Guardar el array completo de productos
      console.log(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleSizeChange = (index, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [index]: size, // Actualiza el size
    }));
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-gray-800 text-white">
      {products.map((product, index) => (
        <div key={index} className="text-left p-4 bg-gray-700 rounded-lg m-2">
          <div className="rounded-lg"></div>
          <p className="text-3xl font-bold">{product.product_name}</p>
          <p className="text-lg text-gray-400">{product.product_category}</p>
          <p className="text-xl">{product.product_selling.toFixed(2)} USD</p>
          <div className="flex justify-left">
            <select
              id="size"
              className="border border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedSizes[index] || ''} // Tamaño seleccionado del producto actual
              onChange={(e) => handleSizeChange(index, e.target.value)} // Maneja el cambio de selección
            >
              <option value="">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <button
              className={`cursor-pointer flex p-2 bg-lime-950 text-sm text-lime-400 font-bold pr-1 hover:bg-lime-900 active:outline active:outline-lime-400 rounded-md duration-100 ${
                selectedSizes[index] ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!selectedSizes[index]} // Deshabilita el botón si no hay un tamaño seleccionado
            >
              + Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
