import Image from "next/image"

export default function About() {
    return (
        <div id="about-section" className="flex flex-col p-5 pt-24 bg-primary">
            <h1 className="font-abril text-5xl">HELLO.</h1>
            <h1 className="font-abril text-5xl">I AM JERIC</h1>
            <h2 className="font-abril text-quinary text-2xl">JERIC RECTIN</h2>
            <p className=" font-lato text-xl pr-36 my-8 ">I USE MY PASSION AND SKILLS TO CREATE AND DEVELOP APPS THAT CAN MAKE DIFFERENCE AND BRING IDEAS TO LIFE.</p>
            <p className="text-xl pr-36 my-8 ">
                I AM CONSTANTLY LEARNING AND EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLS 
                AND STAY AHEAD IN THE EVER-EVOLVING TECH LANDSCAPE.
                WHETHER IT&apos;S DESIGNING A SLEEK WEBSITE OR DEVELOPING FUNCTIONAL WEB APPLICATION SOLUTIONS,
                I AM DEDICATED TO DELIVERING HIGH QUALITY WORK THAT EXCEEDS EXPECTATIONS.
            </p>
            <div className="w-full h-100">
                <Image
                    className="shadow-md border-secondary rounded-md"
                    src={'/me.jpg'}
                    alt="Placeholder Project Image"
                    width={300}
                    height={300}
                    style={{width: '100%', height: '100%'}}
                />
            </div>
        </div>
    )
}