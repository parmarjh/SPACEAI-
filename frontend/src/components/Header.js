import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-black flex items-center">
            <span className="mr-1">🚀</span>
            space.AI
          </div>
          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
            BETA
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Built with space.AI
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Compare
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Templates
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Sign in
          </a>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            Get started
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;