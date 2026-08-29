import { ComponentCard } from '@/components/component-card'
import { groupByCategory, items } from '@/lib/registry'

export default function Home() {
  const groups = groupByCategory()

  if (items.length === 0) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center gap-3 rounded-xl border border-dashed text-center">
        <p className="font-heading text-lg font-semibold">아직 컴포넌트가 없습니다</p>
        <p className="text-muted-foreground max-w-md text-sm">
          Claude Code에 원본 문서 URL을 주면 <code className="font-mono">add-component</code>{' '}
          스킬이 원본 코드를 정규화해 레지스트리에 등록하고 출처를 함께 기록합니다.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-12">
      {groups.map(([category, list]) => (
        <section key={category} className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <h2 className="font-heading text-xl font-semibold">{category}</h2>
            <span className="text-muted-foreground text-sm">{list.length}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
