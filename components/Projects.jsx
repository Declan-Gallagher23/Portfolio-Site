import { useEffect, useState } from "react"

export default function Projects() {
    const [repo, setRepo] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        fetch('https://api.github.com/users/Declan-Gallagher23/repos')
        .then(response => response.json())
        .then(data => setRepo(data))
    }, [])

    const repositoryData = repo.map((item) =>
         (
            <div class="project">
                <img class="project_image" src={item.name.includes("Game")?"/files/retro-gamepad.png":"/files/cozy.png"} alt=""></img>
                <h3 class="project_title">{item.name}</h3>
                {item.description && <p class="project_description">{item.description}</p>}
                {item.languages && <p class="project_language">{item.language}</p>}
                <a href={item.html_url} class="project_link">View Repository</a>
            </div> 
        ));


    return (
            <div className="collapsible">
      <button 
        className="collapsible-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▲ Hide Projects Section" : "▼ Show Projects Section"}
      </button>
      
      {isOpen && (
    <div class="projects_container" id="projects_container">
                         <Typewriter
                strings={
                  "Hello! I'm Declan Gallagher, a frontend developer based in Chester. I build modern, responsive web apps with HTML, CSS, JavaScript, and React. I have a strong passion for creating clean, user-friendly digital experiences that not only look great but also perform smoothly. I’m always eager to learn new technologies and improve my skills, with a particular interest in frontend frameworks, accessibility, and modern UI design. In my free time, I support Everton FC, play PlayStation games, and enjoy evening walks to unwind. I also like exploring new tech trends and experimenting with personal coding projects to keep my creativity flowing."
                }
                pauseFor={2000}
                deleteSpeed={10}
                loop={false}
                cursor="_"
              />
    </div>
      )}
    </div>

)
    }