const Hero = () => {
  return (
    <header
      id="hero"
      className="relative bg-black text-white py-24 px-6 text-center overflow-hidden"
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/lighthouse.png')" }}
      />
      
      {/* Содержимое поверх изображения */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4 drop-shadow">
          Открыта вакансия помощника смотрителя маяка
        </h1>
        <p className="text-lg md:text-xl mb-6 font-roboto">
          Здесь, на этом острове, вы станете собой!
        </p>
        <a
          href="#contact"
          className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
        >
          Получить уникальный опыт
        </a>
      </div>
    </header>
  );
};

export default Hero;
