import { useState } from 'react';
import { SiCss3, SiHtml5, SiJava, SiJavascript, SiNodedotjs, SiReact, SiSpring } from "react-icons/si";
import "./Skills.css"

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
            name: "Java",
            color: "#e51f24",
            element: <SiJava />
        },
        {
            name: "Spring",
            color: "#6aad3d",
            element: <SiSpring />
        },
    ]

    return <div className='card skillpage' id='skillpage'>
        <div className="logos">
            {skills
                .map(skill =>
                    <div
                        onMouseEnter={() => setCurrentSkill(skill.name)}
                        onMouseLeave={() => setCurrentSkill("various technologies")}
                        style={{ color: skill.color }}>
                        {skill.element}
                    </div>
                )}

        </div>
        <div>My skills include <span>{currentSkill}.</span></div>
    </div>
}