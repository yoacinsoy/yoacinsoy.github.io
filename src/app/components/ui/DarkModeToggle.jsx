"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`relative z-60 flex items-center w-20 h-10 rounded-full
            transition-all duration-500 cubic-bezier(0.4,0,0.2,1)
            ${theme === "dark" ? "neon-dark bg-zinc-900" : "neon-light bg-zinc-200"}`}
        >
            <div
                className={`absolute flex items-center justify-center w-8 h-8 rounded-full
                transition-all duration-500 transform
                ${theme === "dark" ? "translate-x-10 bg-zinc-800" : "translate-x-1 bg-white"}`}
            >
                {theme === "dark" ? (
                    <Moon className="w-5 h-5 text-blue-400 drop-shadow-[0_0_6px_rgba(0,180,255,0.9)]" />
                ) : (
                    <Sun className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_6px_rgba(255,200,0,0.9)]" />
                )}
            </div>
        </button>
    );
}
