import { useEffect, useState } from "react"

export default function Projects({isOpen, setIsOpen}) {
    const [repo, setRepo] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Declan-Gallagher23/repos')
        .then(response => response.json())
        .then(data => setRepo(data))
    }, [])

    const repositoryData = repo.map((item) =>
         (
            <div key={item.name} class="project">
                <img className="project_image" src={item.name.includes("Game")?"/retro-gamepad.png":"/cozy.png"} alt=""></img>
                <h3 className="project_title">{item.name}</h3>
                {item.description && <p className="project_description">{item.description}</p>}
                {item.languages && <p className="project_language">{item.language}</p>}
                <a href={item.html_url} className="project_link">View Repository</a>
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
      <>
        <div id="key_container">
          <h3>Key</h3>
          <div className="keys">
          <div className="key">
            <img src="/cozy.png" className="key_image" alt="Game Icon"></img>
            <span> - Knowledge Growth</span>
          </div>
          <div className="key">
            <img src="/retro-gamepad.png" className="key_image" alt="Game Icon"></img>
            <span> - Games</span>
          </div>
          </div>
        </div>
        <div className="projects_container" id="projects_container">
          {repositoryData}
        </div>
      </>
    )}
  </div>
)}