import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const openContactForm = () => {
    navigate('/contact-us');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-br from-yellow-100 to-bg-[#FEFCE8] backdrop-blur-2xl opacity-96 z-50">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 h-24 sm:h-28 lg:h-32">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src={logo}
              alt="IconicMe Logo"
              className="h-32 sm:h-40 lg:h-56 w-auto object-contain "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button
              onClick={() => handleScrollToSection('products')}
              className="text-gray-700 hover:text-yellow-700 transition-colors text-base lg:text-xl px-2 py-1"
            >
              Products
            </button>
            <Link 
              to="/privacy-policy" 
              className="text-gray-700 hover:text-yellow-700 transition-colors text-base lg:text-xl px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className="text-gray-700 hover:text-yellow-700 transition-colors text-base lg:text-xl px-2 py-1"
            >
              Terms
            </Link>
            <button 
              onClick={openContactForm}
              className="text-gray-700 hover:text-yellow-700 transition-colors text-base lg:text-xl px-2 py-1"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-10 p-2 text-gray-700 hover:text-yellow-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-yellow-100 to-bg-[#FEFCE8] border-t border-yellow-200 py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleScrollToSection('products')}
                className="text-gray-700 hover:text-yellow-700 transition-colors text-left py-2 text-lg"
              >
                Products
              </button>
              <Link
                to="/privacy-policy"
                className="text-gray-700 hover:text-yellow-700 transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-700 hover:text-yellow-700 transition-colors py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <button
                onClick={openContactForm}
                className="text-gray-700 hover:text-yellow-700 transition-colors text-left py-2 text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;