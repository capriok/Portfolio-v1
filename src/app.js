import React from "react";
import "./index.scss";
import "../src/components/components.scss";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Intro from './components/intro';
import TechSection from './components/tech';
import ProjectsSection from './components/projects';

export default function App() {
  return (
    <div className="App">
      <div className="Main">
        {/* <Banner /> */}
        {/* <Navbar /> */}
        <Intro />
        <div className="border"></div>
        <TechSection />
        <div className="border"></div>
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}