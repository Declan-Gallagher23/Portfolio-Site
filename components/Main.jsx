import Typewriter from "typewriter-effect"

export default function Main() {
    return (
        <div id="main-text">
            <Typewriter 
                options={{
                    strings: ["Hello! welcome to my portolio website", "My name is Declan Gallagher", ". I'm a frontend developer based in Chester."],
                pauseFor: 2000,
                deleteSpeed: 10,
                loop: true,
                cursor: "_",
                autoStart:true
                }}
                />
        </div>
    )
}