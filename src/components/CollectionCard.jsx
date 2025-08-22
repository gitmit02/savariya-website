import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionCard = ({ image, name, price, description, category }) => {

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-golden text-brown-900 px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-brown-800 px-6 py-2 rounded-full font-semibold hover:bg-golden hover:text-brown-900 transition-colors duration-300 transform scale-95 hover:scale-100">
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-heading text-xl font-bold text-brown-800 mb-2 group-hover:text-golden transition-colors duration-300">
            {name}
          </h3>
          <p className="text-brown-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-golden">₹{price}</span>
            <span className="text-brown-500 text-sm ml-1">onwards</span>
          </div>
          <button onClick={()=>{navigate('../contact')}} className="bg-brown-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-golden hover:text-brown-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Inquire</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>

        {/* Features */}
        <div className="mt-4 pt-4 border-t border-brown-100">
          <div className="flex justify-between text-xs text-brown-600">
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-golden" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom Fit
            </span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-golden" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Premium Fabric
            </span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-golden" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Fast Delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard;