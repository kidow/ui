import { Kbd, KbdCombo } from '@/components/kidow/keycap/kbd'

export default function KeycapDemo() {
  return (
    <div className="flex items-center gap-4">
      <Kbd>⌘</Kbd>
      <KbdCombo keys={['⌘', 'K']} />
    </div>
  )
}
