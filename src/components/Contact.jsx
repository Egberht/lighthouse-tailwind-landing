// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="bg-customGray-950 text-customGray-100 py-20 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-playfair mb-6">Свяжись с нами</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Имя"
            className="w-full px-4 py-3 rounded-xl bg-customGray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-customGray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Сообщение"
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-customGray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;