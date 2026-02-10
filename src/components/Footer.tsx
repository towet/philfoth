
import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              <span className="font-playfair font-bold text-xl">
                <span className="text-green-600 dark:text-green-400">Phil</span>
                <span className="text-yellow-600 dark:text-yellow-400">foth</span> CBO
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Empowering vulnerable communities in Bahati and Nakuru County through food security, education, economic empowerment, and care programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-scripture transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-scripture transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-scripture transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@sanctumgrace.com" className="text-gray-500 hover:text-scripture transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+254735410300" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +254735410300
                </a>
              </li>
              <li>
                <a href="mailto:info@philfothcbo.org" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@philfothcbo.org
                </a>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">
                  Bahati, Nakuru County, Kenya
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Stay updated with our latest programs and impact stories
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture"
              />
              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Philfoth CBO. All rights reserved. Reg. DSD/32/174/02/135378
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 px-1">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 px-1">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 px-1">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
