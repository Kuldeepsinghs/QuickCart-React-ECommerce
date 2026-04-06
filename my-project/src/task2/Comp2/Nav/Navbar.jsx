import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">

      {/* Logo */}
      <div className="text-2xl font-bold text-pink-500">
        Dribbble
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[350px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-transparent outline-none w-full text-sm"
        />
        <span className="text-pink-500 text-lg cursor-pointer">🔍</span>
      </div>

      {/* Menu Links */}
      <div className="flex items-center gap-6 text-gray-600 text-sm">
        <Link to="/shots" className="hover:text-black">Shots</Link>
        <Link to="/explore" className="hover:text-black">Explore</Link>
        <Link to="/hire" className="hover:text-black">Hire Talent</Link>
        <Link to="/gethired" className="hover:text-black">Get Hired</Link>
        <Link to="/community" className="hover:text-black">Community</Link>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-5">
        <Link
          to="/signup"
          className="text-gray-700 hover:text-black"
        >
          Sign up
        </Link>

        <Link
          to="/login"
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
        >
          Log in
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;