import React from "react";
import { MdOutlineBlock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OrderAlreadyPlaced = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-red-500 text-6xl sm:text-7xl mb-4">
        <MdOutlineBlock />
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
        Order Already Placed
      </h2>

      <p className="text-gray-600 text-sm sm:text-base max-w-md mb-6">
        You've already completed this order. Going back isn't allowed to prevent duplicate transactions or confusion.
      </p>

      <button
        onClick={() => navigate("/orders")}
        className="px-5 py-2.5 rounded-2xl text-white bg-red-500 hover:bg-red-600 transition-all duration-300 text-sm sm:text-base"
      >
        View My Orders
      </button>
    </div>
  );
};

export default OrderAlreadyPlaced;
