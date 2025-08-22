import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brown-800 text-white py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero.jpg)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900 to-brown-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-golden">Savariya</span>
          </h1>
          <p className="text-xl text-brown-100 max-w-3xl mx-auto leading-relaxed">
            Crafting premium groom wear with a perfect blend of tradition and contemporary elegance since 2010
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-800 mb-6">
                Our <span className="text-golden">Story</span>
              </h2>
              <div className="space-y-4 text-brown-600 leading-relaxed">
                <p>
                  Founded in 2021, Savariya – Groom Selection is a one-stop destination for premium men’s wear in Karol Bagh, Delhi. The shop was started by three partners – Mr. Jaswant Singh, Mr. Ajay Jha, and Mr. Raju, with Mr. Jaswant leading the way through his 20 years of selling experience in market and deep passion for men’s fashion.                </p>
                <p>
                  At Savariya, we specialize in groom wear and traditional men’s outfits including sherwanis, kurtas, pathanis, and elegant coat suits – all crafted to make every occasion memorable. With a perfect blend of style, comfort, and tradition, our collection is designed for the modern gentleman who values both heritage and elegance.
                </p>
                <p>
                  In just a few years, Savariya has become a trusted name for thousands of grooms and gentlemen who choose us for their big day and special celebrations. With only one exclusive store in Karol Bagh, we take pride in offering personalized service, high-quality fabrics, and outfits that truly reflect confidence and charm.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about.png" 
                alt="Savariya Craftsman at work" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl font-bold mb-2">Master Craftsmanship</h3>
                <p className="text-brown-100">Every stitch tells a story</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-brown-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brown-800 mb-4">Our Mission</h3>
              <p className="text-brown-600 leading-relaxed">
                To provide stylish, high-quality, and affordable gents wear that blends tradition with modern trends, ensuring every customer feels confident and well-dressed for weddings, festivals, and special occasions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-brown-800 mb-4">Our Vision</h3>
              <p className="text-brown-600 leading-relaxed">
                To be the most trusted gents wear shop in India, recognized for exceptional craftsmanship, customer satisfaction, and timeless designs – while continuing to serve proudly from our roots in Karol Bagh, Delhi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
              Our <span className="text-golden">Values</span>
            </h2>
            <p className="text-lg text-brown-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Savariya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-golden p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Quality</h3>
              <p className="text-brown-600">We never compromise on the quality of materials and customer needs.</p>
            </div>

            <div className="text-center group">
              <div className="bg-golden p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg> */}
                <span className='text-2xl text-brown-900'>₹</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Tradition</h3>
              <p className="text-brown-600">Honoring age-old craftsmanship techniques and cultural heritage</p>
            </div>

            <div className="text-center group">
              <div className="bg-golden p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Innovation</h3>
              <p className="text-brown-600">Continuously evolving our designs with contemporary trends</p>
            </div>

            <div className="text-center group">
              <div className="bg-golden p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Service</h3>
              <p className="text-brown-600">Providing personalized attention to every customer's needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-brown-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
              Meet Our <span className="text-golden">Team</span>
            </h2>
            <p className="text-lg text-brown-600">
              The skilled artisans and designers behind every Savariya creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-golden rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-brown-900">J</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Jaswant Singh</h3>
              <p className="text-golden font-semibold mb-2">Founder & Master Craftsman</p>
              <p className="text-brown-600 text-sm">
                With 20+ years of experience, Jaswant brings traditional designing expertise to every creation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-golden rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-brown-900">R</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Raju</h3>
              <p className="text-golden font-semibold mb-2">Head Designer</p>
              <p className="text-brown-600 text-sm">
                Fashion design graduate specializing in contemporary Indian menswear and embellishments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-24 h-24 bg-golden rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-brown-900">A</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Ajay Jha</h3>
              <p className="text-golden font-semibold mb-2">Style Consultant</p>
              <p className="text-brown-600 text-sm">
                Expert in color coordination and styling, ensuring perfect looks for every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-golden mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <p className="text-brown-800 font-semibold">Happy Grooms</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-golden mb-2 group-hover:scale-110 transition-transform duration-300">14+</div>
              <p className="text-brown-800 font-semibold">Years Experience</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-golden mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <p className="text-brown-800 font-semibold">Design Varieties</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-golden mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <p className="text-brown-800 font-semibold">Expert Craftsmen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;