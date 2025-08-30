export default function Header() {
    const cvFileName = "Declan-Gallagher-CV.docx"
    return (
        <header>
            <ul>

                <li><a href="#profile_container">Profile</a></li>
                <li><a href="#projects_container">Projects</a></li>
                <li><a href="mailto:declangallagher@gallaghertech.co.uk?subject=Portfolio%20Enquiry">Email</a></li>
                <li><a href="/files/Declan-Gallagher-CV.docx" download={cvFileName}>CV</a></li>
                <li><a href="" aria-label="Dark and light mode toggle"><img src=""></img></a></li>
            </ul>
            </header>
    )
}