import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useStateValue } from './state'
import { Button, makeStyles } from '@material-ui/core'
import { darkTheme as dark } from './theme'
import About from './components/routes/about'
import Blogs from './components/routes/blogs'
import ProjectDisplay from './components/templates/projectdisplay'
import Navbar from "./components/navbar"
import Intro from './components/intro'
import Tech from './components/tech'
import Projects from './components/routes/projects'
import ProjectCards from './components/templates/projectcards'
import BlogDisplay from './components/templates/blogdisplay'
import Footer from "./components/footer"
import Resume from "./components/routes/resume"
import InquiryTransition from './components/inquiry/inquiry-transition'
import Inquiry from './components/inquiry/inquiry'
import Clickout from './components/inquiry/clickout'
import "../src/components/components.scss"
import "./index.scss"

export default function App() {
  const [{ darkState, theTheme, projects, blogs }, dispatch] = useStateValue()
  const trueDarkState = localStorage.getItem('theme') === 'true'

  const [modalOpen, openModal] = useState(false)
  const [modalContent, setContent] = useState(projects[0])
  const [inquiryState, setInquiryState] = useState({
    open: false,
    submitLoading: false,
    submitSent: false,
    statusTitleMessage: '',
    statusSubMessage: ''
  })
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    body: '',
    referral: ''
  })

  const handleInquiryOpen = () => {
    setInquiryState({
      ...inquiryState,
      open: true,
    })
  }

  const handleInquiryClose = () => {
    setInquiryState({
      ...inquiryState,
      open: false,
    })
    setTimeout(() => {
      setInquiryState(() => ({
        open: false,
        submitLoading: false,
        submitSent: false,
        statusTitleMessage: '',
        statusSubMessage: ''
      }))
      setInquiryForm({
        name: '',
        email: '',
        body: ''
      })
    }, 500);
  }

  const useStyles = makeStyles({
    btn: {
      color: "white",
      padding: "2px 20px 1px 20px",
      margin: "15px 0px 20px 0px",
      border: '2px solid grey',
      backgroundColor: "rgb(25, 25, 25)",
      "&:hover": {
        backgroundColor: "rgb(35, 35, 35)"
      }
    }
  });
  const classes = useStyles();

  useEffect(() => {
    trueDarkState
      ? dispatch({ type: 'theme', theTheme: dark })
      : dispatch({ type: 'theme', theTheme: {} })
  }, [dispatch, trueDarkState, darkState])


  return (
    <>
      <div className="main scrollbar" style={theTheme.main}>
        <Router>
          {/* ------------------------- NAVBAR */}
          <Navbar
            openModal={openModal}
            handleInquiryOpen={handleInquiryOpen}
            handleInquiryClose={handleInquiryClose}
          />
          {/* ------------------------- INQUIRY MODAL */}
          <InquiryTransition inquiryState={inquiryState}>
            <Inquiry
              handleInquiryClose={handleInquiryClose}
              inquiryState={inquiryState}
              setInquiryState={setInquiryState}
              inquiryForm={inquiryForm}
              setInquiryForm={setInquiryForm}
            />
          </InquiryTransition>
          <Clickout
            state={inquiryState}
            close={handleInquiryClose}
          />
          {/* ------------------------- PROJECT MODAL */}
          {modalOpen &&
            <>
              <div className="modal-clickout" onClick={() => openModal(false)} />
              <div className="master-modal" style={theTheme.main}>
                <div className="project-modal scrollbar">
                  <ProjectDisplay item={modalContent} modalOpen={modalOpen} />
                </div>
              </div>
            </>
          }
          {/* ------------------------- SLASH ROUTE */}
          <Route exact path="/" render={() => (
            <>
              <Intro inquiryState={inquiryState} setInquiryState={setInquiryState} />
              <Tech />
              <div id='projects-section' className="projects-section">
                <ProjectCards openModal={openModal} setContent={setContent} />
              </div>
              <Button className={classes.btn} onClick={() => { window.scrollTo(0, 0) }}>
                <h1 className="get-in-touch-foot">Get in touch</h1>
              </Button>
            </>
          )} />
          {/* ------------------------- ABOUT ROUTE */}
          <Route path="/about" render={() => (
            <About />
          )} />
          {/* ------------------------- RESUME ROUTE */}
          <Route path="/resume" render={() => (
            <Resume />
          )} />
          {/* ------------------------- PROJECTS LIST ROUTE */}
          <Route path="/projects" render={() => (
            <Projects openModal={modalOpen} setContent={setContent} />
          )} />
          {/* ------------------------- BLOGS LIST ROUTE */}
          <Route exact path="/blogs" render={() => (
            <Blogs />
          )} />
          {/* ------------------------- LONE PROJECT ROUTE */}
          {projects.map((item, i) => (
            <Route path={item.route} key={i} render={() => (
              <ProjectDisplay item={item} />
            )} />
          ))}
          {/* ------------------------- LONE BLOG ROUTES */}
          {blogs.map((blog, i) => (
            <Route path={blog.route} render={() => (
              <BlogDisplay key={i} blog={blog} />
            )} />
          ))}
          <Footer />
        </Router>
      </div>
    </>
  );
}
