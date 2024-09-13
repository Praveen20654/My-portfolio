import "./App.css"
import React from 'react'
import{BrowserRouter} from "react-router-dom"
import Navbar from './component/Navbar.jsx'
import Home from "./component/Home.jsx"
import About from "./component/About.jsx"
import Skills from "./component/skill.jsx"
import Project from "./component/Project.jsx"
import Contact from "./component/Contact.jsx"

const App = () => {
  return (
    <>
    <BrowserRouter>
  
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
   
    </BrowserRouter>
     </>
  )
}

export default App
