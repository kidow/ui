"use client";

import SpaceBox from "@/components/kidow/space-box";

export default function SpaceBoxDemo() {
    return (
        <main className="flex items-center justify-center p-4">
            <SpaceBox
                highlightedWord="Hover"
                text="to see magic"
                animatedText="Animated Scrolling Text"
                starDensity="high"
            />
        </main>
    )
}

