import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function SidebarLeft() {
    return (
        <div id="social-icons" className="absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 sm:left-6 sm:flex">

            <p className="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">HOME</a></p>

            <p className="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">ABOUT</a></p>

            <p className="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">CURSOS</a></p>

            <p className="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">CONTATO</a></p>

            <div className="my-2 h-16 w-px bg-gray-400 dark:bg-white/50"></div>

            <p className="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">TECNOLOGIAS</a></p>
        </div>
    )
}
