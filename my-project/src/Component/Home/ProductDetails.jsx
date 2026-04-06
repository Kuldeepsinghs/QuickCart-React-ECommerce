import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../contextapi/Cartcontext";
import { Auth } from "../../contextapi/AuthContext";
import { WishlistContext } from "../../contextapi/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);
  const { userdata } = useContext(Auth);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  // Fetch product
  async function fetchingData() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, [id]);

  // Loading UI
  if (!product) {
    return (
      <div className="h-[calc(100vh-75px)] flex justify-center items-center text-xl bg-gray-50">
        Loading Product...
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-75px)] flex justify-center items-center bg-gray-50">

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center border border-gray-200">

        {/* Image + Wishlist Heart */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4 relative">

          {/* ❤️ Heart Icon */}
          <div
            className="absolute top-3 right-3 text-2xl cursor-pointer hover:scale-110 transition"
            onClick={() => {
              if (!userdata) {
                toast.error("Please login to use wishlist");
                navigate("/login");
                return;
              }
              toggleWishlist(product);
            }}
          >
            {isInWishlist(product.id) ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </div>

          <img
            src={product.image}
            alt={product.title}
            className="w-[200px] h-[200px] object-contain mx-auto"
          />
        </div>

        {/* Price & Rating */}
        <div className="flex justify-center gap-6 text-lg font-semibold mb-2">
          <p>
            Price : <span className="text-green-600">${product.price}</span>
          </p>

          <p className="text-yellow-500">
            {"★".repeat(Math.round(product?.rating?.rate))}
            {"☆".repeat(5 - Math.round(product?.rating?.rate))}
            <span className="text-gray-600 ml-2 text-sm">
              ({product.rating.rate})
            </span>
          </p>
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold mb-3 text-gray-800">
          {product.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">

          {/* Add to Cart */}
          <button
            onClick={() => {
              if (!userdata) {
                toast.error("Please login to add items");
                navigate("/login");
                return;
              }
              addToCart(product);
            }}
            className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          {/* Close */}
          <Link to="/">
            <button className="px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition">
              Close
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;