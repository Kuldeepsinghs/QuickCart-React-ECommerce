import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Auth } from "../../contextapi/AuthContext";
import { FaShoppingCart, FaHeart, FaShoppingBag, FaHome } from "react-icons/fa";
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
    <nav className="sticky top-0 z-50 flex bg-black text-white justify-between px-8 h-[75px] w-full items-center shadow-lg shadow-black/20">

      {/* LEFT - Logo */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer hover:text-cyan-400"
        title="Go home"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md shadow-blue-500/30">
          <FaShoppingBag className="text-xl" />
        </span>
        <h1 className="text-lg font-semibold tracking-wide">QuickCart</h1>
      </button>

      {/* CENTER - Search */}
      <div className="flex items-center border border-blue-500/60 bg-blue-500/10 rounded-full px-4 py-2 w-[330px] focus-within:border-blue-400">
        <CiSearch className="mr-2 text-xl text-blue-300" />
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handlesearch}
          className="outline-none bg-transparent text-white w-full placeholder-blue-100/70"
        />
      </div>

      {/* RIGHT - Actions */}
      <div className="flex items-center gap-8">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "hover:text-blue-400"
          }
          title="Home"
        >
          <FaHome className="text-xl" />
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

        {/* Cart */}
        <NavLink to="/cart">
          <div className="relative cursor-pointer hover:text-blue-400">
            <FaShoppingCart className="text-xl" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs px-2 py-[2px] rounded-full">
                {totalItems}
              </span>
            )}
          </div>
        </NavLink>

        {/* USER SECTION */}
        {userdata ? (
          <>
            {/* Profile */}
            <div className="flex items-center gap-3 max-w-[180px]">
              <img
                className="w-8 h-8 rounded-full object-cover shrink-0"
                src={userdata?.photoURL}
                alt="user"
              />
              <p className="text-sm truncate">{userdata?.displayName}</p>
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
