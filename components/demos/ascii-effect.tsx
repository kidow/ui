import { AsciiImage } from '@/components/kidow/ascii-effect'

export default function AsciiEffectDemo() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg">
      <AsciiImage imageSrc="/demo-1.svg" alt="ASCII 변환 예시" />
    </div>
  )
}
