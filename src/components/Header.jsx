import React, { useState } from "react";
import { Link } from "react-router";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useAuth} from "../context/AuthContext";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {isLoggedIn , profile ,  logout}  = useAuth()

  const avatar_url = null;

  return (
    <header className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* LEFT SECTION: Logo & Desktop Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-orange-600">
                Blogify
              </Link>
            </div>
            {/* nav_bar */}
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
              {isLoggedIn && (
                <>
                  <Link
                    to="/editor"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  >
                    Write
                  </Link>
                  <Link
                    to="/manage-articles"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  >
                    My Articles
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* RIGHT SECTION: Profile ama Sign In/Up */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <div className="text-xs sm:text-sm font-medium text-gray-700">
                  Hello, {profile?.username}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    {avatar_url ? (
                      <img
                        className="w-8 h-8 rounded-full"
                        src={avatar_url}
                        alt="User"
                      />
                    ) : (
                      <FaUser className="text-gray-600 text-xs" />
                    )}
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute bg-white right-0 w-48 mt-0 pt-2 z-50">
                      <div className="bg-white rounded-md shadow-lg py-1 border border-gray-100">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/manage"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Manage Articles
                        </Link>
                        <Link
                          onClick={logout}
                          to="/signout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Signout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* SECTION: Marka isLoggedIn ay false tahay (Sign In & Sign Up) */
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium rounded-md text-orange-600 border border-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* HAMBURGER BUTTON (Mobile kaliya) */}
            <div className="sm:hidden flex items-center border-l pl-2 border-gray-100 ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-orange-600 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-base font-medium text-gray-700"
            >
              Home
            </Link>
            <Link
              to="/article"
              className="block py-2 text-base font-medium text-gray-700"
            >
              Article
            </Link>
            <Link
              to="/write"
              className="block py-2 text-base font-medium text-gray-700"
            >
              Write
            </Link>
            <Link
              to="/articles"
              className="block py-2 text-base font-medium text-gray-700"
            >
              My Articles
            </Link>

            {isLoggedIn ? (
              <div className="pt-2 border-t border-gray-100">
                <Link
                  to="/profile"
                  className="block py-2 text-base font-medium text-gray-700"
                >
                  Your Profile
                </Link>
                <Link
                  onClick={logout}
                  to="/signout"
                  className="block py-2 text-base font-medium text-red-600"
                >
                  Signout
                </Link>
              </div>
            ) : (
              <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
                <Link
                  to="/signin"
                  className="block py-2 text-base font-medium text-orange-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block py-2 text-base font-medium text-gray-600"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
