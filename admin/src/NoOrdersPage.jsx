import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NoOrdersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="text-primary text-6xl sm:text-7xl mb-4">
        <MdOutlineShoppingBag />
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">No Orders Yet</h2>
      <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md">
        Looks like you haven't placed any orders yet. When you do, they’ll appear here.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-5 py-2.5 rounded-2xl text-white bg-red-500 hover:bg-red-600 transition-all duration-300 text-sm sm:text-base"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default NoOrdersPage;
