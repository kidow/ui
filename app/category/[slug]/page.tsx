import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

import { ComponentCard } from '@/components/component-card'
import {
  CATEGORY_SLUGS,
  categoryFromSlug,
  categorySlug,
  groupByCategory,
} from '@/lib/registry'

export function generateStaticParams() {
  return groupByCategory().map(([category]) => ({ slug: categorySlug(category) }))
}

export async function generateMetadata({
  params,
}: PageProps<'/category/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const category = categoryFromSlug(slug)
  if (!category) return {}
  const group = groupByCategory().find(([name]) => name === category)
  return {
    title: category,
    description: `${category} 컴포넌트 ${group?.[1].length ?? 0}개. 출처와 라이선스를 함께 표기합니다.`,
  }
}

export default async function CategoryPage({ params }: PageProps<'/category/[slug]'>) {
  const { slug } = await params
  const category = categoryFromSlug(slug)
  if (!category) notFound()

  const group = groupByCategory().find(([name]) => name === category)
  if (!group) notFound()

  const [, list] = group
  const others = groupByCategory()
    .filter(([name]) => name !== category)
    .sort(([, a], [, b]) => b.length - a.length)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-sm transition-colors"
        >
          <ChevronLeft className="size-4" />
          전체 카테고리
        </Link>
        <div className="flex items-baseline gap-2">
          <h1 className="font-heading text-2xl font-semibold">{category}</h1>
          <span className="text-muted-foreground text-sm">{list.length}개</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item) => (
          <ComponentCard key={item.name} item={item} />
        ))}
      </div>

      <nav className="flex flex-col gap-3 border-t pt-8">
        <h2 className="text-muted-foreground text-sm font-medium">다른 카테고리</h2>
        <div className="flex flex-wrap gap-2">
          {others.map(([name, group]) => (
            <Link
              key={name}
              href={`/category/${CATEGORY_SLUGS[name] ?? name}`}
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
