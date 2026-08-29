import { ColorPalette } from '@/components/kidow/color-palette/color-palette'

const colors = [
  { name: 'violet', value: '#7c3aed' },
  { name: 'pink', value: '#ec4899' },
  { name: 'amber', value: '#f59e0b' },
  { name: 'sky', value: '#0ea5e9' },
]

export default function ColorPaletteDemo() {
  return <ColorPalette colors={colors} />
}
