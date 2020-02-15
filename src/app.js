import React, { useEffect } from "react";
import { useStateValue } from './state'
import "./index.scss";
import "../src/components/components.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Intro from './components/intro';
import Tech from './components/tech';
import Projects from './components/projects';

export default function App() {
  const [{ darkState }, dispatch] = useStateValue()

  useEffect(() => {
    console.log('create slight movement of divs for background anim');
    console.log('see in depth project button takes you to project route');
    console.log('need to design a project display  page for route');
  }, [])

  return (
    <div className={darkState ? "app app-dark" : "app"}>
      <div className={darkState ? "main main-dark" : "main"}>
        <Navbar />
        <Intro />
        <Tech />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}