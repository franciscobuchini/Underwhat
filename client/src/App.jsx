//app.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className='flex flex-col justify-center h-screen bg-gray-800 text-white'>
      {products.map((product, index) => (
        <div key={index} className='text-left p-4 bg-gray-700 rounded-lg m-2'>
          <p className='text-3xl font-bold'>{product.product_name}</p>
          <p className='text-lg text-gray-400'>{product.product_category}</p>
          <p className='text-xl'>{product.product_selling.toFixed(2)} USD</p>
        </div>
      ))}
    </div>
  );
}

export default App;
