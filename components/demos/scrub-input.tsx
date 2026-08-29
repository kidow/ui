'use client'

import { ScrubInput } from '@/components/kidow/scrub-input'

export default function ScrubInputDemo() {
  return <ScrubInput label="Opacity" defaultValue={60} min={0} max={100} />
}
