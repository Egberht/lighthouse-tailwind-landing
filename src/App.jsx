import Hero from "./components/Hero"; // Пример импорта других компонентов
import Description from "./components/Description";
import WhyOurLighthouse from "./components/WhyOurLighthouse";
import "./index.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Separator from "./components/Separator";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <div className="mt-16">
        <Navbar />
        <Hero />
        <Separator />
        <Description />
        <Separator />
        <WhyOurLighthouse />
        <Separator />
        <Testimonials />
        <Separator />
        <Contact />
        <Separator />
        <Footer />
      </div>
      {/* Здесь можно добавлять другие секции */}
    </div>
  );
};

export default App;
