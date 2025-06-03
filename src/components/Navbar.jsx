import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl font-playfair tracking-wide">Маяк</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
          <li><a href="#hero" className="hover:text-gray-300 transition">Главная</a></li>
          <li><a href="#description" className="hover:text-gray-300 transition">Работа</a></li>
          <li><a href="#why" className="hover:text-gray-300 transition">Почему мы</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300 transition">Истории</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition">Контакты</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out bg-black/80 backdrop-blur-md px-6 ${
          isOpen ? 'max-h-96 opacity-100 scale-y-100 py-4' : 'max-h-0 opacity-0 scale-y-95 py-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-sm">
          <li><a href="#hero" onClick={toggleMenu} className="hover:text-gray-300 transition">Главная</a></li>
          <li><a href="#description" onClick={toggleMenu} className="hover:text-gray-300 transition">Работа</a></li>
          <li><a href="#why" onClick={toggleMenu} className="hover:text-gray-300 transition">Почему мы</a></li>
          <li><a href="#testimonials" onClick={toggleMenu} className="hover:text-gray-300 transition">Истории</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-gray-300 transition">Контакты</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
