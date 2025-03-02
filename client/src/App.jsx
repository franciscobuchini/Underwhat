// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home';
import TeamOutfit from './pages/TeamOutfit';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Checkout from './pages/Checkout';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_fr from './translations/fr/global.json';
import TermsAndConditions from './pages/TermsAndConditions';

// Configuración de i18next
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { global: global_en },
      es: { global: global_es },
      fr: { global: global_fr }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation("global");
  return (
    <Router>
      <I18nextProvider i18n={i18next}>
        <CartProvider>
          <div className="flex flex-col min-h-screen mx-2 md:mx-4">
            <Header />
            <main className="flex-1 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team-outfit" element={<TeamOutfit />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </I18nextProvider>
    </Router>
  );
}

export default App;