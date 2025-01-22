//ProductList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ image }) {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api');
      setProducts(response.data.products);
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
      [index]: size,
    }));
  };

  return (
    <div className="ProductList flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div key={index} className="ProductCard bg-white border rounded-2xl m-2 w-64">
          <div className="ProductImage ">
            <img src={image} alt="Product" className="rounded-2xl object-cover w-full h-auto " />
          </div>
          <div className="ProductDetails p-4 text-gray-500">
            <p className="ProductName text-xl font-bold">{product.product_name}</p>
            <p className="ProductCategory">{product.product_category}</p>
            <p className="ProductPrice">{product.product_selling.toFixed(2)} USD</p>
            <div className="flex justify-left space-x-2 mt-4">
              <select
                id="size"
                className="select w-24 bg-white text-gray-500"
                aria-label="select"
                value={selectedSizes[index] || ''}
                onChange={(e) => handleSizeChange(index, e.target.value)}
              >
                <option value="" selected disabled>Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <button
                className={`btn btn-text ${
                  selectedSizes[index] ? 'btn-success' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!selectedSizes[index]}
                onClick={() => {
                  if (selectedSizes[index]) {
                    console.log(`Product added with size: ${selectedSizes[index]}`);
                  }
                }}
              >
                + Add to cart
              </button>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default ProductList;
