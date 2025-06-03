// src/components/WhyOurLighthouse.jsx
const features = [
  {
    title: 'Возможность следить за светом.',
    description: 'Кое-кто говорит, что он очаровывает...',
    icon: '💡',
  },
  {
    title: 'Надёжное, качественное жильё',
    description: 'Уютный каменный дом с видом на море. Укрытие от штормов и тумана.',
    icon: '🏠',
  },
  {
    title: 'Стабильная оплата',
    description: 'Мы ценим преданность делу и гарантируем непредвзятое вознаграждение.',
    icon: '💰',
  },
  {
    title: 'Своевременное прибытие кораблей',
    description: 'Корабли приходят точно по расписанию.',
    icon: '🚢',
  },
];

const WhyOurLighthouse = () => {
  return (
    <section className="bg-customGray-900 text-white py-20 px-6" id="why">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 tracking-wide">
          Почему именно наш маяк?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-customGray-800 p-6 rounded-xl transition-all duration-300 hover:bg-customGray-700 shadow-md hover:shadow-lg"
            >
              <div className="text-4xl mb-4 transition-transform group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-customGray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOurLighthouse;
