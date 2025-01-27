//app.jsx
import ProductList from './components/ProductList';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';
import image01 from './assets/01/01.webp';

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductList image={image01} />
    </CartProvider>
  );
}

export default App;