"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(initialDark);

    if (initialDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-20 h-10 rounded-full
        transition-all duration-500 ease-in-out
        ${isDark ? "neon-dark bg-zinc-900" : "neon-light bg-zinc-200"}`}
    >
      <div
        className={`absolute flex items-center justify-center w-8 h-8 rounded-full
        transition-all duration-500 transform
        ${isDark ? "translate-x-10 bg-zinc-800" : "translate-x-1 bg-white"}`}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-blue-400 drop-shadow-[0_0_6px_rgba(0,180,255,0.9)]" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_6px_rgba(255,200,0,0.9)]" />
        )}
      </div>
    </button>
  );
}
