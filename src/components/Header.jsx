import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  
  const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const { isLoggedIn, profile, logout } = useAuth();
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* LEFT SECTION */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center ">
              <Link to="/" className="text-2xl font-bold text-orange-600">
                Blogify
              </Link>
            </div>

            {/* Nav-bar: Added 'ml-10' for space after logo and 'space-x-8' for space between links */}
            <nav className="hidden sm:ml-10 sm:flex sm:space-x-8 h-full">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/article"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Article
              </Link>
              <Link
                to="/write"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Write
              </Link>
              <Link
                to="/articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                My Articles
              </Link>
            </nav>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center space-x-6">
            {" "}
            {/* 'space-x-6' waxay kala fogaynaysaa magaca iyo badannada */}
            {/* profile */}
            <div className="hidden md:block">
              <span className="text-sm font-medium text-gray-700">
                Hello! Hayat
              </span>
            </div>
            {/* buttons container */}
            <div className="flex items-center space-x-3">
              {" "}
              {/* 'space-x-3' waxay kala fogaynaysaa labada button dhexdooda */}
              <Link
                to="/signin"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-orange-600 bg-white border border-orange-600 hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
