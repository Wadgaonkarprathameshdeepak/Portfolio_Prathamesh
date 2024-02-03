import React from 'react'
import "./CSS/Skills.css"
import html from "./images/html.png"
import js from "./images/js.png"
import java from "./images/java.png"
import css from "./images/css.png"
import mongo from "./images/mongodb.png"
import nodejs from "./images/nodejs.png"
import react from "./images/reactjs.png"

const Skills = () => {
  return (
    <>
       <div class="skills-container">
        <div className='heading'>
           <b>Skills</b>
        </div>
            <div class="bars-box">
                <img className='skill-css' src={html} alt="html"/>
                <h3>HTML</h3>
            </div>

            <div class="bars-box">
            <img className='skill-css' src={css} alt="html"/>
                <h3>CSS</h3>     
            </div>

            <div class="bars-box">
            <img className='skill-css' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' alt="html"/>
                <h3>Tailwind CSS</h3>   </div>


            <div class="bars-box">
                <img className='skill-css'  src={js} alt="js"/>
                <h3>JavaScript</h3>
            </div>
            <div class="bars-box">
                <img className='skill-css'  src={react} alt="react"/>
                <h3>React.js</h3>
            </div>
            <div class="bars-box">
                <img className='skill-css' src={nodejs} alt="node" />
                <h3>Node.js</h3>
            </div>

            <div class="bars-box">
                <img className='skill-css' src={mongo} alt="mongo"/>
                <h3>MongoDB</h3>  
            </div>

        <div class="bars-box">
                <img className='skill-css' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygBZ1TrcGKZlQgk7FW8XfqwMB5HGXJr8AidPMuglLe8z8Z1WHK_aSj0AfJTHDB9J2aw&usqp=CAU'alt="Mysql"/>
                <h3>MySQL</h3>  
            </div>

            <div class="bars-box">
                <img className='skill-css' src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' alt="node" />
                <h3>Python</h3>
            </div>

           
                
         
            <div class="bars-box">
                <img className='skill-css' src={java} alt="java"/>
                <h3>Java</h3>  
            </div>
            <div className='heading'>
            Tools
        </div>

        <div class="bars-box">
                <img className='skill-css' src='https://cdn-icons-png.flaticon.com/512/5968/5968705.png' alt="Figma"/>
                <h3>Figma</h3>  
            </div>

            <div class="bars-box">
                <img className='skill-css' src='https://www.freelogovectors.net/wp-content/uploads/2021/12/canva-logo-app-freelogovectors.net_.png' alt="Canva"/>
                <h3>Canva</h3>  
            </div>


            <div class="bars-box">
                <img className='skill-css' src='https://cdn-icons-png.flaticon.com/512/733/733609.png' alt="GitHub"/>
                <h3>GitHub</h3>  
            </div>
    </div>
    </>
  )
}

export default Skills