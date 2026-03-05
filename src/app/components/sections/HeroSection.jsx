import Image from "next/image";
import SidebarLeft from "../SidebarLeft";
export default function HeroSection() {
    return (
        <section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            <SidebarLeft />
        </section>
    );
}
