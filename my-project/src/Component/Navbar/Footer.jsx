import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">

      {/* Top Banner */}
      <div
        className="w-full h-[400px] flex items-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082349566-187342175e2f')" // NEW IMAGE
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
      <div className="bg-black text-gray-300 grid grid-cols-2 md:grid-cols-4 gap-10 px-10 md:px-20 py-12">

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <p>Email: support@QuickCart.com</p>
          <p>Phone: +91 6361545840</p>
        </div>

        {/* Shop Categories */}
        <div>
          <h2 className="text-white font-semibold mb-3">Shop</h2>
          <p className="hover:text-white cursor-pointer">Men</p>
          <p className="hover:text-white cursor-pointer">Women</p>
          <p className="hover:text-white cursor-pointer">Jewellery</p>
          <p className="hover:text-white cursor-pointer">Electronics</p>
          <p className="hover:text-white cursor-pointer">Accessories</p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-semibold mb-3">Company</h2>
          <p className="hover:text-white cursor-pointer">About Us</p>
          <p className="hover:text-white cursor-pointer">Careers</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-3">Newsletter</h2>

          <div className="flex">
            <input
              type="text"
              placeholder="Your email"
              className="px-3 py-2 text-white w-full outline-none"
            />
            <button className="bg-white text-black px-4 hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-black border-t border-gray-700 flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-4 text-gray-400">

        <p>© 2026 Ecart. All rights reserved.</p>

        <div className="flex gap-5 mt-3 md:mt-0 text-xl">
          <FaFacebook className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
        </div>

      </div>

    </div>
  );
};

export default Footer;