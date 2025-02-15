//app.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home';
import TeamOutfit from './pages/TeamOutfit';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-outfit" element={<TeamOutfit />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;