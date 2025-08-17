import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <main className="bg-gray-950">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
