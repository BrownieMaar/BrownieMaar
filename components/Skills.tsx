"use client"

import { useState } from 'react';
import { FaMagnifyingGlassChart } from "react-icons/fa6";

export default function Skills() {
    const [currentSkill, setCurrentSkill] = useState("various technologies")
    const skills = [
        { icon: "html5-plain", name: "HTML", color: "#e54c21" },
        { icon: "css3-plain", name: "CSS", color: "#214ce5" },
        { icon: "javascript-plain", name: "JavaScript", color: "#f7e018" },
        { icon: null, name: "SEO", color: "#7fc728" },
        { icon: "react-plain", name: "React.js", color: "#5ed3f3" },
        { icon: "nodejs-plain", name: "Node.js", color: "#7fc728" },
        { icon: "typescript-original", name: "TypeScript", color: "#007acc" },
        { icon: "express-original", name: "Express.js", color: "#7fc728" },
        { icon: "nextjs-plain", name: "Next.js", color: "var(--logo-next)" },
        { icon: "git-plain", name: "Git", color: "#f05032" },
        { icon: "bash-plain", name: "Shell", color: "#4eaa1f" },
        { icon: "docker-plain", name: "Docker", color: "#2496ed" },
        { icon: "githubactions-plain", name: "CI/CD", color: "#2088ff" },
        { icon: "mysql-plain", name: "SQL", color: "#00758f" },
        { icon: "mongodb-plain", name: "NoSQL", color: "#4eaa1f" }
    ]

    return <div className='card skillpage' id='skillpage'>
        <div className="logos" onMouseLeave={_e => setCurrentSkill("various technologies")}>
            {skills
                .map(skill =>
                    <div
                        key={skill.name}
                        onMouseEnter={_e => setCurrentSkill(skill.name)}
                        style={{ color: skill.color }}>
                        {skill.icon
                            ? <i className={`devicon-${skill.icon}`} aria-label={skill.name}></i>
                            : <FaMagnifyingGlassChart aria-label={skill.name} />}
                    </div>
                )}

        </div>
        <div className='skill-text'><span>My skills include </span><span className='skillspan text-center'>{currentSkill}</span></div>
    </div>
}
