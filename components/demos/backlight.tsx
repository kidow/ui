import { Backlight } from '@/components/kidow/backlight'

export default function BacklightDemo() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center">
      <Backlight>
        <img src="/demo-1.svg" alt="백라이트 예시" className="size-40 rounded-xl" />
      </Backlight>
    </div>
  )
}
