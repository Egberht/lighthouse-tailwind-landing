// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-xl font-playfair tracking-wide">Маяк</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li><a href="#hero" className="hover:text-gray-300 transition">Главная</a></li>
          <li><a href="#description" className="hover:text-gray-300 transition">Работа</a></li>
          <li><a href="#why" className="hover:text-gray-300 transition">Почему мы</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300 transition">Истории</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition">Контакты</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
