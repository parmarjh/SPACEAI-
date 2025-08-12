import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span>© 2025 DriWise</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Help</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-900 transition-colors" aria-label="YouTube">
              📺
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;