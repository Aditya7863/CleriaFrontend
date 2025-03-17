import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.png';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-4 bg-transparent fixed top-0 left-0 right-0 z-50">

      {/* Logo on the Left */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-14 mr-4" />
      </Link>

      {/* Navigation Buttons in the Center */}
      <div className="flex-grow text-center">
        <nav className="inline-block">
          <Link to="/">
            <button className="text-black mx-10 text-xl hover:text-blue-500 transition cursor-pointer">HOME</button>
          </Link>
          <Link to="/about">
            <button className="text-black mx-10 text-xl hover:text-blue-500 transition cursor-pointer">ABOUT</button>
          </Link>
        </nav>
      </div>


      {/* Social Media Icons on the Right */}
      <div className="flex space-x-6">
        <Facebook className="text-blue-600 cursor-pointer hover:text-blue-800 transition" />
        <Twitter className="text-blue-400 cursor-pointer hover:text-blue-600 transition" />
        <Instagram className="text-pink-500 cursor-pointer hover:text-pink-700 transition" />
      </div>
    </div>
  );
}

export default Header;
