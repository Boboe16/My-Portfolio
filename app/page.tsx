import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Practice from "./components/practice"
import AnimatedSvg from "./components/animated-wave";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-primary sm:mx-72">
        <Introduction />
        <Work />
        <AnimatedSvg />
        <About />
        <Contact />
      </div>
      <Footer />
      <Practice />
    </>
  );
}
