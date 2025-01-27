//Header.jsx
import nav01 from '../assets/Logo/nav01.webp';

function Header() {

  return (
    <div className="Header">
      <nav className="Navbar navbar bg-white rounded-2xl shadow">
        <div className="NavbarLogo flex flex-1 items-center ">
          <a href="#">
            <img src={nav01} className="h-8"/>
          </a>
        </div>
        <div className="NavbarMenu navbar-end flex items-center gap-4">
          <div className="NavbarCart dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
            <button id="dropdown-scrollable" type="button" className="NavbarCartButton dropdown-toggle btn btn-text btn-circle size-10" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <div className="CartIndicator indicator">
                <span className="indicator-item bg-error size-2 rounded-full"></span>
                <span className="icon-[tabler--shopping-cart] text-gray-400 size-[1.375rem]"></span>
              </div>
            </button>

            <div className="DropdownMenu dropdown-menu dropdown-open:opacity-100 hidden rounded-2xl bg-white" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-scrollable">
              <div className="DropdownHeader dropdown-header justify-center">
                <h6 className="text-gray-600">Cart</h6>
              </div>
              <div className="DropdownCart vertical-scrollbar rounded-scrollbar text-gray-600 overflow-auto max-md:max-w-60">
                <div className="ProductAdded dropdown-item rounded-2xl">
                  <div className="ProductImage">
                    <img className="rounded-2xl h-20 object-cover" src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" />
                  </div>
                  <div>
                    <h6 className="ProductName text-gray-600">Product Name</h6>
                    <p className="ProductSize text-gray-400"> <small>Product Size</small> </p>
                    <p className="ProductPrice text-gray-400"> <small>Product Price</small> </p>
                    <a className="ProductDelete text-red-400"> <small>Delete</small> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Header;
