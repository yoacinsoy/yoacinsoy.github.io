import Image from "next/image";
import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            <SidebarLeft />
            <SidebarRight />
        </section>
    );
}
