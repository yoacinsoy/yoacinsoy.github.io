import SidebarLeft from "../navigation/SidebarLeft";
import SidebarRight from "../navigation/SidebarRight";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden scroll-smooth z-10" id="home">
            <SidebarLeft />
            <SidebarRight />
        </section>
    );
}
