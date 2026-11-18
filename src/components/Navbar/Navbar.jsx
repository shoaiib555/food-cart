import { Link, NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { cartItems } = useCartContext();
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handleSreach = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      return;
    }
    navigate(`/allproducts?search=${search}`);

    setSearch("");
  };
  return (
    <>
      <header className="bg-amber-100 fixed top-0 right-0 left-0 z-50">
        <nav className="max-w-7xl px-10 mx-auto h-[12vh] md:h-[14vh] flex justify-between items-center">
          {/* logo with routes */}
          <Link to="/" className="text-3xl font-bold tracking-wider">
            <span className="text-orange-500">Food</span>Cart
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-10">
            <li>
              <NavLink
                to="/"
                className="text-lg font-medium tracking-wider text-orange-500"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/allproducts"
                className="text-lg font-medium tracking-wider hover:text-orange-500"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="font-medium tracking-wider hover:text-orange-500"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-medium tracking-wider hover:text-orange-500"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          {/* Nav Action`` */}
          <div className="flex gap-x-5 sm:gap-x-6 items-center">
            {/* Input Search Field */}
            <form onSubmit={handleSreach}>
              <div className="hidden lg:flex items-center border-2 border-orange-300 rounded-full">
                <input
                  type="text"
                  placeholder="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-0 py-1 px-3"
                />
                <button type="submit">
                  <IoSearchCircle className="w-8 h-8 text-orange-500" />
                </button>
              </div>
            </form>

            <div className="flex gap-x-3 justify-end sm:gap-x-6 -mr-5 sm:mr-0">
              {/* cart-icon */}
              <div className="relative">
                <TiShoppingCart className="text-3xl sm:text-4xl" />
                <span className="text-[9px] sm:text-[10px] absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 p-0.3 rounded-full flex justify-center items center bg-orange-400 text-black">
                  {cartItems.length}
                </span>
              </div>

              {/* Hamberger menu */}
              <button
                className="text-black text-2xl sm:text-3xl outline-0 md:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                <RxHamburgerMenu />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMenu ? (
            <ul className="flex flex-col gap-y-2 bg-orange-500/15 p-1 text-center absolute top-17 right-3 backdrop-blur-xl rounded-lg md:hidden">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className="text-xs sm:text-sm font-medium tracking-wider text-orange-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allproducts"
                  onClick={() => setShowMenu(false)}
                  className="text-xs sm:text-sm font-medium tracking-wider hover:text-orange-500"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setShowMenu(false)}
                  className="text-xs sm:text-sm font-medium tracking-wider hover:text-orange-500"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setShowMenu(false)}
                  className="text-xs sm:text-sm font-medium tracking-wider hover:text-orange-500"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <form
                  onSubmit={handleSreach}
                  className="flex items-center border-2 border-orange-300 rounded-full"
                >
                  <input
                    type="text"
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="outline-0 pl-1 w-22 sm:w-32 sm:pl-2 py-1 text-[10px] sm:text-sm"
                  />
                  <button type="submit">
                    <IoSearchCircle className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500" />
                  </button>
                </form>
              </li>
            </ul>
          ) : (
            ""
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
