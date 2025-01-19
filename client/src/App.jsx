import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3002/api');
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
        {
          array.map((fruit, index) => (
            <p className='text-3xl' key={index}>{fruit}</p>
          ))
        }
      </div>
    </>
  )
}

export default App
