"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function GithubSignIn() {
    return (
        <div className="flex items-center justify-center">
            <Link
                href="https://github.com/yoacinsoy"
                className="flex items-center justify-center gap-3 bg-zinc-700 hover:bg-zinc-600 text-white font-medium px-6 py-3 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.25)] hover:shadow-lg transition-all duration-20 w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
                <GithubIcon size={20} />
                <span>
                    View on GitHub
                </span>
            </Link>
        </div>
    );
}
