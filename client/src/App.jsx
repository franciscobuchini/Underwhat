//app.jsx
import ProductList from './components/ProductList';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <h2 class="text-base-content text-2xl mt-20 mb-10 ml-4 text-gray-600 font-semibold">Our products:</h2>
        <ProductList />
        <h2 class="text-base-content text-2xl mt-20 mb-10 ml-4 text-gray-600 font-semibold">The brand for your team:</h2>
      </CartProvider>
    </>

  );
}

export default App;