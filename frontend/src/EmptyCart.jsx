import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Icon */}
      <FaShoppingCart className="text-gray-400 text-6xl mb-4" />

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
        Your cart is empty
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Looks like you haven’t added anything yet.
      </p>

      {/* Optional CTA Button */}
      <a
        href="/"
        className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition duration-200"
      >
        Continue Shopping
      </a>
    </div>
  );
};

export default EmptyCart;
