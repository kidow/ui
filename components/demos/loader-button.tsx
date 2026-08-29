'use client'

import { useState } from 'react'

import LoaderButton from '@/components/kidow/loader-button'

export default function LoaderButtonDemo() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex min-h-64 w-full items-center justify-center">
      <LoaderButton
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(true)
          setTimeout(() => setIsLoading(false), 2000)
        }}
      >
        설치하기
      </LoaderButton>
    </div>
  )
}
