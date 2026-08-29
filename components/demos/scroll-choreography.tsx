import { ScrollChoreography } from '@/components/kidow/scroll-choreography'

export default function ScrollChoreographyDemo() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg">
      <ScrollChoreography
        images={{
          topLeft: '/demo-1.svg',
          topRight: '/demo-2.svg',
          bottomLeft: '/demo-3.svg',
          bottomRight: '/demo-4.svg',
        }}
      />
    </div>
  )
}
