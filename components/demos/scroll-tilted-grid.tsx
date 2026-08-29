import { ScrollTiltedGrid } from '@/components/kidow/scroll-tilted-grid'

const images = [
  { src: '/demo-1.svg', alt: '데모 1' },
  { src: '/demo-2.svg', alt: '데모 2' },
  { src: '/demo-3.svg', alt: '데모 3' },
  { src: '/demo-4.svg', alt: '데모 4' },
]

export default function ScrollTiltedGridDemo() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg">
      <ScrollTiltedGrid images={images} />
    </div>
  )
}
