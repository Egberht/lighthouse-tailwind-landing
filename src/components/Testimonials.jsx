// src/components/Testimonials.jsx
const testimonials = [
  {
    quote: "Иногда свет ведёт не к спасению, а к безумию...",
    author: "Аноним, 1873",
  },
  {
    quote: "Птицы не зря кричат по ночам. Они помнят.",
    author: "Бывший смотритель",
  },
  {
    quote: "Каждый вечер — как последний. Свет гаснуть не должен.",
    author: "Джеймс Т. Райт",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="scroll-mt-14 bg-customGray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-playfair mb-12">Истории Смотрителей</h2>
        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-4 border-white pl-6 italic text-lg text-gray-200">
              <p className="mb-2">“{t.quote}”</p>
              <p className="text-sm text-gray-400">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
