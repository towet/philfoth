
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-scripture" />
              <span className="font-playfair font-bold text-xl">
                <span className="text-scripture">Sanctum</span>
                <span className="text-gold-dark">Grace</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Providing spiritual guidance and biblical debriefing for those seeking a deeper understanding of scripture.
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
                <Link to="/topics" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Explore Topics
                </Link>
              </li>
              <li>
                <Link to="/sessions" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Join Sessions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/prayer" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Prayer Requests
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Stay updated with our latest sessions and resources
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture"
              />
              <button 
                type="submit"
                className="w-full bg-scripture hover:bg-scripture-dark text-white py-2 px-4 rounded-md transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SanctumGrace. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors py-2 px-1">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors py-2 px-1">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-scripture dark:hover:text-scripture-light transition-colors py-2 px-1">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
