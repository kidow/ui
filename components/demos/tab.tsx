'use client'

import { TabsBtn, TabsContent, TabsProvider } from '@/components/kidow/tab'

const TABS = ['수집', '정규화', '출처']

export default function TabDemo() {
  return (
    <div className="w-full max-w-sm p-4">
      <TabsProvider defaultValue="수집">
        <div className="bg-muted flex gap-1 rounded-lg p-1">
          {TABS.map((value) => (
            <TabsBtn key={value} value={value}>
              <span className="relative z-2 px-3 py-1.5 text-sm">{value}</span>
            </TabsBtn>
          ))}
        </div>
        {TABS.map((value) => (
          <TabsContent key={value} value={value}>
            <p className="p-4 text-sm">{value} 단계</p>
          </TabsContent>
        ))}
      </TabsProvider>
    </div>
  )
}
