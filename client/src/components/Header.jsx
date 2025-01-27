//Header.jsx
import { useCart } from "../components/CartContext";
import nav01 from "../assets/Logo/nav01.webp";

function Header() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="Header flex justify-center w-full my-4">
      <nav className="Navbar navbar bg-white border border-gray-200 rounded-2xl w-4/5">
        <div className="NavbarLogo flex flex-1 items-center ">
          <a href="#">
            <img src={nav01} className="h-8" />
          </a>
        </div>
        <div className="NavbarMenu navbar-end flex items-center gap-2">
          <div class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
            <button
              id="dropdown-nav"
              type="button"
              class="NavbarMenuButton dropdown-toggle btn btn-text btn-circle size-10" 
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown" >
              <span class="icon-[tabler--menu-4] text-gray-400 size-6"></span>
            </button>
            <ul
              class="DropdownMenu dropdown-menu dropdown-open:opacity-100 hidden bg-white border border-gray-200 rounded-2xl shadow-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-nav" >
              <li>
                <a class="dropdown-item text-gray-600" href="#">
                  <span class="flex items-center gap-x-2">
                    <span class="icon-[tabler--zoom-question]"></span>
                    FAQ
                  </span>
                </a>
              </li>
              <li>
                <a className="dropdown-item text-gray-600" href="#">
                  <span className="flex items-center gap-x-2">
                    <span className="icon-[tabler--message-chatbot]"></span>
                    Contact
                  </span>
                </a>
              </li>
              <li>
                <a class="dropdown-item text-gray-600" href="#">
                  <span class="flex items-center gap-x-2">
                    <span class="icon-[tabler--scuba-mask]"></span>
                    About Us
                  </span>
                </a>
              </li>
              <hr class="border-base-content/25 -mx-2 my-3" />
              <div>
                <button id="nested-collapse-pages" className="text-gray-600 collapse-toggle dropdown-item collapse-open:text-gray-600 collapse-open:bg-base-content/10 justify-between" data-collapse="#nested-collapse-pages-content">
                  <span class="flex items-center gap-x-2">
                    <span class="icon-[tabler--language-hiragana]"></span>
                    Language
                  </span>
                  <span class="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
                </button>
                <div class="collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="nested-collapse-pages" id="nested-collapse-pages-content">
                  <ul class="py-3 ps-3">
                    <li>
                      <a class="dropdown-item text-gray-600" href="#">
                        <span class="icon-[tabler--point]"></span>
                        English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-gray-600" href="#">
                        <span class="icon-[tabler--point]"></span>
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-gray-600" href="#">
                        <span class="icon-[tabler--point]"></span>
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
              aria-label="Dropdown"
            >
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
              <div className="DropdownHeader dropdown-header justify-between p-4 align-middle">
                {cartItems.length === 0 ? (
                  <h6 className="text-gray-600">Cart Empty</h6>
                ) : (
                  <h6 className="text-gray-600">
                    Subtotal: $
                    {cartItems
                      .reduce((total, item) => total + item.product_selling * item.quantity, 0)
                      .toFixed(2)}
                  </h6>
                )}
                <button
                  className={`CartCheckout btn btn-text btn-outline ${
                    cartItems.length > 0 ? "btn-success btn-soft" : "text-gray-400 bg-white cursor-not-allowed"
                  }`}
                >
                  <small> Checkout </small>
                  <span className="icon-[tabler--shopping-cart-check] size-6"></span>
                </button>
              </div>
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
                        onClick={() => removeFromCart(index)}
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