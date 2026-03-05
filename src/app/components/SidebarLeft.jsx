import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function SidebarLeft() {
    return (
        <div id="social-icons" class="absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 sm:left-6 sm:flex">

            <p class="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">HOME</a></p>

            <p class="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">ABOUT</a></p>

            <p class="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">CURSOS</a></p>

            <p class="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">CONTATO</a></p>

            <div class="my-2 h-16 w-px bg-gray-400 dark:bg-white/50"></div>

            <p class="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]"><a href="#home">TECNOLOGIAS</a></p>
        </div>
    )
}
