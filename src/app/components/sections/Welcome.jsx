
import Hero from "./About";
import About from "./Hero";

import Image from "next/image";

export default function Welcome() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-smooth z-70" id="home">
            <Hero />
            <About />
        </section>
    );
}
