//Header.jsx
import { useCart } from "../components/CartContext";
import nav01 from "../assets/Logo/nav01.webp";

function Header() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="Header">
      <nav className="Navbar navbar bg-white rounded-2xl shadow">
        <div className="NavbarLogo flex flex-1 items-center ">
          <a href="#">
            <img src={nav01} className="h-8" />
          </a>
        </div>
        <div className="NavbarMenu navbar-end flex items-center gap-4">
          <div className="NavbarCart dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
            <button
              id="dropdown-scrollable"
              type="button"
              className="NavbarCartButton dropdown-toggle btn btn-text btn-circle size-10"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <div className="CartIndicator indicator">
                <span className="indicator-item bg-error size-4 rounded-full text-white text-center text-xs">
                  {cartItems.length}
                </span>
                <span className="icon-[tabler--shopping-cart] text-gray-400 size-[1.375rem]"></span>
              </div>
            </button>

            <div className="DropdownMenu dropdown-menu dropdown-open:opacity-100 hidden rounded-2xl bg-white" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-scrollable">
              <div className="DropdownHeader dropdown-header justify-center">
                <h6 className="text-gray-600">Cart</h6>
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

