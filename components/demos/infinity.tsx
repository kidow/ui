import { InfinityLoop } from '@/components/kidow/infinity'

export default function InfinityDemo() {
  return (
    <div className="text-foreground flex min-h-32 w-full items-center justify-center p-4">
      <InfinityLoop className="size-10" />
    </div>
  )
}
