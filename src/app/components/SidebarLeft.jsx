import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function SidebarLeft() {
    return (
        <div id="social-icons" class="absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 sm:left-6 sm:flex">
            <a href="#" class="text-green-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-300">
                <Instagram class="h-5 w-5" />
            </a>
            <a href="#" class="text-green-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-300">
                <Facebook class="h-5 w-5" />
            </a>
            <a href="#" class="text-green-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-300">
                <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="text-green-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-300">
                <Youtube class="h-5 w-5" />
            </a>

            <div class="my-2 h-16 w-px bg-gray-400 dark:bg-white/50"></div>

            <p class="rotate-180 text-xs font-bold tracking-widest text-green-500 drop-shadow-[0_0_8px_#22c55e] [writing-mode:vertical-rl]">SIGA-NOS</p>
        </div>
    )
}
