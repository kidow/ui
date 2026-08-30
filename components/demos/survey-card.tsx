'use client'

import SurveyCard from '@/components/kidow/survey-card'

export default function SurveyCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <SurveyCard items={[{ vote: 42, itemName: '좋다' }, { vote: 18, itemName: '보통' }, { vote: 7, itemName: '별로' }]} />
    </div>
  )
}
