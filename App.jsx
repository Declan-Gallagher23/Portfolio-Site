import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Profile from "./components/Profile"

export default function App() {
    return (
        <>
        <Header />
        <main>
            <Main/>
            <Profile/>
            <Projects/>
        </main>
        <Footer/>
        </>
    )
} 