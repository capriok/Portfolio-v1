import React from "react";
import "./index.css";
import "../src/components/components.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Intro from './components/intro';

export default function App() {
  return (
    <div className="App">
      <div className="Main">
        <Banner />
        <Navbar />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}