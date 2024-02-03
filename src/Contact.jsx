import React, { useRef, useState } from "react";
import "./CSS/Contact.css";
import emailjs from '@emailjs/browser';
import conn from "./images/conn.avif"
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p0mvsa9', 'template_eqba2i4', form.current, 'DkrGWmkS1aX137gD3')
      .then((result) => {
        console.log(result.text);
        setMessage("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        setMessage(`Error: ${error.text}`);
      });
  };

  return (
    <div className="Contact-main">
      <div className="contact-container">
        <div className="contact-image">
          <img src={conn} alt="Contact" />
        </div>
        <div className="contact-form-container">
          {message && <h2 className={`message ${message.includes("Error") ? "error" : "success"}`}>{message}</h2>}
          <h2><b>Get In Touch</b></h2>
          <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
        
    
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
        
        
           
        
        
            <label for="message">Message</label>
            <input type="message" id="message" name="message"  required/>
        </div>
        <button className="bttnn" type="submit">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
