import React, { useState } from 'react'
import CollectionCard from '../components/CollectionCard'



const Collection = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const allProducts = [
    {
      image: '/collection/sherwani1.png',
      name: 'Royal Sherwani',
      price: '25000',
      description: 'Handcrafted royal sherwani with intricate gold embroidery and premium silk fabric',
      category: 'Sherwani'
    },
    {
      image: '/collection/sherwani2.png',
      name: 'Classic Sherwani',
      price: '22000',
      description: 'Traditional sherwani with elegant threadwork and rich velvet texture',
      category: 'Sherwani'
    },
    {
      image: '/collection/sherwani3.png',
      name: 'Designer Sherwani',
      price: '28000',
      description: 'Contemporary sherwani with modern cuts and luxurious fabric blend',
      category: 'Sherwani'
    },
    {
      image: '/collection/kurta1.png',
      name: 'Designer Kurta',
      price: '8000',
      description: 'Elegant designer kurta perfect for mehendi and sangeet ceremonies',
      category: 'Kurta'
    },
    {
      image: '/collection/kurta2.png',
      name: 'Silk Kurta',
      price: '12000',
      description: 'Premium silk kurta with delicate mirror work and ethnic prints',
      category: 'Kurta'
    },
    {
      image: '/collection/coat4.png',
      name: 'Desiner Coat',
      price: '6000',
      description: 'Comfortable designer coat with modern block prints and comfortable fit',
      category: 'Coats'
    },
    {
      image: '/collection/coat1.png',
      name: 'Black Velvet Designer Coat',
      price: '12000',
      description: 'A premium black coat with rich velvet detailing and patterned lapel work, perfect for weddings and grand celebrations.',
      category: 'Coats'
    },
    {
      image: '/collection/coat2.png',
      name: 'Light Grey Slim-Fit Coat',
      price: '10000',
      description: 'A modern light grey slim-fit coat with sleek black piping, ideal for receptions, engagements, and summer occasions.',
      category: 'Coats'
    },
    {
      image: '/collection/coat3.png',
      name: 'Classic Black Tuxedo Coat',
      price: '15000',
      description: 'A timeless black tuxedo-style coat with embroidered lapel and elegant finishing, designed for formal events and special evenings.',
      category: 'Coats'
    }
  ]

  const categories = ['All', 'Sherwani', 'Kurta', 'Coats']
  
  const filteredProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brown-800 to-brown-600 text-white py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/collections.png)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-golden">Collection</span>
          </h1>
          <p className="text-xl text-brown-100 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite range of premium groom wear, crafted with precision and designed for perfection
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-brown-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-golden text-brown-900 shadow-lg'
                    : 'bg-white text-brown-700 border-2 border-brown-200 hover:border-golden hover:text-golden'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 bg-brown-200 text-brown-700 text-xs px-2 py-1 rounded-full">
                    {allProducts.filter(p => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brown-800 mb-4">
              {activeFilter === 'All' ? 'Complete Collection' : `${activeFilter} Collection`}
            </h2>
            <p className="text-brown-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'design' : 'designs'} available
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="fade-in-up">
                <CollectionCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-brown-100 rounded-lg p-8">
                <svg className="w-16 h-16 text-brown-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-brown-800 mb-2">No products found</h3>
                <p className="text-brown-600">Try adjusting your filter selection</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-brown-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brown-800 mb-4">
              Why Choose Our <span className="text-golden">Collection</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-800 mb-2">Premium Fabrics</h3>
              <p className="text-brown-600 text-sm">Finest silk, cotton, and blended materials sourced from renowned textile mills</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-800 mb-2">Custom Fitting</h3>
              <p className="text-brown-600 text-sm">Personal measurements and fittings ensure perfect silhouette and comfort</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-800 mb-2">Handcrafted Details</h3>
              <p className="text-brown-600 text-sm">Intricate embroidery, beadwork, and traditional embellishments by skilled artisans</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-800 mb-2">Timely Delivery</h3>
              <p className="text-brown-600 text-sm">Guaranteed delivery 7 days before your event with multiple fittings included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-brown text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Found Your Perfect <span className="text-golden">Look</span>?
          </h2>
          <p className="text-lg text-brown-100 mb-8 leading-relaxed">
            Schedule a consultation to see our collection in person and get expert styling advice for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-golden text-brown-900 font-semibold rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Consultation</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center px-8 py-4 border-2 border-golden text-golden font-semibold rounded-full hover:bg-golden hover:text-brown-900 transform hover:scale-105 transition-all duration-300"
            >
              <span>Call Now</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collection;