import React from 'react';
import { Search, Facebook, Linkedin, Instagram } from 'lucide-react';

const EnhancedHeader = () => {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="swat.svg" alt="SWAT Logo" className="w-16 h-16" />
            <div>
              <h1 className="text-2xl font-bold">Social Welfare & Trust</h1>
              <p className="text-sm text-gray-600">Empowering communities through compassion and action</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Donate Now</button>
            <div className="relative">
              <input type="text" placeholder="Search..." className="pl-8 pr-2 py-1 border rounded" />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="flex space-x-2">
              <Facebook size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Linkedin size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Instagram size={20} className="text-gray-600 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-indigo-900 mt-4">
        <ul className="flex justify-center space-x-6 py-3">
          {['HOME', 'ABOUT', 'DRIVES', 'PROJECTS', 'CONTACT'].map((item) => (
            <li key={item} className="text-white hover:text-gray-300 cursor-pointer">{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default EnhancedHeader;
