import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
