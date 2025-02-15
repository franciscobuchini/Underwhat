//app.jsx
import ProductList from './components/ProductList';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Title title="Our products" />
        <ProductList />
        <Title title="The brand for your team" />
        <Footer/>
      </CartProvider>
    </>

  );
}

export default App;