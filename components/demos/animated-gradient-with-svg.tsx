'use client'

import AnimatedGradient from '@/components/kidow/animated-gradient-with-svg'

export default function AnimatedGradientWithSvgDemo() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl">
      <AnimatedGradient colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']} speed={0.1} blur="medium" />
    </div>
  )
}
