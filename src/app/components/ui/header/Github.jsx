"use client";

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react";
import Link from "next/link"

export default function GithubSocial() {
    return (
        <Button
            asChild
            className="
                bg-gradient-to-r
                from-neutral-100
                via-neutral-200
                to-neutral-500
                hover:brightness-110
                hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                text-black
                border border-zinc-800
                h-12 w-12
                flex items-center justify-center"
        >
            <Link href="https://github.com/yoacinsoy" target="_blank">
                <Github size={32} />
            </Link>
        </Button>
    );
}
