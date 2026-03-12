import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function SidebarLeft() {
    return (
        <div
            id="social-icons"
            className="
            absolute top-1/2 left-2 sm:left-6
            -translate-y-1/2
            hidden sm:flex flex-col items-center gap-4 z-80
            "
        >

            <p className="sidebar-link">
                <a href="#home">.is()</a>
            </p>

            <p className="sidebar-link">
                <a href="#projects">.work()</a>
            </p>

            <p className="sidebar-link">
                <a href="#architecture">.about()</a>
            </p>

            <div className="my-2 h-16 w-px bg-black/20 dark:bg-white/20"></div>

            <p className="sidebar-link">
                <a href="#stack">.resume()</a>
            </p>

            <p className="sidebar-link">
                <a href="#lab">.projects()</a>
            </p>

            <p className="sidebar-link">
                <a href="#contact">.contact()</a>
            </p>

        </div>
    )
}
