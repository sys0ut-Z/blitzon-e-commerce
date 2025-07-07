import React from "react";
import { useLocation } from "react-router-dom";

const Partner = () => {
  const location = useLocation();
  const state = location.state || {};
  const { name, image, character, review } = state;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white rounded-2xl shadow-lg mt-7">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          src={image}
          alt={name}
          className="w-[200px] h-[200px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 text-center md:text-left space-y-3 text-sm lg:text-base">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">{character}</p>
        <p className="text-gray-700 leading-relaxed">{review}</p>
      </div>
    </div>
  );
};

export default Partner;
