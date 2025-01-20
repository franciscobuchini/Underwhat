import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api');
      setArray(response.data.Products); // Almacenar los productos en el estado
      console.log(response.data.Products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      {array.map((Products, index) => (
        <p className='text-3xl' key={index}>{Products}</p> // Mostrar los nombres correctamente
      ))}
    </div>
  );
}

export default App;