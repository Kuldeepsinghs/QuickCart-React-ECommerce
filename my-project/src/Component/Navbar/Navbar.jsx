import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Auth } from "../../contextapi/AuthContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import logo from "../../asset/logo.png";
import { CartContext } from "../../contextapi/Cartcontext";
import { WishlistContext } from "../../contextapi/WishlistContext";

const Navbar = ({ search, setSearch }) => {
  const { cart, clearCart } = useContext(CartContext);
  const totalItems = cart.length;

  const { userdata, logout } = useContext(Auth);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  function handlesearch(e) {
    setSearch(e.target.value);
  }

  return (
    <nav className="flex bg-black text-white justify-between px-6 h-[75px] w-full items-center">

      {/* LEFT - Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-auto object-contain"
        />
        <h1 className="text-lg font-semibold tracking-wide">QuickCart</h1>
      </div>

      {/* CENTER - Search */}
      <div className="flex items-center border border-gray-600 rounded-md px-3 py-2 w-[300px]">
        <CiSearch className="mr-2 text-lg" />
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handlesearch}
          className="outline-none bg-black text-white w-full placeholder-gray-400"
        />
      </div>

      {/* RIGHT - Actions */}
      <div className="flex items-center gap-6">

        {/* Cart */}
        <NavLink to="/cart">
          <div className="relative cursor-pointer hover:text-cyan-400">
            <FaShoppingCart className="text-xl" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </NavLink>

        {/* Wishlist */}
        <NavLink to="/wishlist">
          <div className="relative cursor-pointer hover:text-red-400">
            <FaHeart className="text-xl" />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                {wishlist.length}
              </span>
            )}
          </div>
        </NavLink>

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-cyan-400" : "hover:text-cyan-400"
          }
        >
          Home
        </NavLink>

        {/* USER SECTION */}
        {userdata ? (
          <>
            {/* Profile */}
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={userdata?.photoURL}
                alt="user"
              />
              <p className="text-sm">{userdata?.displayName}</p>
            </div>

            {/* Logout */}
            <button
              onClick={() => {
                logout();
                clearCart();
                navigate("/");
              }}
              className="px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/Login" className="hover:text-cyan-400">
              Login
            </NavLink>
            <NavLink to="/Register" className="hover:text-cyan-400">
              Register
            </NavLink>
          </>
        )}
      </div>

    </nav>
  );
};

export default Navbar;