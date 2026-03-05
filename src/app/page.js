import HeroSection from "@/components/HeroSection";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
    return (
        <div className="min-h-screen bg-background  font-sans overflow-x-hidden">
            <div className="fixed top-4 right-4 z-50">
                <DarkModeToggle />
            </div>
            <div className="grid-bg fixed inset-0 pointer-events-none" />
            <HeroSection />
        </div>
    );
}
