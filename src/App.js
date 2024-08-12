import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
