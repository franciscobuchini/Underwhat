//app.jsx
import ProductList from './components/ProductList';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
    </CartProvider>
  );
}

export default App;