import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const NotAccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-red-500 text-5xl mb-4 flex justify-center">
          <FaLock />
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Access Denied
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Currently you don’t have permission to view this page. Please login with the appropriate account or return to the homepage.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotAccessPage;
