import { useState } from "react";
import Typewriter from "typewriter-effect"
import "/index.css"

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="collapsible">
      <button 
        className="collapsible-btn" 
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▲ Hide Profile Section" : "▼ Show Profile Section"}
      </button>
      {isOpen && (
    <div id="profile_container">
        <img id="profile_picture" src="./files/profile.jpg" alt="Profile picture of Declan Gallagher"></img>
        <div id="typewriter-text">
        <Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("Hello! My name is Declan Gallagher, and I’m a frontend developer based in Chester.")
      .pauseFor(2000) // pause for 1 second
      .typeString(" I have a passion for building beautiful, functional websites and applications.")
      .pauseFor(2000)
      .typeString(" With a growth mindset, I continually challenge myself to develop my skills and deliver better digital experiences.")
      .pauseFor(2000)
      .typeString("I build modern, responsive web applications using HTML, CSS, JavaScript, and React.")
      .pauseFor(2000)
      .typeString("I enjoy supporting Everton FC, playing playstation games and going for walks of an evening.")
      .start(); 
  }}
  options={{
    cursor: "_",
    delay: 50, // typing speed
  }}
/>
</div>


    </div>
      )}


    </div>
    ) }