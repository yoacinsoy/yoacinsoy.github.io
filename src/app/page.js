import HeroSection from "@/components/HeroSection";
export default function Home() {
    return (
        <div className="min-h-screen bg-[#e8e8e8] font-sans overflow-x-hidden">
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(180,180,180,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(180,180,180,0.3) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />
            <HeroSection />
        </div>
    );
}
