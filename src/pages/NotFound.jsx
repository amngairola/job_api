import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <FaExclamationTriangle className="text-yellow-400 text-7xl mb-6 animate-bounce" />
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
      >
        Go to Homepage
      </Link>
    </section>
  );
};

export default NotFound;
