import React from 'react'
import "./CSS/Main.css"
import Name from "./Main_Page_content/Name"
import Role from "./Main_Page_content/Role"


const Main = () => {
  return (
    <>
    <div className='Main'>
      <div className='first'>
      <Name/>
      </div>
      <div className='second'>
      <Role/>
      </div>
    </div>

    </>
  )
}

export default Main