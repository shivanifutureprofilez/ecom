import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Pages", href: "/pages" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <div className="bg-white w-full shadow-md fixed top-4 left-0 z-50 ">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-800">Furnixar</span>
        </div>

        {/* Desktop & Tablet Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-yellow-600">
                {link.name} +
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
          <div className="relative">
            <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
          </div>
          <div className="relative">
            <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" />
          </div>
          <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" />
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
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

          {/* Icons under menu on mobile */}
          <div className="flex items-center space-x-4 mt-4">
            <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
            <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
            <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" />
            <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
