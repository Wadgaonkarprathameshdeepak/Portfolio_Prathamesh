import React from 'react'
import "./Role.css";

const Role = () => {
  const resumeLink = 'https://drive.google.com/file/d/1gpKvcZHTSkVuzXG63WaSyzDaRSfONSbK/view?usp=sharing'; // Replace with your actual Google Drive link

  const handleResumeClick = () => {
    window.location.href = resumeLink;}
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Dancing+Script:wght@400;700&family=Josefin+Sans:wght@100;300&family=Merienda:wght@300..900&family=Protest+Strike&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      <div className='role' style={{ fontFamily: 'DM Serif Display, Dancing Script, Josefin Sans, Merienda, Protest Strike, Ubuntu', display: 'swap' }}>
    
    <div className='about'><b>About me</b></div>
    <article>
    <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
          I'm Prathamesh, currently I am pursuing my Undergraduate
          Degree from Deogiri Institute Of Engineering And Management Studies
 in the Computer Science and Engineering Course. I'm currently working in the field of Web
          Development.
        </p>
    </article>
    <br />
    <article>  <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
          I am Innovative, task-driven, and enthusiastic with knowledge of
          Web-Development, UI and UX designing and a good sense of a clean and
          user friendly interface.
        </p>
</article>
<br />
<article> <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
          Skilled at writing well-designed, testable and efficient code using
          current best practices.
        </p>
</article><br/>
<article>
<p className="text-white text-lg md:text-xl w-[30rem] md:w-[60rem]">
          In my spare time I like  Listen to music, and play
          Badminton. I’m always down for hearing about new projects, so please
          feel free to drop me a line.
        </p></article>
<br/>

<br /><br /><br />
<button onClick={handleResumeClick} className="resume-button">
          Downlaod Resume
        </button>
    </div>

    </>
  )
}

export default Role