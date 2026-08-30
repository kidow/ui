'use client'

import { TrustedUsers } from '@/components/kidow/trusted-users'

export default function TrustedUsersDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <TrustedUsers avatars={['/demo-1.svg', '/demo-2.svg', '/demo-3.svg', '/demo-4.svg']} rating={5} totalUsersText={1250} />
    </div>
  )
}
