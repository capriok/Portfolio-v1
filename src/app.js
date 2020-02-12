import React from "react";
import "./index.scss";
import "../src/components/components.scss";
// import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Intro from './components/intro';
import Tech from './components/tech';
import Projects from './components/projects';

export default function App() {
  return (
    <div className="App">
      <div className="Main">
        {/* <Banner /> */}
        <Navbar />
        <Intro />
        <div className="border"></div>
        <Tech />
        <div className="border"></div>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}