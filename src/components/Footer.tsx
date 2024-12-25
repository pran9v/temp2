import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHomeAndScrollToTop = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateAndScroll = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Logo and Name */}
          <div>
            <button
              onClick={navigateToHomeAndScrollToTop}
              className="flex items-center gap-4 text-left"
            >
              <img
                src={logo}
                alt="Kiddo Jacket Logo"
                className="h-24 w-24 object-contain"
              />
              <span className="text-2xl font-bold">LampShade</span>
            </button>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigateAndScroll('products')}
                  className="text-gray-400 hover:text-yellow-500"
                >
                  Our Products
                </button>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-yellow-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-yellow-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-gray-400">
          <p>Contact us at: <a href="mailto:email@emgila.com" className="text-white hover:underline">support@lampshade.site</a></p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LampShade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
