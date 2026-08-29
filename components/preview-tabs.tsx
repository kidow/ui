'use client'

import type { ReactNode } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Props {
  preview: ReactNode
  sources: { path: string; content: string }[]
}

export function PreviewTabs({ preview, sources }: Props) {
  return (
    <Tabs defaultValue="preview" className="gap-3">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="bg-muted/40 flex min-h-72 items-center justify-center overflow-hidden rounded-xl border p-8">
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code" className="flex flex-col gap-4">
        {sources.map((source) => (
          <div key={source.path} className="overflow-hidden rounded-xl border">
            <div className="text-muted-foreground bg-muted/40 font-mono border-b px-4 py-2 text-xs">
              {source.path}
            </div>
            <pre className="max-h-[32rem] overflow-auto p-4 text-xs">
              <code className="font-mono">{source.content}</code>
            </pre>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
