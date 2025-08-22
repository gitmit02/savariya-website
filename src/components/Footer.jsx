import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faTshirt, faRuler, faClock, faHeart, faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import {  
  faHome, 
  faInfoCircle, 
  faTshirt, 
  faPhone, 
  faMapMarkerAlt, 
  faEnvelope,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebookF, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="gradient-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                className="h-12 w-12 rounded-full border-2 border-golden" 
                src="/logo.png" 
                alt="Savariya Logo" 
              />
              <span className="font-heading text-2xl font-bold text-golden">
                Savariya
              </span>
            </div>
            <p className="text-brown-100 leading-relaxed max-w-md">
              Premium groom wear crafted with tradition and elegance. 
              We specialize in creating unforgettable looks for your special day 
              with our exquisite collection of sherwanis, kurtas, and Coats suits.
            </p>
            <div className="mt-4">
              <p className="text-golden font-semibold"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 5/38, Ajmal Khan Rd, Block 5, WEA, Karol Bagh, Delhi-110005, India</p>
              <p className="text-brown-100"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 8700293206 , +91 9968189206</p>
              <p className="text-brown-100"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> savariyagroomselection@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-golden mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-brown-100 hover:text-golden transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" />  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-brown-100 hover:text-golden transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/collection" 
                  className="text-brown-100 hover:text-golden transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faTshirt} className="mr-2" />  Collection
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-brown-100 hover:text-golden transition-colors duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-golden mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/savariya3068/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brown-600 p-3 rounded-full hover:bg-golden transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/savariya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brown-600 p-3 rounded-full hover:bg-golden transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/savariya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brown-600 p-3 rounded-full hover:bg-golden transition-all duration-300 transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-600 mt-8 pt-8 text-center">
          <p className="text-brown-100">
            © 2024 Savariya. All rights reserved. | Crafted with ❤️ for premium groom wear
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer