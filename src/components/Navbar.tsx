import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Nav</h1>

        {/* Desktop Menü */}
        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className={linkClass}>
              Store
            </NavLink>
          </li>
        </ul>

        {/* Sağ taraf (Cart + Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div onClick={openCart} className="relative cursor-pointer text-gray-700 hover:text-blue-500 transition-all duration-200">
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cartQuantity}
            </span>
          </div>

          {/* Hamburger (icon) */}
          <button className="md:hidden text-2xl" onClick={openCart}>
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menü */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/store" className={linkClass}>
                Store
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
