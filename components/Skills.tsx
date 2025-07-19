"use client"

import { useState } from 'react';

export default function Skills() {
    const [currentSkill, setCurrentSkill] = useState("various technologies")
    const skills = [
        {
            img: "/tech-icons/html.png",
            name: "HTML 5",
            color: "#e54c21"
        },
        {
            img: "/tech-icons/css.png",
            name: "CSS",
            color: "#214ce5"
        },
        {
            img: "/tech-icons/js.png",
            name: "JavaScript",
            color: "#f7e018",
            fry: true,
        },
        {
            img: "/tech-icons/seo.png",
            name: "SEO",
            color: "#7fc728"
        },
        {
            img: "/tech-icons/react.png",
            name: "React.js",
            color: "#5ed3f3",
            fry: true
        },
        {
            img: "/tech-icons/node.png",
            name: "Node.js",
            color: "#7fc728"
        },
        {
            img: "/tech-icons/ts.png",
            name: "TypeScript",
            color: "#007acc"
        },
        {
            img: "/tech-icons/express.png",
            name: "Express.js",
            color: "#7fc728"
        },
        {
            img: "/tech-icons/next.png",
            name: "Next.js",
            color: "#000000"
        },
        {
            img: "/tech-icons/git.png",
            name: "Git",
            color: "#f05032"
        },
        {
            img: "/tech-icons/shell.png",
            name: "Shell",
            color: "#4eaa1f"
        },
        {
            img: "/tech-icons/docker.png",
            name: "Docker",
            color: "#2496ed"
        },
        {
            img: "/tech-icons/cicd.png",
            name: "CI/CD",
            color: "#f7e018"
        },
        {
            img: "/tech-icons/sql.png",
            name: "SQL",
            color: "#00758f"
        },
        {
            img: "/tech-icons/nosql.png",
            name: "NoSQL",
            color: "#4eaa1f",
            fry: true
        }
    ]

    return <div className='card skillpage' id='skillpage'>
        <div className="logos" onMouseLeave={_e => setCurrentSkill("various technologies")}>
            {skills
                .map(skill =>
                    <div
                        key={skill.name}
                        onMouseEnter={_e => setCurrentSkill(skill.name)}
                        style={{ color: skill.color }}>
                        <img src={skill.img} alt={skill.name} className={`w-20 aspect-square grayscale ${skill.fry ? "contrast-[3] brightness-[0.25]" : "contrast-[5] brightness-75"} hover:grayscale-0 hover:contrast-100 hover:brightness-100`} />
                    </div>
                )}

        </div>
        <div className='skill-text'><span>My skills include </span><span className='skillspan text-center'>{currentSkill}.</span></div>
    </div>
}