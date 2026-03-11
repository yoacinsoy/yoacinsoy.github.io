import ParticlesBackground from "./components/ui/ParticlesBackground";
import HeroSection from "@/app/components/sections/HeroSection";
import Header from "@/app/components/layout/Header";
import DraggableGrid from "./components/ui/DraggableGrid";

export default function Home() {
    return (
        <div className="min-h-screen bg-background font-sans overflow-x-hidden">
            <Header />
            <DraggableGrid />
            <ParticlesBackground />
            <HeroSection />
        </div>
    );
}
