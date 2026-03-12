import SidebarLeft from "../navigation/SidebarLeft";
import Me from "./Me";
import SidebarRight from "../navigation/SidebarRight";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-smooth z-70" id="home">
            <SidebarLeft />
            <Me />
            <SidebarRight />
        </section>
    );
}
