import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: ''
      })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-green-800">Thank you for your inquiry!</h3>
            <p className="mt-1 text-sm text-green-700">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-bold text-brown-800 mb-2">
          Get In Touch
        </h2>
        <p className="text-brown-600">
          Ready to create your perfect look? Contact us for a consultation.
        </p>
          <p className="text-sm text-red-600">
          *For quicker response, please reach us via Call or WhatsApp, as the form may not be working at the moment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brown-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:border-golden focus:outline-none transition-colors duration-300 bg-brown-50 focus:bg-white"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brown-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:border-golden focus:outline-none transition-colors duration-300 bg-brown-50 focus:bg-white"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-brown-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:border-golden focus:outline-none transition-colors duration-300 bg-brown-50 focus:bg-white"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-semibold text-brown-700 mb-2">
            Event Date (Optional)
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:border-golden focus:outline-none transition-colors duration-300 bg-brown-50 focus:bg-white"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-brown-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 rounded-lg border-2 border-brown-200 focus:border-golden focus:outline-none transition-colors duration-300 resize-none bg-brown-50 focus:bg-white"
            placeholder="Tell us about your requirements, preferred style, budget, or any questions you have..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-brown-800 to-brown-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-golden hover:to-yellow-500 hover:text-brown-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-6 border-t border-brown-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-golden p-3 rounded-full mb-2">
              <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-brown-800 font-semibold">Call Us</p>
            <p className="text-brown-600 text-sm">+91 8700293206</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-golden p-3 rounded-full mb-2">
              <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-brown-800 font-semibold">Email</p>
            <p className="text-brown-600 text-sm">savariyagroomselection@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-golden p-3 rounded-full mb-2">
              <svg className="w-5 h-5 text-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-brown-800 font-semibold">Visit Us</p>
            <p className="text-brown-600 text-sm">5/38, Ajmal Khan Rd, Block 5, WEA, Karol Bagh, New Delhi, Delhi, 110005</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;