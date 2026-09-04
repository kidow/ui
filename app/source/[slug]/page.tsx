import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'

import { ComponentCard } from '@/components/component-card'
import { FilterableGrid } from '@/components/filterable-grid'
import { Badge } from '@/components/ui/badge'
import { groupBySource, sourceFromSlug, sourceSlug } from '@/lib/registry'

export function generateStaticParams() {
  return groupBySource().map(([source]) => ({ slug: sourceSlug(source) }))
}

export async function generateMetadata({
  params,
}: PageProps<'/source/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const source = sourceFromSlug(slug)
  if (!source) return {}
  const group = groupBySource().find(([name]) => name === source)
  return {
    title: source,
    description: `${source} 에서 가져온 컴포넌트 ${group?.[1].length ?? 0}개.`,
  }
}

export default async function SourcePage({ params }: PageProps<'/source/[slug]'>) {
  const { slug } = await params
  const source = sourceFromSlug(slug)
  if (!source) notFound()

  const group = groupBySource().find(([name]) => name === source)
  if (!group) notFound()

  const [, list] = group
  // 한 출처 안에서도 라이선스와 저자가 갈릴 수 있다. 있는 그대로 모아 보여준다.
  const licenses = [...new Set(list.map((item) => item.meta.license))]
  const authors = [...new Set(list.map((item) => item.meta.author))]
  const homepage = list[0].meta.sourceUrl

  const others = groupBySource().filter(([name]) => name !== source)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-sm transition-colors"
        >
          <ChevronLeft className="size-4" />
          홈
        </Link>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="font-heading text-2xl font-semibold">{source}</h1>
          <span className="text-muted-foreground text-sm">{list.length}개</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {licenses.map((license) => (
            <Badge key={license} variant="outline">
              {license}
            </Badge>
          ))}
          <span className="text-muted-foreground text-sm">{authors.join(' · ')}</span>
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
          >
            원본
            <ExternalLink className="size-3.5" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          저작권은 원저자에게 있습니다. 각 상세 페이지에 원본 문서 링크와 가져온 날짜를
          함께 적어 뒀습니다.
        </p>
      </div>

      <FilterableGrid
        showSource={false}
        entries={list.map((item) => ({
          name: item.name,
          title: item.title,
          description: item.description,
          source: item.meta.source,
          card: <ComponentCard item={item} />,
        }))}
      />

      <nav className="flex flex-col gap-3 border-t pt-8">
        <h2 className="text-muted-foreground text-sm font-medium">다른 출처</h2>
        <div className="flex flex-wrap gap-2">
          {others.map(([name, group]) => (
            <Link
              key={name}
              href={`/source/${sourceSlug(name)}`}
              className="text-muted-foreground hover:text-foreground hover:border-foreground/20 rounded-md border px-3 py-1.5 text-xs transition-colors"
            >
              {name} <span className="opacity-60">{group.length}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
