import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
    types: [
      {
        type: "error",
        background: "#f44336",
        duration: 2000,
        dismissible: false,
      },
    ],
  });

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
    notyf.error(t("product.remove_from_cart"));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Manejo de estado para los dropdowns
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="Navbar bg-white border border-gray-300 rounded-2xl flex justify-between w-full my-4 p-2.5">
      <div className="NavbarLogo">
        <Link to="/">
          <img src={nav01} className="h-8" alt={t("header.logo_alt")} />
        </Link>
      </div>
      <div className="NavbarMenu flex gap-4">
        {/* Botón de menú */}
        <div className="MenuButton flex">
          <button
            id="dropdown-nav"
            type="button"
            className="rounded-full size-8 bg-green-300 flex items-center justify-center"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            aria-label="Dropdown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon icon="tabler:menu-4" className="text-white size-5" />
          </button>

          {isMenuOpen && (
            <ul className="absolute right-18 top-14 w-48 bg-white border border-gray-300 rounded-2xl z-50 p-1" role="menu" aria-orientation="vertical">
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/team-outfit">
                  <span className="flex items-center gap-x-2">
                  <Icon icon="tabler:shirt-sport" className="size-5" />
                    {t("header.menu.team")}
                  </span>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/faq">
                  <span className="flex items-center gap-x-2">
                  <Icon icon="tabler:zoom-question" className="size-5" />
                    {t("header.menu.faq")}
                  </span>
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl" to="/about">
                  <span className="flex items-center gap-x-2">
                  <Icon icon="tabler:scuba-mask" className="size-5" />
                    {t("header.menu.about")}
                  </span>
                </Link>
              </li>
              {/* Botón de selección de idioma */}
              <div>
                <button
                  className="w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-2xl"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <span className="flex flex-row items-center gap-x-2">
                  <Icon icon="tabler:language-hiragana" className="size-5" />
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
                          <Icon icon="tabler:point-filled" className="size-3" />
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
        <div className="CartButton flex">
          <button
            className="rounded-full size-8 bg-green-300 flex items-center justify-center"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <div className="CartIndicator relative">
              <span className="absolute -top-2 -right-2 bg-red-400 size-4.5 rounded-full text-white text-center text-xs">
                {totalQuantity}
              </span>
              <Icon icon="tabler:shopping-cart" className="text-white size-5" />
            </div>
          </button>
          {isCartOpen && (
            <div className="absolute right-6 top-14 w-48 bg-white border border-gray-300 rounded-2xl z-50 p-2">
              {cartItems.length === 0 ? (
                <h6 className="text-gray-600 text-center">{t("cart.empty")}</h6>
              ) : (
                <>
                  <h6 className="text-gray-600 flex text-sm">
                    <span className="mr-2">{t("cart.subtotal")}</span>
                    {cartItems.reduce((total, item) => total + item.product_selling * item.quantity, 0).toFixed(2)} USD
                  </h6>
                  {totalQuantity < 2 ? (
                    <p className="text-red-400 text-sm">{t("cart.minimum_order", { min: 2 })}</p>
                  ) : (
                    <button className="CartCheckout btn btn-outline rounded-2xl btn-success btn-soft" onClick={() => navigate("/checkout")}>
                      {t("cart.checkout")}
                    </button>
                  )}
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