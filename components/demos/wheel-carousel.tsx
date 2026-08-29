import {
  WheelCarousel,
  wheelCarouselDefaultItems,
} from '@/components/kidow/wheel-carousel'

export default function WheelCarouselDemo() {
  return (
    <div className="h-64 w-full overflow-hidden">
      <WheelCarousel items={wheelCarouselDefaultItems} />
    </div>
  )
}
