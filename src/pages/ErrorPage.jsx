import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage({ statusCode, message }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-50 px-4 py-20 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-6xl font-bold text-pink-800 mb-4">
          {statusCode || 'Error'}
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          {message || '¡Vaya! Algo salió mal.'}
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Volver a la página principal
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;