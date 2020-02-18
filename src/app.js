import React, { useEffect, useState } from "react";
import { useStateValue } from './state'
import "./index.scss";
import "../src/components/components.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Intro from './components/intro';
import Tech from './components/tech';
import Projects from './components/projects';
import ProjectModal from './components/projectmodal';

import portrait from './img/portraitnull.png'

export default function App() {
  const [{ darkState },] = useStateValue()
  const [modalOpen, openModal] = useState(false)
  const [modalContent, setContent] = useState({
    title: 'MyTube Music',
    snippet: 'Youtube Data API consumed to create a client sided music streaming application wrapped in Electron',
    tags: ['Javascript', 'React', 'Electron', 'CSS', '2020'],
    thumb: portrait,
    link: 'https://github.com/capriok/MyTube'
  })

  useEffect(() => {
    console.log('create slight movement of divs for background anim');
    console.log('see in depth project button takes you to project route');
    console.log('need to design a project display  page for route');
  }, [])

  return (
    <>
      <div className={darkState ? "app app-dark" : "app"}>
        <div className={darkState ? "main main-dark" : "main"}>
          <Navbar />
          {modalOpen && <ProjectModal openModal={openModal} modalContent={modalContent} />}
          <Intro />
          <Tech />
          <Projects openModal={openModal} setContent={setContent} />
          <Footer />
        </div>
      </div>
    </>
  );
}
