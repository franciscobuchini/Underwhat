import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../components/CartContext";
import nav01 from "../assets/Logo/nav01.webp";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

function Header() {
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
    notyf.error("Product removed from cart!");
  };

  return (
    <div className="Header flex justify-center w-full my-4">
      <nav className="Navbar navbar bg-white border border-gray-200 rounded-2xl w-full">
        <div className="NavbarLogo flex flex-1 items-center">
          <Link to="/">
            <img src={nav01} className="h-8" alt="Underwhat Logo" />
          </Link>
        </div>
        
        <div className="NavbarMenu navbar-end flex items-center gap-2">
          <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
            <button
              id="dropdown-nav"
              type="button"
              className="NavbarMenuButton dropdown-toggle btn btn-text btn-circle size-10" 
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown">
              <span className="icon-[tabler--menu-4] text-gray-400 size-6"></span>
            </button>
            
            <ul className="DropdownMenu dropdown-menu dropdown-open:opacity-100 hidden bg-white border border-gray-200 rounded-2xl shadow-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-nav">
              
              <li>
                <Link className="dropdown-item text-gray-600" to="/team-outfit">
                  <span className="flex items-center gap-x-2">
                    <span className="icon-[tabler--shirt-sport]"></span>
                    Team Outfit
                  </span>
                </Link>
              </li>
              
              <li>
                <Link className="dropdown-item text-gray-600" to="/faq">
                  <span className="flex items-center gap-x-2">
                    <span className="icon-[tabler--zoom-question]"></span>
                    FAQ
                  </span>
                </Link>
              </li>
              
              <li>
                <Link className="dropdown-item text-gray-600" to="/about">
                  <span className="flex items-center gap-x-2">
                    <span className="icon-[tabler--scuba-mask]"></span>
                    About Us
                  </span>
                </Link>
              </li>
              <hr className="border-base-content/50 mx-4" />
              <div>
                <button id="nested-collapse-pages" className="text-gray-600 collapse-toggle dropdown-item collapse-open:text-gray-600 collapse-open:bg-base-content/10 justify-between" data-collapse="#nested-collapse-pages-content">
                  <span className="flex items-center gap-x-2">
                    <span className="icon-[tabler--language-hiragana]"></span>
                    Language
                  </span>
                  <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                </button>
                <div className="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="nested-collapse-pages" id="nested-collapse-pages-content">
                  <ul className="py-3 ps-3">
                    <li>
                      <a className="dropdown-item text-gray-600" href="#">
                        <span className="icon-[tabler--point]"></span>
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-gray-600" href="#">
                        <span className="icon-[tabler--point]"></span>
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-gray-600" href="#">
                        <span className="icon-[tabler--point]"></span>
                        French
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <div className="NavbarCart dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
            <button
              id="dropdown-nav"
              type="button"
              className="NavbarCartButton dropdown-toggle btn btn-text btn-circle size-10"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown">
              
              <div className="CartIndicator indicator">
                <span className="indicator-item bg-primary size-4.5 rounded-full text-white text-center text-xs">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
                <span className="icon-[tabler--shopping-cart] text-gray-400 size-6"></span>
              </div>
            </button>
            <div className="DropdownMenu dropdown-menu dropdown-open:opacity-100 hidden bg-white border border-gray-200 rounded-2xl shadow-none min-w-80"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-scrollable">
              <div className="DropdownHeader dropdown-header justify-between p-4 align-middle border-none">
                {cartItems.length === 0 ? (
                  <h6 className="text-gray-600 pl-4">Cart is empty</h6>
                ) : (
                  <h6 className="text-gray-600">
                    Subtotal: $
                    {cartItems
                      .reduce((total, item) => total + item.product_selling * item.quantity, 0)
                      .toFixed(2)}
                  </h6>
                )}
                <button
                className={`CartCheckout btn btn-text btn-outline rounded-2xl btn-success btn-soft ${
                  cartItems.length === 0 ? "hidden" : ""
                }`}
                onClick={() => navigate('/checkout')}>
                  <small> Checkout </small>
                  <span className="icon-[tabler--shopping-cart-check] size-6"></span>
                </button>
              </div>
              <hr className="border-base-content/50 mx-4" />
              <div className="DropdownCart vertical-scrollbar rounded-scrollbar text-gray-600 overflow-auto max-md:max-w-60">
              {cartItems.map((item, index) => (
                <div key={`${item.product_name}-${item.selectedSize}`} className="ProductAdded dropdown-item rounded-2xl flex space-x-2">
                  <div className="ProductImage rounded-md">
                    <img 
                      className="w-20 object-cover" 
                      src={item.image} 
                      alt={item.product_name}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <h6 className="ProductName text-gray-600">{item.product_name}</h6>
                      <p className="ProductPrice text-gray-600">
                        <small>${(item.product_selling * item.quantity).toFixed(2)} USD</small>
                      </p>
                    </div>
                    <div className="flex flex-col items-left">
                      <p className="ProductCategory text-gray-400">
                        <small>{item.product_category}</small>
                      </p>
                      <p className="ProductSize text-gray-400">
                        <small>Size: {item.selectedSize}</small>
                      </p>
                      <p className="ProductPieces text-gray-400">
                        <small>Pieces: {item.quantity}</small>
                      </p>
                      <button
                        className="ProductRemove text-red-400 hover:text-red-700 w-min"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        <small>Remove</small>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;