import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import the icons from react-icons

const Name = () => {
  const [info, setInfo] = useState('Front End Developer');

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setInfo('Designer');
    }, 2000);

    const timeout2 = setTimeout(() => {
      setInfo('Freelancer   ');
    }, 4000);

    const timeout3 = setTimeout(() => {
      setInfo('Programmer');
    }, 6000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Dancing+Script:wght@400;700&family=Josefin+Sans:wght@100;300&family=Merienda:wght@300..900&family=Protest+Strike&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className='name' style={{ fontFamily: 'DM Serif Display, Dancing Script, Josefin Sans, Merienda, Protest Strike, Ubuntu', display: 'swap' }}>
        Hi, I am <br />Prathamesh Wadgaonkar👋
        <span style={{ color: '#0eeff7' }}>{info} </span>
        
        {/* Add LinkedIn and GitHub icons */}
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://www.linkedin.com/in/prathamesh-wadgaonkar-8b3189238/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ margin: '0.3rem', color: '#0077B5' }} />
          </a>
          <a href="https://github.com/Wadgaonkarprathameshdeepak" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{ margin: '0.3rem', color: '#211F1F' }} />
          </a>
          <a href="https://twitter.com/Prathamesh697" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} style={{ margin: '0.3rem', color: ' #0e61df' }} />
          </a>
          <a href="mailto:wadgaonkarprathameshemail@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} style={{ margin: '0.3rem', color: '#ee4848' }} />
          </a>
          <a href="https://www.instagram.com/prathamesh_wadgaonkar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} style={{ margin: '0.3rem', color: ' #fa1100' }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Name;
