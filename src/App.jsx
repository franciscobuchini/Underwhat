//App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home';
import TeamOutfit from './pages/TeamOutfit';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Checkout from './pages/Checkout';
import TermsAndConditions from './pages/TermsAndConditions';
import Successfull from './pages/Successfull';
import ShippingCalculator from './pages/ShippingCalculator';
import ErrorPage from './pages/ErrorPage';


import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_fr from './translations/fr/global.json';

// i18next configuration
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
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("count")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

 return (
    <Router>
      <I18nextProvider i18n={i18next}>
        <CartProvider>
          <div className="flex flex-col min-h-screen mx-2 md:mx-4 bg-gray-50">
            <Header />

            {/* Este componente no renderiza nada visual, 
                pero hace scrollTo(0,0) en cada cambio de ruta */}
            <ScrollToTop />

            <main className="flex-1 mt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team-outfit" element={<TeamOutfit />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/successfull" element={<Successfull />} />
                <Route path="/shipping-calculator" element={<ShippingCalculator />} />
                <Route
                  path="*"
                  element={
                    <ErrorPage
                      statusCode={404}
                      message={t("error.notFound")}
                    />
                  }
                />
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