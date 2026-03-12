"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function GithubSignIn() {
    return (
        <div className="flex items-center justify-center">
            <Link
                href="https://github.com/yoacinsoy"
                className="
                flex items-center justify-center gap-3
                bg-[#4b5563]
                hover:bg-[#374151]
                text-white
                font-medium
                px-6 py-3
                rounded-lg
                shadow-md
                hover:shadow-lg
                transition-all duration-200
                w-full
                max-w-xs
                sm:max-w-sm
                md:max-w-md
                "
            >
                <Github size={20} />
                <span>
                    Veja meu Github
                </span>
            </Link>
        </div>
    );
}
