const Description = () => {
  return (
    <section
      id="description"
      className="scroll-mt-14 bg-customGray-900 text-customGray-100 py-20 px-6"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">
          Что это за работа?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-customGray-800 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              Одиночество и изоляция
            </h3>
            <p>Ты далеко от цивилизации. Только маяк, море и ты.</p>
          </div>
          <div className="bg-customGray-800 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold mb-2">Бдительность</h3>
            <p>Следи за огнём. От него зависит жизнь моряков.</p>
          </div>
          <div className="bg-customGray-800 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold mb-2">Ночные смены</h3>
            <p>Тьма и ветер — твои постоянные спутники.</p>
          </div>
          <div className="bg-customGray-800 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold mb-2">Ответственность</h3>
            <p>Ты — последний, кто может что-то изменить.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
