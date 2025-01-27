//Header.jsx
import { useCart } from "../components/CartContext";
import nav01 from "../assets/Logo/nav01.webp";

function Header() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="Header">
      <nav className="Navbar navbar bg-white border border-gray-200 rounded-2xl">
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
                <a class="dropdown-item text-gray-600" href="#">
                  <span class="flex items-center gap-x-2">
                    <span class="icon-[tabler--message-chatbot]"></span>
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
                <span className="indicator-item bg-primary size-4 rounded-full text-white text-center text-xs">
                  {cartItems.length}
                </span>
                <span className="icon-[tabler--shopping-cart] text-gray-400 size-6"></span>
              </div>
            </button>

            <div className="DropdownMenu dropdown-menu dropdown-open:opacity-100 hidden bg-white border border-gray-200 rounded-2xl shadow-none min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-scrollable">
              <div className="DropdownHeader dropdown-header justify-between p-4 align-middle">
                <h6 className="text-gray-600"> Cart </h6>
                <button
                  className={`CartContinue btn btn-text btn-circle ${
                    cartItems.length > 0 ? " btn-success" : "text-gray-400 bg-white cursor-not-allowed"
                  }`}
                >
                  <span className="icon-[tabler--shopping-cart-check] size-6"></span>
                </button>
              </div>
              <div className="DropdownCart vertical-scrollbar rounded-scrollbar text-gray-600 overflow-auto max-md:max-w-60">
                {cartItems.map((item, index) => (
                  <div key={index} className="ProductAdded dropdown-item rounded-2xl flex space-x-4">
                    <div className="ProductImage">
                      <img className="rounded-2xl h-20 object-cover" src={item.image} />
                    </div>
                    <div>
                      <h6 className="ProductName text-gray-600">{item.product_name}</h6>
                      <p className="ProductSize text-gray-400">
                        <small>Size: {item.selectedSize}</small>
                      </p>
                      <p className="ProductPrice text-gray-400">
                        <small>{item.product_selling.toFixed(2)} USD</small>
                      </p>
                      <button
                        className="ProductDelete text-red-400"
                        onClick={() => removeFromCart(index)}
                      >
                        <small>Delete</small>
                      </button>
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

