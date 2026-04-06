import React from "react";
import { Link } from "react-router-dom";

const Homecards = ({ title, imageUrl, price, desc, id }) => {
  return (
    <div className="w-[250px] h-[340px] rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 flex flex-col items-center overflow-hidden">

      {/* Image Section */}
      <div className="w-full h-[170px] flex items-center justify-center bg-gray-50">
        <img
          className="h-[140px] object-contain"
          src={imageUrl}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col items-center text-center">
        
        <h1 className="text-sm font-semibold text-gray-800">
          {title.slice(0, 35)}
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          {desc.slice(0, 50)}...
        </p>

        <p className="text-green-600 font-bold mt-2">
          ${price}
        </p>

        <Link to={`/productdetails/${id}`}>
          <button className="mt-3 px-4 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            View Info
          </button>
        </Link>

      </div>

    </div>
  );
};

export default Homecards;