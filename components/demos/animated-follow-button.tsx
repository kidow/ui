'use client'

import AnimatedFollowButton from '@/components/kidow/animated-follow-button'

export default function AnimatedFollowButtonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <AnimatedFollowButton initialText="팔로우" changeText="팔로잉" />
    </div>
  )
}
