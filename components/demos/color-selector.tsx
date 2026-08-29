'use client'

import { ColorSelector } from '@/components/kidow/color-selector'

const colors = ['#7c3aed', '#ec4899', '#f59e0b', '#0ea5e9', '#22c55e']

export default function ColorSelectorDemo() {
  return <ColorSelector colors={colors} defaultValue={colors[0]} />
}
