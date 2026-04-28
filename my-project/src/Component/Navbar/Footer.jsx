import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div
        className="w-full h-[400px] flex items-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082349566-187342175e2f')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="ml-10 md:ml-20 text-white relative max-w-[500px]">
          <p className="text-sm tracking-widest">CUSTOMER SUPPORT</p>

          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            We are here to help
          </h1>

          <p className="mt-3 text-gray-200">
            Shop fashion, electronics, and more with ease and confidence.
          </p>

          <button className="mt-6 border border-white px-6 py-2 hover:bg-white hover:text-black transition">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 md:px-20 py-12">
        {/* Contact */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">QuickCart</h2>
          <p className="text-sm leading-6">
            Simple shopping for fashion, jewellery, and electronics.
          </p>
          <p className="mt-3 text-sm">support@QuickCart.com</p>
          <p className="text-sm">+91 6361545840</p>
        </div>

        {/* Shop Categories */}
        <div>
          <h2 className="text-white font-semibold mb-3">Shop</h2>
          <Link to="/?category=men" className="block hover:text-blue-400">
            Men
          </Link>
          <Link to="/?category=women" className="block hover:text-blue-400">
            Women
          </Link>
          <Link to="/?category=jewellery" className="block hover:text-blue-400">
            Jewellery
          </Link>
          <Link to="/?category=electronics" className="block hover:text-blue-400">
            Electronics
          </Link>
          <Link to="/" className="block hover:text-blue-400">
            Accessories
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-3">Quick Links</h2>
          <Link to="/" className="block hover:text-blue-400">
            Home
          </Link>
          <Link to="/wishlist" className="block hover:text-blue-400">
            Wishlist
          </Link>
          <Link to="/cart" className="block hover:text-blue-400">
            Cart
          </Link>
          <Link to="/Login" className="block hover:text-blue-400">
            Login
          </Link>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-3">Newsletter</h2>
          <p className="mb-3 text-sm">Get product updates and offers.</p>

          <div className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="px-3 py-2 bg-white text-black w-full outline-none"
            />
            <button className="bg-blue-500 text-white px-4 hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black border-t border-gray-700 flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-4 text-gray-400">
        <p>&copy; 2026 QuickCart. All rights reserved.</p>

        <div className="flex gap-5 mt-3 md:mt-0 text-xl">
          <FaFacebook className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
