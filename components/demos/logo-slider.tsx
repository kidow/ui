'use client'

import LogoSlider from '@/components/kidow/logo-slider'

export default function LogoSliderDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <LogoSlider logos={['MagicUI', 'Componentry', 'Spell UI', 'jal-co/ui'].map((n) => (
        <span key={n} className="text-sm font-medium">{n}</span>
      ))} />
    </div>
  )
}
