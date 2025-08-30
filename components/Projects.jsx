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
        {repositoryData}
    </div>
      )}
    </div>

)
    }