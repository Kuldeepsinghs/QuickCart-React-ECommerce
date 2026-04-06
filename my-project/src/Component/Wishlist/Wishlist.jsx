import React, { useContext } from "react";
import { WishlistContext } from "../../contextapi/WishlistContext";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 mb-4 flex gap-4 items-center shadow rounded"
          >
            <img src={item.image} className="w-20 h-20 object-contain" />

            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-green-600 font-bold">${item.price}</p>
            </div>

            <button
              onClick={() => toggleWishlist(item)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
