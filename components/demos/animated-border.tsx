'use client'

import { AnimatedBorder } from '@/components/kidow/animated-border';
import { Button } from '@/components/ui/button';

export function AnimatedBorderDemo() {
  return (
    <div className="flex justify-center gap-8 flex-wrap">
      <div className="rounded relative bg-card shadow-2xs ring ring-ring/10 size-60  overflow-hidden">
        <AnimatedBorder
          color="#DE6449"
          className="absolute inset-0  border border-[#DE6449]/20"
        />
      </div>

      <Button variant="outline" className="relative">
        <AnimatedBorder
          color="#791E94"
          className="p-0 absolute -inset-px  border border-[#791E94]/10"
        />
        Get Started
      </Button>
    </div>
  );
}


export default AnimatedBorderDemo
