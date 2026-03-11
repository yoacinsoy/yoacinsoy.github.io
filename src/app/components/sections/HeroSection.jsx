import SidebarLeft from "../navigation/SidebarLeft";
import SidebarRight from "../navigation/SidebarRight";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-smooth z-10" id="home">
            <SidebarLeft />
            <div className="relative z-20 w-full max-w-7xl px-6">
                <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Hola, soy Yoacin Soy
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left mx-12">
                        <p className="text-lg text-gray-300 leading-relaxe">
                            Desenvolvedor Full Stack apaixonado por criar experiências digitais impactantes.
                            Especialista em tecnologias modernas como React, Next.js, Node.js e TypeScript.
                            Sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="px-3 py-1 bg-purple-500/20 rounded-full">React</span>
                                <span className="px-3 py-1 bg-pink-500/20 rounded-full">Next.js</span>
                                <span className="px-3 py-1 bg-blue-500/20 rounded-full">Node.js</span>
                            </div>
                            <p className="text-gray-400">
                                Transformando ideias em soluções reais através da tecnologia.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
                            <Image
                                src="/hero.svg"
                                alt="Yoacin Soy"
                                width={500}
                                height={500}
                                className="relative z-10 rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SidebarRight />
        </section>
    );
}
