import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-golden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                className="h-12 w-12 rounded-full border-2 border-golden" 
                src="/logo.png" 
                alt="Savariya Logo" 
              />
              <span className="font-heading text-2xl font-bold text-brown-800">
                Savariya
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-golden text-white shadow-lg' 
                    : 'text-brown-700 hover:text-golden hover:bg-brown-100'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-golden text-white shadow-lg' 
                    : 'text-brown-700 hover:text-golden hover:bg-brown-100'
                }`}
              >
                About
              </Link>
              <Link
                to="/collection"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/collection') 
                    ? 'bg-golden text-white shadow-lg' 
                    : 'text-brown-700 hover:text-golden hover:bg-brown-100'
                }`}
              >
                Collection
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-golden text-white shadow-lg' 
                    : 'text-brown-700 hover:text-golden hover:bg-brown-100'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-brown-700 hover:text-golden hover:bg-brown-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-golden transition-all duration-300"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brown-50 border-t border-brown-200">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/') 
                ? 'bg-golden text-white shadow-lg' 
                : 'text-brown-700 hover:text-golden hover:bg-brown-100'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/about') 
                ? 'bg-golden text-white shadow-lg' 
                : 'text-brown-700 hover:text-golden hover:bg-brown-100'
            }`}
          >
            About
          </Link>
          <Link
            to="/collection"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/collection') 
                ? 'bg-golden text-white shadow-lg' 
                : 'text-brown-700 hover:text-golden hover:bg-brown-100'
            }`}
          >
            Collection
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
              isActive('/contact') 
                ? 'bg-golden text-white shadow-lg' 
                : 'text-brown-700 hover:text-golden hover:bg-brown-100'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar