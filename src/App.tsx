import { useEffect, useState } from 'react';
import './App.css';
import { SiCss3, SiHtml5, SiJava, SiJavascript, SiNodedotjs, SiReact, SiSpring } from "react-icons/si";

function App() {
  const [currentSkill, setCurrentSkill] = useState("programming")

  const scrollToId = (id: string): void => {
    document.getElementById(id)!.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="App" id='App'>
      <div className='card red welcome'>
        <div className='contact-card'>
          <img src="./headshot.jpg" alt="Headshot of Márton Barna" />
          <div className='column-flex'>
            <h2>Hi, I'm</h2>
            <h1>Márton BARNA,</h1>
            <h2 style={{ alignSelf: "flex-end" }}>a Full Stack developer student.</h2>
          </div>
        </div>
        <div className="jumpto">
          Learn more about
          my <span className="jump"
          onClick={_e => scrollToId("skillpage")}>skills</span>, <span className="jump"
          onClick={_e => scrollToId("platforms")}
          >references</span> or <span className="jump">hobbies</span> by
          clicking on them, or scrolling down.
        </div>
      </div>
      <div className='card skillpage' id='skillpage'>
        <div className="logos">
          <div onMouseEnter={() => setCurrentSkill("HTML 5")} style={{ color: "#e54c21" }}><SiHtml5 /></div>
          <div onMouseEnter={() => setCurrentSkill("CSS")} style={{ color: "#214ce5" }}><SiCss3 /></div>
          <div onMouseEnter={() => setCurrentSkill("JavaScript")} style={{ color: "#f7e018" }}><SiJavascript /></div>
          <div onMouseEnter={() => setCurrentSkill("Node.js")} style={{ color: "#7fc728" }}><SiNodedotjs /></div>
          <div onMouseEnter={() => setCurrentSkill("React.js")} style={{ color: "#5ed3f3" }}><SiReact /></div>
          <div onMouseEnter={() => setCurrentSkill("Java")} style={{ color: "#e51f24" }}><SiJava /></div>
          <div onMouseEnter={() => setCurrentSkill("Spring")} style={{ color: "#6aad3d" }}><SiSpring /></div>
        </div>
        <div style={{ display: "block" }}>He understands <span style={{ width: "10rem", display: "block" }}>{currentSkill}.</span></div>
      </div>
      <div className='card yellow' id='platforms'>
        <h1>Here will be other platforms where you can check me out.</h1>
      </div>
      <div className='card'>
        <h1>foo</h1>
      </div>
    </div>
  )
}

export default App
