import Image from "next/image"
import TypingText from "@/app/components/ui/TypingText"

export default function Me() {
    return (
        <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold
            text-center
            mb-10 md:mb-14 md:mt-24
            text-transparent bg-clip-text
            bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500
            ">
                Hello, I'm Wallace.
                <br className="hidden sm:block" />
                <TypingText
                    words={[
                        "Full Stack Developer",
                        "Backend Engineer",
                        "API Architect",
                        "Open Source Enthusiast",
                        "TypeScript Lover"
                    ]}
                />
            </h1>

            <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-10 md:gap-14
            items-center
            ">

                <div className="
                text-center
                md:text-left
                max-w-xl
                mx-auto
                md:mx-8
                ">

                    <p className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    text-zinc-300
                    leading-relaxed
                    ">
                        Full Stack Developer passionate about creating impactful digital experiences.
                        Specialist in modern technologies such as React, Next.js, Node.js, and TypeScript.
                        Always seeking new challenges and opportunities to grow professionally.
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="
                        flex
                        flex-wrap
                        justify-center md:justify-start
                        gap-3
                        text-sm
                        text-gray-400
                        ">

                            <span className="tech-chip">
                                React
                            </span>

                            <span className="tech-chip">
                                Node.js
                            </span>

                            <span className="tech-chip">
                                Node.js
                            </span>

                        </div>

                        <p className="text-sm sm:text-base text-gray-400">
                            Transformando ideias em soluções reais através da tecnologia.
                        </p>

                    </div>
                </div>

                <div className="flex justify-center md:justify-end">

                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

                        <Image
                            src="/yo.png"
                            alt="Foto do desenvolvedor Wallace Henrique Carneiro"
                            width={1920}
                            height={1080}
                            className="
                            rounded-2xl
                            w-full
                            h-auto
                            "
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
