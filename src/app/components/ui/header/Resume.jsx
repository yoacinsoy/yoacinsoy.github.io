"use client";

import { Button } from "@/components/ui/button"
import { LucideFileText } from "lucide-react";
import Link from "next/link"

export default function Resume() {
    return (
        <Button
            asChild
            variant="outline"
            className="
            flex items-center gap-3
            p-6

            bg-white text-black border-black
            hover:bg-black hover:text-white

            dark:bg-black dark:text-white dark:border-zinc-800
            dark:hover:bg-zinc-100 dark:hover:text-black

            transition-all duration-300
            cursor-pointer z-60
            "
        >
            <Link href="/resume">
                <LucideFileText size={20} />
                <span className="font-medium tracking-wide">
                    Ver currículo
                </span>
            </Link>
        </Button>
    );
}
