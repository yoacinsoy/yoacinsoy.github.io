import Image from "next/image"
export default function About() {
    return (
        <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="architecture">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-center md:text-left max-w-xl mx-8 md:mx-8 sm:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Full Stack Developer passionate about creating impactful digital
                        experiences. Specialist in modern technologies such as React,
                        Next.js, Node.js, and TypeScript. Always seeking new challenges and
                        opportunities to grow professionally.
                    </p>

                    <div className="mt-8 space-y-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
                            <span className="tech-chip">React</span>
                            <span className="tech-chip">Node.js</span>
                            <span className="tech-chip">Vue.js</span>
                            <span className="tech-chip">Next.js</span>
                            <span className="tech-chip">Laravel</span>
                        </div>

                        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                            Transformando ideias em soluções reais através da tecnologia.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full max-w-sm sm:max-w-md">
                        <Image
                            src="/yo.png"
                            alt="Foto do desenvolvedor Wallace Henrique Carneiro"
                            width={1200}
                            height={1200}
                            className="rounded-2xl w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
