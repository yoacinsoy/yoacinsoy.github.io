import Image from "next/image"

export default function Me() {
    return (
        <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold
            text-center
            mb-10 md:mb-14 md:mt-14
            text-transparent bg-clip-text
            bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500
            ">
                Hello, I'm Wallace. <br className="hidden sm:block" /> A passionate Full Stack Developer.
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
                        Desenvolvedor Full Stack apaixonado por criar experiências digitais impactantes.
                        Especialista em tecnologias modernas como React, Next.js, Node.js e TypeScript.
                        Sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
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
                            src="/hero.svg"
                            alt="Yoacin Soy"
                            width={500}
                            height={500}
                            className="
                            rounded-2xl
                            "
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
