'use client'

import { MagneticText } from "@/components/kidow/morphing-cursor";

export default function MorphingCursorDemo() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <MagneticText text="CREATIVE" hoverText="EXPLORE" />
    </div>
  );
}
