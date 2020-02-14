import React from "react";
import "./index.scss";
import "../src/components/components.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Intro from './components/intro';
import Tech from './components/tech';
import Projects from './components/projects';

export default function App() {

  console.log('create slight movement of divs for background anim');
  console.log('create dark/ light mode toggle w context');

  return (
    <div className="App">
      <div className="Main">
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