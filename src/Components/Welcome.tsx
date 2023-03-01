export default function Welcome() {

    const scrollToId = (id: string): void => {
        document.getElementById(id)!.scrollIntoView({ behavior: "smooth" })
    }
    
    return <div className='card red welcome'>
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
}