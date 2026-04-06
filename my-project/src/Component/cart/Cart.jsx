import React, { useContext } from "react";
import { CartContext } from "../../contextapi/Cartcontext";
import { Auth } from "../../contextapi/AuthContext";

const Cart = () => {

  const { cart, removeFromCart, increaseQty, decreaseQty, total } =
    useContext(CartContext);

  const { userdata } = useContext(Auth); // 

  // PROTECT CART
  if (!userdata) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-75px)] text-xl">
        Please login to view cart
      </div>
    );
  }

  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">

      {/* LEFT */}
      <div className="w-[65%]">
        <h1 className="text-2xl font-bold mb-6">🛒 Cart Items</h1>

        {cart.length === 0 ? (
          <p className="text-lg">No items in cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 mb-4 flex gap-6 items-center shadow rounded"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-red-500 font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  −
                </button>

                <span className="font-bold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* RIGHT */}
      <div className="w-[30%] bg-white p-6 rounded shadow h-fit mt-12">

        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span className="text-green-600">Free</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;