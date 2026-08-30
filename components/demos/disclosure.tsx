'use client'

import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/components/kidow/disclosure'

export default function DisclosureDemo() {
  return (
    <div className="w-full max-w-sm p-4">
      <Disclosure className="rounded-lg border">
        <DisclosureTrigger>
          <button className="w-full px-4 py-3 text-left text-sm font-medium">
            레지스트리를 어떻게 등록하나요?
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <p className="text-muted-foreground px-4 pb-4 text-sm">
            components.json 에 네임스페이스를 한 번만 추가하면 됩니다.
          </p>
        </DisclosureContent>
      </Disclosure>
    </div>
  )
}
