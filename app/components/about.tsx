import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-col items-center p-5 bg-orange-400">
            <h1 className="items-start">HELLO. I AM JERIC</h1>
            <h2>JERIC RECTIN</h2>
            <p>I USE MY PASSION AND SKILLS TO CREATE AND DEVELOP APPS THAT CAN MAKE DIFFERENCE AND BRING IDEAS TO LIFE.</p>
            <p>
                I AM CONSTANTLY LEARNING AND EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLS 
                AND STAY AHEAD IN THE EVER-EVOLVING TECH LANDSCAPE.
                WHETHER IT'S DESIGNING A SLEEK WEBSITEE OR DEVELOPING FUNCTIONAL WEB APPLICATION SOLUTION,
                I AM DEDICATED TO DELIVERING HIGH QUALITY WORK THAT EXCEEDS EXPECTATIONS.
            </p>
            <Image src="/gojo.jpg" alt="Jeric Rectin Profile" width={300} height={300} />
        </div>
    )
}