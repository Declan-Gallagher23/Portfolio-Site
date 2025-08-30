import Typewriter from "./Typewriter"

export default function Main() {
    return (
        <div id="main-text">
                 <Typewriter
        strings={[
          "Hello! welcome to my portfolio website",
          "My name is Declan Gallagher",
          "I'm a frontend developer based in Chester."
        ]}
        pauseFor={2000}
        deleteSpeed={10}
        loop={true}
        cursor="_"
      />
    </div>
  );}
     
    
