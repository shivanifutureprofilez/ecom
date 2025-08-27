import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Pages", href: "/pages" },
    { name: "Shop", href: "/shop" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
    { name: "Login", href: '/login' },
    { name: "Register", href: '/register' },
  ];

  return (
    <div className="bg-white w-full shadow-md fixed top-0 md:top-4 left-0 z-50 ">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-800">Furnixar</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-yellow-600">
                {link.name} +
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
          <div className="relative">
            <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
          </div>
          <div className="relative">
               <Link to="/cart"> 
            <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" />
         </Link>
          </div>
          <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" />
        </div>

        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="space-y-4 text-gray-700 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:text-yellow-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name} +
                </a>
              </li>
            ))}
          </ul>


          <div className="flex items-center space-x-4 mt-4">
            <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
            <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
            <Link to="/cart"> <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" /></Link>
            <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
