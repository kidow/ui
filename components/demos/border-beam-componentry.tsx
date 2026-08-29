import { BorderBeam } from '@/components/kidow/border-beam-componentry'

export default function BorderBeamComponentryDemo() {
  return (
    <div className="relative h-40 w-72 overflow-hidden rounded-xl border">
      <div className="text-muted-foreground flex h-full items-center justify-center text-sm">
        Componentry 버전
      </div>
      <BorderBeam />
    </div>
  )
}
