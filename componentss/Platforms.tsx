"use client"

import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Platforms() {
    const anchorizer = (link: string): void => {
        window.open(link)
    }

    return <div className='card yellow platforms' id='platforms'>
        <h1>I&apos;m also available on these platforms:</h1>
        <div className="links">
            <div onClick={_e => anchorizer("https://www.linkedin.com/in/m%C3%A1rton-barna-43653b236/")}>
                <SiLinkedin />
                <span>LinkedIn</span>
            </div>
            <div onClick={_e => anchorizer("https://github.com/BrownieMaar")}>
                <SiGithub />
                <span>GitHub</span>
            </div>
        </div>
    </div>
}