import { useEffect, useState } from 'react';
import './App.css';
import { SiCss3, SiHtml5, SiJava, SiJavascript, SiNodedotjs, SiReact, SiSpring } from "react-icons/si";

function App() {
  const [currentSkill, setCurrentSkill] = useState("programming")

  return (
    <div className="App" id='App'>
      <div className='card red'>
        <h1>foo</h1>
      </div>
      <div className='card skillpage'>
        <div className="logos">
          <div onMouseEnter={() => setCurrentSkill("HTML 5")} style={{color: "#e54c21"}}><SiHtml5 /></div>
          <div onMouseEnter={() => setCurrentSkill("CSS")}style={{color: "#214ce5"}}><SiCss3 /></div>
          <div onMouseEnter={() => setCurrentSkill("JavaScript")}style={{color: "#f7e018"}}><SiJavascript /></div>
          <div onMouseEnter={() => setCurrentSkill("Node.js")}style={{color: "#7fc728"}}><SiNodedotjs /></div>
          <div onMouseEnter={() => setCurrentSkill("React.js")}style={{color: "#5ed3f3"}}><SiReact /></div>
          <div onMouseEnter={() => setCurrentSkill("Java")} style={{color: "#e51f24"}}><SiJava /></div>
          <div onMouseEnter={() => setCurrentSkill("Spring")} style={{color: "#6aad3d"}}><SiSpring /></div>
        </div>
          <div style={{display: "block"}}>He understands <span style={{width: "10rem", display: "block"}}>{currentSkill}.</span></div>
      </div>
      <div className='card yellow'>
        <h1>foo</h1>
      </div>
      <div className='card'>
        <h1>foo</h1>
      </div>
    </div>
  )
}

export default App
