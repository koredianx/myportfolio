import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <nav className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:space-x-4 absolute md:relative top-16 md:top-0 left-0 right-0 bg-gray-800 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-0">
            <li><a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;