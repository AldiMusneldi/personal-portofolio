import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main className="bg-gray-950">
      <NavBar />
    </main>
  );
}

export default App;
