import { LogosCarousel } from '@/components/kidow/logos-carousel'

export default function LogosCarouselDemo() {
  return (
    <div className="w-full max-w-md">
      <LogosCarousel>
        {['MagicUI', 'Componentry', 'Spell UI', 'shadcn/ui'].map((name) => (
          <span key={name} className="text-sm font-medium">
            {name}
          </span>
        ))}
      </LogosCarousel>
    </div>
  )
}
