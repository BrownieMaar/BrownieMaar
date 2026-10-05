"use client"

import { useState } from 'react';
import { SiCss3, SiDocker, SiExpress, SiGit, SiGithubactions, SiGnubash, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

export default function Skills() {
    const [currentSkill, setCurrentSkill] = useState("various technologies")
    const skills = [
        { Icon: SiHtml5, name: "HTML", color: "#e54c21" },
        { Icon: SiCss3, name: "CSS", color: "#214ce5" },
        { Icon: SiJavascript, name: "JavaScript", color: "#f7e018" },
        { Icon: FaMagnifyingGlassChart, name: "SEO", color: "#7fc728" },
        { Icon: SiReact, name: "React.js", color: "#5ed3f3" },
        { Icon: SiNodedotjs, name: "Node.js", color: "#7fc728" },
        { Icon: SiTypescript, name: "TypeScript", color: "#007acc" },
        { Icon: SiExpress, name: "Express.js", color: "#7fc728" },
        { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { Icon: SiGit, name: "Git", color: "#f05032" },
        { Icon: SiGnubash, name: "Shell", color: "#4eaa1f" },
        { Icon: SiDocker, name: "Docker", color: "#2496ed" },
        { Icon: SiGithubactions, name: "CI/CD", color: "#f7e018" },
        { Icon: SiMysql, name: "SQL", color: "#00758f" },
        { Icon: SiMongodb, name: "NoSQL", color: "#4eaa1f" }
    ]

    return <div className='card skillpage' id='skillpage'>
        <div className="logos" onMouseLeave={_e => setCurrentSkill("various technologies")}>
            {skills
                .map(skill =>
                    <div
                        key={skill.name}
                        onMouseEnter={_e => setCurrentSkill(skill.name)}
                        style={{ color: skill.color }}>
                        <skill.Icon aria-label={skill.name} />
                    </div>
                )}

        </div>
        <div className='skill-text'><span>My skills include </span><span className='skillspan text-center'>{currentSkill}</span></div>
    </div>
}
