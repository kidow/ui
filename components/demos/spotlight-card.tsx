import {
  SpotlightCard,
  SpotlightCardDescription,
  SpotlightCardHeader,
  SpotlightCardTitle,
} from '@/components/kidow/spotlight-card'

export default function SpotlightCardDemo() {
  return (
    <SpotlightCard className="w-72">
      <SpotlightCardHeader>
        <SpotlightCardTitle>Spotlight</SpotlightCardTitle>
        <SpotlightCardDescription>
          커서를 따라 조명이 움직입니다.
        </SpotlightCardDescription>
      </SpotlightCardHeader>
    </SpotlightCard>
  )
}
