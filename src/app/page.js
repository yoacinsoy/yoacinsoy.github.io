import HeroSection from "@/app/components/sections/HeroSection";
import DarkModeToggle from "@/components/DarkModeToggle";
import SidebarLeft from "./components/SidebarLeft";

export default function Home() {
    return (
        <div className="min-h-screen bg-background font-sans overflow-x-hidden">
            <div className="fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out">
                <DarkModeToggle />
            </div>
            <div className="grid-bg fixed inset-0 pointer-events-none transition-all duration-500 ease-in-out" />
            <HeroSection />
        </div>
    );
}
