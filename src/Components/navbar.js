import { FiSearch, FiHeart, FiShoppingCart, FiMoon } from "react-icons/fi";
//import logo from './Assets/logo.svg';
function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-white rounded-xl shadow-md mt-4 mx-4 px-8 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src={logo} alt="Furnixar" className="h-8 w-8" /> */}
        <span className="text-2xl font-bold text-gray-800">Furnixar</span>
      </div>
      {/* Menu */}
      <ul className="flex space-x-6 text-gray-700 font-semibold">
        <li>
          <a href="/home" className="hover:text-yellow-600">Home +</a>
        </li>
        <li>
          <a href="/pages" className="hover:text-yellow-600">Pages +</a>
        </li>
        <li>
          <a href="/shop" className="hover:text-yellow-600">Shop +</a>
        </li>
        <li>
          <a href="/blog" className="hover:text-yellow-600">Blog +</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-600">Contact +</a>
        </li>
        <li>
          <a href="/login" className="hover:text-yellow-600">Login</a>
        </li>
      </ul>
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FiSearch className="text-xl cursor-pointer hover:text-yellow-600" />
        <div className="relative">
          <FiHeart className="text-xl cursor-pointer hover:text-yellow-600" />
          {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">14</span> */}
        </div>
        <div className="relative">
          <FiShoppingCart className="text-xl cursor-pointer hover:text-yellow-600" />
          {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">22</span> */}
        </div>
        <FiMoon className="text-xl cursor-pointer hover:text-yellow-600" />
      </div>
    </nav>
  );
}

export default Navbar;