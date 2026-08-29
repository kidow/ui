import { BalancedText } from '@/components/kidow/balanced-text/balanced-text'

export default function BalancedTextDemo() {
  return (
    <div className="max-w-sm text-center text-lg">
      <BalancedText text="줄바꿈 폭을 고르게 맞춰 문장이 한쪽으로 쏠리지 않게 합니다" />
    </div>
  )
}
