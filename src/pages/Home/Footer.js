import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start min-w-[180px]">
          <div className="flex items-center space-x-2 mb-2">
            {/* <img src="/logo.svg" alt="Furnixar" className="h-8 w-8" /> */}
            <span className="text-2xl font-bold text-gray-800">Furnixar</span>
          </div>
          <p className="text-gray-600 text-sm max-w-[180px]">
            Furnixar is a modern furniture template for an eCommerce website designed to help you create an impressive online store.
          </p>
        </div>
        {/* Footer Columns */}
        <div className="flex flex-wrap gap-8 md:gap-0">
          {/* Sitemap */}
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className="font-bold mb-2">Sitemap</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>About</li>
              <li>Team</li>
              <li>Portfolio</li>
              <li>Clients</li>
              <li>Error</li>
            </ul>
          </div>
          {/* Others */}
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className="font-bold mb-2">Others</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Shipping Method</li>
              <li>Payment Method</li>
              <li>My Account</li>
              <li>Coming Soon</li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className="font-bold mb-2">Social Media</h4>
            <ul className="space-y-1 text-gray-700 text-sm flex flex-col">
              <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
              <li className="flex items-center gap-2"><FaTwitter /> Twitter</li>
              <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
              <li className="flex items-center gap-2"><FaLinkedinIn /> Linkedin</li>
            </ul>
          </div>
          {/* Shop */}
          <div className="px-6 border-r border-dotted border-gray-300">
            <h4 className="font-bold mb-2">Shop</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Shop</li>
              <li>Product Single</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Wishlist</li>
            </ul>
          </div>
          {/* Customer Service */}
          <div className="px-6">
            <h4 className="font-bold mb-2">Customer Service</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>FAQs</li>
              <li>Terms & Condition</li>
              <li>Return Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */} 
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 Furnixar Develop with <FaHeart className="inline text-red-500 mx-1" /> By Shreethemes
      </div>
    </footer>
  )
}

export default Footer;
