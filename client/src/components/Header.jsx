import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../components/CartContext";
import nav01 from "../assets/Logo/nav01.webp";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function Header() {
  const { t, i18n } = useTranslation("global");
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const notyf = new Notyf({
    types: [{ type: "error", background: "#f44336", duration: 2000, dismissible: false }],
  });

  const languageIcons = {
    en: "twemoji:flag-united-kingdom",
    es: "twemoji:flag-spain",
    fr: "twemoji:flag-france",
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    notyf.error(t("product.remove_from_cart"));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Manejo de estado para los dropdowns
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Referencias para detectar clics fuera
  const menuRef = useRef(null);
  const languageRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="Navbar fixed z-100 bg-white border border-gray-300 rounded-2xl flex justify-between w-[calc(100%-1.5rem)] mt-2 p-3">
      <div className="NavbarLogo">
        <Link to="/">
          <img src={nav01} className="h-8" alt={t("header.logo_alt")} />
        </Link>
      </div>
      <div className="NavbarMenu flex gap-4">
        {/* Botón de menú */}
        <div className="MenuButton flex" ref={menuRef}>
          <button
            id="dropdown-nav"
            type="button"
            className="rounded-full size-9 hover:bg-gray-100 flex items-center justify-center cursor-pointer"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            aria-label="Dropdown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon icon="icon-park-twotone:app-switch" className="text-violet-400 size-6" />
          </button>

          {isMenuOpen && (
            <ul className="absolute right-18 top-12 w-48 bg-white border border-gray-300 rounded-2xl z-150 p-1" role="menu">
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/team-outfit">
                  <span className="flex items-center gap-2">
                    <Icon icon="icon-park-twotone:basketball-clothes" className="size-5 text-violet-400" />
                    {t("header.menu.team")}
                  </span>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/faq">
                  <span className="flex items-center gap-x-2">
                    <Icon icon="icon-park-twotone:file-question" className="size-5 text-violet-400" />
                    {t("header.menu.faq")}
                  </span>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/terms-and-conditions">
                  <span className="flex items-center gap-x-2">
                    <Icon icon="icon-park-twotone:align-text-left-one" className="size-5 text-violet-400" />
                    {t("header.menu.conditions")}
                  </span>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/about">
                  <span className="flex items-center gap-x-2">
                    <Icon icon="icon-park-twotone:diving" className="size-5 text-violet-400" />
                    {t("header.menu.about")}
                  </span>
                </Link>
              </li>

              {/* Botón de selección de idioma */}
              <div ref={languageRef}>
                <button className="w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
                  <span className="flex flex-row items-center gap-x-2">
                    <Icon icon="icon-park-twotone:text-message" className="size-5 text-violet-400" />
                    {t("header.menu.language")}
                  </span>
                </button>
                {isLanguageOpen && (
                  <ul className="py-2 pl-6">
                    {["en", "es", "fr"].map((lang) => (
                      <li key={lang}>
                        <button
                          className="w-full flex items-center gap-2 text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl"
                          onClick={() => i18n.changeLanguage(lang)}
                        >
                          <Icon icon={languageIcons[lang]} className="size-5 opacity-60" />
                          {t(`header.language_options.${lang}`)}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ul>
          )}
        </div>

{/* Carrito de compras */}
<div className="CartButton flex" ref={cartRef}>
  <button
    className="rounded-full w-9 h-9 hover:bg-gray-100 flex items-center justify-center cursor-pointer"
    onClick={() => setIsCartOpen(!isCartOpen)}
  >
    <div className="CartIndicator relative">
      <span className="absolute -top-2 -right-2 bg-red-400 w-4 h-4 rounded-full font-semibold text-white text-center text-xs flex items-center justify-center">
        {totalQuantity}
      </span>
      <Icon icon="icon-park-twotone:shopping" className="text-violet-400 w-6 h-6" />
    </div>
  </button>
  {isCartOpen && (
    <div className="absolute right-4 top-12 bg-white border border-gray-300 rounded-2xl z-50 p-2 min-w-[250px]">
      {cartItems.length === 0 ? (
        <h6 className="text-gray-600 text-center">{t("cart.empty")}</h6>
      ) : (
        <>
          {/* Subtotal y Checkout en la parte superior */}
          <div className="flex items-center justify-between gap-2 m-2">
            <h6 className="text-gray-600">
              <span className="pr-1">{t("cart.subtotal")}</span>
              {cartItems
                .reduce((total, item) => total + item.product_selling * item.quantity, 0)
                .toFixed(2)}
                USD
            </h6>
            {totalQuantity < 2 ? (
              <p className="text-red-400 text-sm">{t("cart.minimum_order", { min: 2 })}</p>
            ) : (
              <button
                className="rounded-lg border border-green-600 text-green-600 bg-green-100 px-4 py-1 hover:outline-1 focus:outline-1 outline-green-600 cursor-pointer"
                onClick={() => navigate("/checkout")}
              >
                {t("cart.checkout")}
              </button>
            )}
          </div>
          {/* Listado de productos */}
          <ul className="divide-y divide-gray-300">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2 border-b p-2 last:border-b-0">
                {/* Imagen del producto */}
                <img 
                  src={item.image} 
                  alt={item.product_name} 
                  className="w-14 h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                
                <div className="flex flex-col flex-grow pr-8">
                  <h6 className="text-gray-600 font-medium text-sm">{item.product_name}</h6>
                  <p className="text-gray-400 text-sm">{item.product_category}</p>
                  <p className="text-gray-400 text-sm">
                    {t("cart.size")}: {item.selectedSize}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {t("cart.pieces")}: {item.quantity}
                  </p>
                </div>
  
                <div className="flex flex-col items-end">
                  <span className="text-gray-600 text-sm">
                    ${(item.product_selling * item.quantity).toFixed(2)} USD
                  </span>
                  
                  {/* Botón para eliminar producto */}
                  <button
                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    {t("cart.remove")}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )}
</div>



      </div>
    </nav>
  );
}

export default Header;