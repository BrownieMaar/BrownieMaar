"use client"

import { useState } from 'react';
import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiSpring } from "react-icons/si";

export default function Skills() {
    const [currentSkill, setCurrentSkill] = useState("various technologies")
    const skills = [
        {
            element: <SiHtml5 />,
            name: "HTML 5",
            color: "#e54c21"
        },
        {
            name: "CSS",
            color: "#214ce5",
            element: <SiCss3 />
        },
        {
            name: "JavaScript",
            color: "#f7e018",
            element: <SiJavascript />
        },
        {
            name:
                "Node.js",
            color: "#7fc728",
            element: <SiNodedotjs />
        },
        {
            name:
                "React.js",
            color: "#5ed3f3",
            element: <SiReact />
        },
        {
            name: "Spring",
            color: "#6aad3d",
            element: <SiSpring />
        },
    ]

    return <div className='card skillpage' id='skillpage'>
        <div className="logos" onMouseLeave={_e => setCurrentSkill("various technologies")}>
            {skills
                .map(skill =>
                    <div
                        key={skill.name}
                        onMouseEnter={_e => setCurrentSkill(skill.name)}
                        style={{ color: skill.color }}>
                        {skill.element}
                    </div>
                )}

        </div>
        <div className='skill-text'><span>My skills include </span><span className='skillspan'>{currentSkill}.</span></div>
    </div>
}