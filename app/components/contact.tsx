export default function Contact() {
    const buttonCSS = "font-lato text-primary shadow-md border rounded-md my-1 p-2 bg-tertiary hover:bg-primary hover:text-secondary hover:transition border-black"

    return (
        <div id="contact-section" className="flex flex-col p-5 pt-24 mb-28">
            <h1 className="font-abril text-5xl">LET'S</h1>
            <h1 className="font-abril text-5xl">CONNECT</h1>
            <h2 className="font-abril text-xl mb-4">I AM ALWAYS INTERESTED ABOUT</h2>
            <button className={`${buttonCSS}`}>FRONT END DEVELOPMENT</button>
            <button className={`${buttonCSS}`}>BACK END DEVELOPMENT</button>
            <button className={`${buttonCSS}`}>SEO MARKETING</button>
            <button className={`${buttonCSS}`}>WEB CONSULTANT</button>
            <button className={`${buttonCSS}`}>BUSSINESSES AND PIZZAS</button>
        </div>
    )
}