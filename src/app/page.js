import Header from "@/app/components/layout/Header";
import Grid from "@/app/components/ui/Grid";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import Welcome from "@/app/components/sections/Welcome";
import Works from "@/app/components/sections/Works";

export default function Home() {
    return (
        <div className="min-h-screen bg-background font-sans overflow-x-hidden">
            <Header />
            <Grid />
            <ParticlesBackground />
            <Welcome />
            <Works />
        </div>
    );
}
