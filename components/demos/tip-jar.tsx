import { TipJarCard } from '@/components/kidow/tip-jar/tip-jar'

export default function TipJarDemo() {
  return (
    <TipJarCard
      provider="ethereum"
      address="0x1234567890abcdef1234567890abcdef12345678"
      className="w-72"
    />
  )
}
