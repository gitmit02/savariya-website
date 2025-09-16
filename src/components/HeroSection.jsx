import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero.jpg)'}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="fade-in-up"> 
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-golden">Savariya</span>
              <br />
              <span className="text-2xl sm:text-5xl">Groom Sekection</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Crafted with tradition, designed for elegance. 
              Discover our exquisite collection of sherwanis, kurtas, and Coats suits 
              for your special day.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/collection"
                className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-3 bg-golden text-brown-900 font-semibold rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore Collection</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-3 border-2 border-golden text-golden font-semibold rounded-full hover:bg-golden hover:text-brown-900 transform hover:scale-105 transition-all duration-300"
              >
                <span>Book Consultation</span>
                <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-black bg-opacity-30 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-golden text-xl mb-2">✨</div>
                <h3 className="text-white font-semibold text-base">Custom Fitting</h3>
                <p className="text-gray-300 text-xs">Perfect tailoring for your body</p>
              </div>
              <div className="bg-black bg-opacity-30 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-golden text-xl mb-2">🎯</div>
                <h3 className="text-white font-semibold text-base">Timely Delivery</h3>
                <p className="text-gray-300 text-xs">Ready when you need it</p>
              </div>
              <div className="bg-black bg-opacity-30 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-golden text-xl mb-2">👔</div>
                <h3 className="text-white font-semibold text-base">Premium Quality</h3>
                <p className="text-gray-300 text-xs">Finest fabrics and craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
