import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brown-800 to-brown-600 text-white py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero.jpg)'}}>
      {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-golden">Us</span>
          </h1>
          <p className="text-xl text-brown-100 max-w-3xl mx-auto leading-relaxed">
            Ready to create your perfect look? Get in touch with our expert team for personalized consultation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Store Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-heading text-2xl font-bold text-brown-800 mb-6">
                  Visit Our Store
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-golden p-3 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-800 mb-1">Address</h3>
                      <p className="text-brown-600">
                        5/38, Ajmal Khan Rd, Block 5, WEA, Karol Bagh, New Delhi, Delhi, 110005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-golden p-3 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-800 mb-1">Phone</h3>
                      <p className="text-brown-600">
                        <a href="tel:+919876543210" className="hover:text-golden transition-colors">
                          +91 8700293206
                        </a><br />
                        <a href="tel:+912234567890" className="hover:text-golden transition-colors">
                          +91 9968189206
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-golden p-3 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-800 mb-1">Email</h3>
                      <p className="text-brown-600">
                        <a href="mailto:savariyagroomselection@gmail.com" className="hover:text-golden transition-colors">
                          savariyagroomselection@gmail.com
                        </a><br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-golden p-3 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown-800 mb-1">Shop Hours</h3>
                      <p className="text-brown-600">
                        Tuesday - Sunday: 10:00 AM - 8:00 PM<br />
                        Monday: 11:00 AM - 6:00 PM<br />
                        <span className="text-golden text-sm">*Call/WhatsApp bookings preferred</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Google Maps */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.407784670115!2d77.189983!3d28.647506300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030bbe6f962d%3A0x5aca839e769784bb!2sSAVARIYA%20GROOM%20SELECTION!5e0!3m2!1sen!2sin!4v1755626449855!5m2!1sen!2sin"
                  width="100%"
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Savariya Store Location"
                ></iframe>
                <div className="p-4 bg-brown-50">
                  <p className="text-brown-600 text-sm text-center">
                    📍 Located in the heart of Delhi's Fashion District, KarolBagh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="bg-brown-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brown-800 mb-4">
              Connect With <span className="text-golden">Us</span>
            </h2>
            <p className="text-brown-600">
              Follow us on social media for the latest designs and styling tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Instagram</h3>
              <p className="text-brown-600 mb-4">@savariya_groomwear</p>
              <a 
                href="https://www.instagram.com/savariya3068/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brown-800 text-white px-6 py-2 rounded-full hover:bg-golden hover:text-brown-900 transition-colors duration-300"
              >
                Follow Us
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">WhatsApp</h3>
              <p className="text-brown-600 mb-4">Quick consultation</p>
              <a 
                href="https://wa.me/918700293206" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brown-800 text-white px-6 py-2 rounded-full hover:bg-golden hover:text-brown-900 transition-colors duration-300"
              >
                Chat Now
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-golden p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-brown-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-brown-800 mb-2">Facebook</h3>
              <p className="text-brown-600 mb-4">Savariya Groom Wear</p>
              <a 
                href="https://facebook.com/savariya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brown-800 text-white px-6 py-2 rounded-full hover:bg-golden hover:text-brown-900 transition-colors duration-300"
              >
                Like Page
              </a>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
  <h3 className="font-heading text-2xl font-bold text-brown-800 mb-6 text-center">
    Frequently Asked Questions
  </h3> 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <h4 className="font-semibold text-brown-800 mb-2">Where is your shop located?</h4>
      <p className="text-brown-600 text-sm">
        Our only shop is located in Karol Bagh, Delhi. We don’t have any branches elsewhere.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-brown-800 mb-2">Do you keep ready-made outfits or only stitched ones?</h4>
      <p className="text-brown-600 text-sm">
        We offer both ready-made gents wear and customized stitched outfits as per your preference.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-brown-800 mb-2">How early should I shop for my wedding outfit?</h4>
      <p className="text-brown-600 text-sm">
        We suggest visiting at least 3–4 weeks before your event for the best selection and timely alterations.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-brown-800 mb-2">Do you provide alterations?</h4>
      <p className="text-brown-600 text-sm">
        Yes, we provide free basic alterations on all outfits purchased from our shop to ensure a perfect fit.
      </p>
    </div>

  </div>
</div>

        </div>
      </section>
    </div>
  )
}

export default Contact;
