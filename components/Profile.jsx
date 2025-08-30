import { useState, useEffect } from "react";
import "/index.css";

const TypewriterText = () => {
  const fullText = "Hello! I'm Declan Gallagher, a frontend developer based in Chester. I build modern, responsive web apps with HTML, CSS, JS, and React. In my free time, I support Everton FC, play PlayStation, and enjoy evening walks.";
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
    }, 50); // typing speed
    return () => clearInterval(interval);
  }, []);

  return <p>{displayedText}<span className="cursor">_</span></p>;
};


export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <button 
        className="collapsible-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▲ Hide Profile Section" : "▼ Show Profile Section"}
      </button>

      {isOpen && (
        <div id="profile_container">
          <img 
            id="profile_picture" 
            src="./files/profile.jpg" 
            alt="Profile picture of Declan Gallagher"
          />
          <div id="typewriter-text">
            <TypewriterText />
          </div>
        </div>
      )}
    </div>
  );
}
