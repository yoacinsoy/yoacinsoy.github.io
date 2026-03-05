'use client';

import { CircleDot } from "lucide-react";
import { useState } from 'react'

export default function SidebarRight() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = ['/robin.png', '/hero-background.svg', '/hero-background.svg']

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div id="slider-controls" className="absolute top-1/2 right-6 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 text-white sm:flex">
            <div className="my-2 h-6 w-px bg-white/50"></div>
            {slides.map((slide, i) => (
                <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`transition ${currentSlide === i ? 'scale-125 text-green-400' : 'text-white'}`}
                >
                    <CircleDot className="h-5 w-5" />
                </button>
            ))}
            <div className="my-2 h-6 w-px bg-white/50"></div>
        </div>
    )
}
