import React from 'react'
import "./App.css"

import logo from './images/logo.jpeg'



function Nav() {

 

  return (
    <div className="navbar">
    <a className='option' href="#main">Home</a>
    <a className='option' href="#projects">Projects</a>
    <a className='option' href="#achievements">Achievements</a>
    <a className='option' href="#skills">Skills</a>
    <a className='option' href="#contact">Contact</a>
  
    <div className='socials'>
     <a href="https://linktr.ee/PrathameshWadgaonkar"> <img src={logo} alt="leetcode"/></a>  
    </div>
  </div>
  )
}

export default Nav