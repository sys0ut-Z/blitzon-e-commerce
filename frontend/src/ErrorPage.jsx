import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-[100px] font-extrabold text-[#FF073A] leading-none">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#FF073A] text-white px-4 py-2 rounded-xl hover:bg-[#e00632] transition"
      >
        <BsArrowLeftCircle className='w-4 h-4'/>
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
