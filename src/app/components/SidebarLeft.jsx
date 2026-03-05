import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function SidebarLeft() {
    return (
        <div id="social-icons" class="absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 sm:left-6 sm:flex">
            <a href="#" class="text-blue-500 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-300">
                <Instagram class="h-5 w-5" />
            </a>
            <a href="#" class="text-blue-500 transition hover:text-blue-400 dark:text-white dark:hover:text-blue-300">
                <Facebook class="h-5 w-5" />
            </a>
            <a href="#" class="text-blue-500 transition hover:text-blue-400 dark:text-white dark:hover:text-blue-300">
                <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="text-blue-500 transition hover:text-blue-400 dark:text-white dark:hover:text-blue-300">
                <Youtube class="h-5 w-5" />
            </a>

            <div class="my-2 h-16 w-px bg-gray-400 dark:bg-white/50"></div>

            <p class="rotate-180 text-xs font-bold tracking-widest text-blue-500 drop-shadow-[0_0_8px_#1F51FF] [writing-mode:vertical-rl]">SIGA-NOS</p>
        </div>
    )
}
