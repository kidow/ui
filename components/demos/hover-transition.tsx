import { HoverTransition } from '@/components/kidow/hover-transition'

export default function HoverTransitionDemo() {
  return (
    <HoverTransition
      className="h-32 w-56 rounded-lg border"
      defaultComponent={
        <div className="flex h-full items-center justify-center text-sm">기본</div>
      }
      hoverComponent={
        <div className="bg-muted flex h-full items-center justify-center text-sm">
          hover 상태
        </div>
      }
    />
  )
}
