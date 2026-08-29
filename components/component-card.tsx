import Link from 'next/link'

import { demos } from '@/components/demos'
import { Badge } from '@/components/ui/badge'
import type { RegistryItem } from '@/lib/registry'

export function ComponentCard({ item }: { item: RegistryItem }) {
  const Demo = demos[item.name]

  return (
    <Link
      href={`/c/${item.name}`}
      className="hover:border-foreground/20 group flex flex-col overflow-hidden rounded-xl border transition-colors"
    >
      <div className="bg-muted/40 flex min-h-40 items-center justify-center overflow-hidden p-6">
        {Demo ? (
          <Demo />
        ) : (
          <span className="text-muted-foreground text-xs">데모 없음</span>
        )}
      </div>
      <div className="flex items-center gap-2 border-t px-4 py-3">
        <span className="text-sm font-medium">{item.title}</span>
        <div className="ml-auto flex items-center gap-1.5">
          <Badge variant="secondary">{item.meta.source}</Badge>
          <Badge variant="outline">{item.meta.license}</Badge>
        </div>
      </div>
    </Link>
  )
}
