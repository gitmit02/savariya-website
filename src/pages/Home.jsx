import React from 'react';
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import CollectionCard from '../components/CollectionCard'

const Home = () => {
  const featuredItems = [
    {
      image: '/collection/sherwani1.png',
      name: 'Royal Sherwani',
      price: '25000',
      description: 'Handcrafted royal sherwani with intricate embroidery and premium silk fabric',
      category: 'Sherwani' 
    },
    {
      image: '/collection/kurta2.png',
      name: 'Designer Kurta',
      price: '8000',
      description: 'Elegant designer kurta perfect for mehendi and sangeet ceremonies',
      category: 'Kurta'
    },
    {
      image: '/collection/coat1.png',
      name: 'Classic Coats',
      price: '12000',
      description: 'Traditional Coats suit with modern cuts and contemporary styling',
      category: 'Coats'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collection Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
            Featured <span className="text-golden">Collection</span>
          </h2>
          <p className="text-lg text-brown-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium groom wear, crafted with attention to detail 
            and designed to make your special day unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <CollectionCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/collection"
            className="inline-flex items-center px-8 py-4 bg-brown-800 text-white font-semibold rounded-full hover:bg-golden hover:text-brown-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View Complete Collection</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-brown-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
              Why Choose <span className="text-golden">Savariya</span>?
            </h2>
            <p className="text-lg text-brown-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern design to create exceptional groom wear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Premium Quality</h3>
              <p className="text-brown-600">Only the finest fabrics and materials are used in our creations</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Custom Tailoring</h3>
              <p className="text-brown-600">Perfect fit guaranteed with our expert tailoring services</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Timely Delivery</h3>
              <p className="text-brown-600">We ensure your outfit is ready well before your special day</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Personal Care</h3>
              <p className="text-brown-600">Dedicated styling consultation for your perfect look</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-800 mb-4">
            Happy <span className="text-golden">Customers</span>
          </h2>
          <p className="text-lg text-brown-600">
            See what our satisfied customers have to say about their Savariya experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-golden">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-brown-600 mb-4 italic">
              "Savariya made my wedding day perfect! The sherwani was absolutely stunning and the fit was impeccable. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                <span className="text-brown-900 font-bold">R</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-brown-800">Rajesh Kumar</h4>
                <p className="text-brown-500 text-sm">Groom, Mumbai</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-golden">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-brown-600 mb-4 italic">
              "Amazing quality and service! The team at Savariya understood exactly what I wanted and delivered beyond expectations."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                <span className="text-brown-900 font-bold">A</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-brown-800">Arjun Patel</h4>
                <p className="text-brown-500 text-sm">Groom, Delhi</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-golden">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-brown-600 mb-4 italic">
              "Professional service from start to finish. The kurta design was unique and the fabric quality exceptional!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                <span className="text-brown-900 font-bold">V</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-brown-800">Vikram Singh</h4>
                <p className="text-brown-500 text-sm">Groom, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-brown text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Look Your <span className="text-golden">Best</span>?
          </h2>
          <p className="text-lg text-brown-100 mb-8 leading-relaxed">
            Book a consultation with our expert stylists and discover the perfect outfit for your special day. 
            We'll help you create a look that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-golden text-brown-900 font-semibold rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Book Consultation</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
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

export default Home;