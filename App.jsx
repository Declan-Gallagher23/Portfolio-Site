import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import {useState} from 'react'

export default function App() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <>
          <Header   setIsProfileOpen={setIsProfileOpen} 
  setIsProjectsOpen={setIsProjectsOpen} />
          <main>
            <Main />
            <Profile setIsOpen={setIsProfileOpen} isOpen={isProfileOpen} />
            <Projects setIsOpen={setIsProjectsOpen} isOpen={isProjectsOpen}/>
          </main>
          <Footer />
        </>
      )}