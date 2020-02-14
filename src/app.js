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
  const [{ darkState },] = useStateValue()

  useEffect(() => {


    console.log('create slight movement of divs for background anim');
    console.log('create dark/ light mode toggle w context');
  }, [])

  return (
    <div className={darkState ? "app app-dark" : "app"}>
      <div className={darkState ? "main main-dark" : "main"}>
        {/* <Banner /> */}
        <Navbar />
        <Intro />
        <Tech />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}