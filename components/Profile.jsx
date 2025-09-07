import { useState, useEffect } from "react";
import "/index.css";

const TypewriterText = () => {
  const fullText = "Hello! I'm Declan Gallagher, a front-end developer based in Chester. I build modern, responsive web apps with HTML, CSS, JavaScript, and React, and I’m passionate about creating clean, user-friendly digital experiences. In my free time, I support Everton FC, play PlayStation games, and enjoy evening walks to unwind. I also like exploring new tech trends and working on personal projects to keep developing my skills.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1)); // safer than prev + char
        index++;
      } else {
        clearInterval(interval); // stop when finished
      }
    }, 40); // typing speed
    return () => clearInterval(interval);
  }, []);

  return <p>{displayedText}<span className="cursor">_</span></p>;
};


export default function Profile({isOpen, setIsOpen}) {

  return (
    <div className="collapsible">
      <button 
        className="collapsible-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▲ Hide Profile Section" : "▼ Show Profile Section"}
      </button>

      <div id="profile_container" className={isOpen? "": "hidden"}>
      {isOpen && (
          <>
          <img 
            id="profile_picture" 
            src="/profile.jpg" 
            alt="Profile picture of Declan Gallagher"
          />
          <div id="typewriter-text">
            <TypewriterText />
          </div>
        </>
      )}
    </div>
  </div>
  )}
