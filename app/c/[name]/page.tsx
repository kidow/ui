import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ExternalLink } from 'lucide-react'

import { demos } from '@/components/demos'
import { isSupportItem } from '@/lib/demo-flags'
import { CopyCommand } from '@/components/copy-command'
import { PreviewTabs } from '@/components/preview-tabs'
import { Badge } from '@/components/ui/badge'
import {
  addCommand,
  categorySlug,
  getItem,
  items,
  readItemSources,
} from '@/lib/registry'
import { isShadcnBase, shadcnDocUrl } from '@/lib/shadcn-base'

export function generateStaticParams() {
  return items.map((item) => ({ name: item.name }))
}

export async function generateMetadata({
  params,
}: PageProps<'/c/[name]'>): Promise<Metadata> {
  const { name } = await params
  const item = getItem(name)
  if (!item) return {}
  return { title: item.title, description: item.description }
}

export default async function ComponentPage({ params }: PageProps<'/c/[name]'>) {
  const { name } = await params
  const item = getItem(name)
  if (!item) notFound()

  const sources = await readItemSources(item)
  const Demo = demos[item.name]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {item.categories?.[0] ? (
          <Link
            href={`/category/${categorySlug(item.categories[0])}`}
            className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-sm transition-colors"
          >
            <ChevronLeft className="size-4" />
            {item.categories[0]}
          </Link>
        ) : null}
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-2xl font-semibold">{item.title}</h1>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <PreviewTabs
            sources={sources}
            preview={
              Demo ? (
                <Demo />
              ) : (
                <span className="text-muted-foreground px-6 text-center text-xs">
                  {isSupportItem(item.name, item.description)
                    ? '다른 컴포넌트가 함께 설치해 쓰는 부품입니다. 아래 코드로 내용을 확인하세요.'
                    : '데모 없음'}
                </span>
              )
            }
          />
        </div>

        <aside className="flex w-full shrink-0 flex-col gap-4 lg:w-72">
          <CopyCommand
            command={addCommand(item.name)}
            className="w-full font-mono"
          />

          <MetaBox title="출처">
            <a
              href={item.meta.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 underline underline-offset-4"
            >
              {item.meta.source}
              <ExternalLink className="size-3" />
            </a>
            <p className="text-muted-foreground">{item.meta.author}</p>
          </MetaBox>

          <MetaBox title="라이선스">
            <Badge variant="outline">{item.meta.license}</Badge>
          </MetaBox>

          <MetaBox title="가져온 날">
            <p className="text-muted-foreground">{item.meta.retrievedAt}</p>
          </MetaBox>

          {item.categories?.length ? (
            <MetaBox title="카테고리">
              <div className="flex flex-wrap gap-1.5">
                {item.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </MetaBox>
          ) : null}

          {item.dependencies?.length || item.registryDependencies?.length ? (
            <MetaBox title="의존성">
              <ul className="text-muted-foreground font-mono flex flex-col gap-0.5 text-xs">
                {item.dependencies?.map((dependency) => (
                  <li key={dependency}>{dependency}</li>
                ))}
                {item.registryDependencies?.map((dependency) => (
                  <li key={dependency}>
                    {isShadcnBase(dependency) ? (
                      <a
                        href={shadcnDocUrl(dependency)}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-foreground inline-flex items-center gap-1 underline underline-offset-4"
                      >
                        {dependency}
                        <ExternalLink className="size-2.5" />
                      </a>
                    ) : (
                      dependency
                    )}
                  </li>
                ))}
              </ul>
            </MetaBox>
          ) : null}
        </aside>
      </div>
    </div>
  )
}

function MetaBox({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border p-4 text-sm">
      <p className="text-muted-foreground text-xs font-medium">{title}</p>
      {children}
    </div>
  )
}
