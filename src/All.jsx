import React from 'react'
import Achievements from './Achievements'
import Contact from './Contact'
import Projects from './Projects'
import Main from './Main'
import Footer from "./Footer"
import "./App.css"
import Nav from './Nav'
import Skills from './Skills'

const All = () => {
  return (
    <>
   <Nav/>
    <div id='main'>
    <Main/>
    </div>
    <div id='achievements'>
    <Achievements/>
    </div>
    <div id='projects'>
    <Projects/>
    </div>
    <div id='skills'>
    <Skills/>
    </div>
    <div id='contact'>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default All