"use client"

export default function Welcome() {

    const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href");
        id && document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return <div className='card red welcome'>
        <div className='contact-card'>
            <img src="./headshot.jpg" alt="Headshot of Márton Barna" />
            <div className='flex flex-col gap-0.5 items-start justify-between'>
                <p className="text-3xl sm:text-4xl font-bold">Hi, I&apos;m</p>
                <h1 className="text-5xl sm:text-6xl font-bold text-center">Márton BARNA,</h1>
                <p className="text-3xl sm:text-4xl font-bold self-end">a Full Stack developer.</p>
            </div>
        </div>
        <div className="jumpto text-center">
            Learn more about
            my <a href="#skillpage" className="jump"
                onClick={(e) => scrollToId(e)}>skills</a> or <a href="#platforms" className="jump"
                    onClick={(e) => scrollToId(e)}
                >references</a> by
            clicking on them, or scrolling down.
        </div>
    </div>
}