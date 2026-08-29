import { ExternalLink } from 'lucide-react'

import { RELATED_REGISTRIES } from '@/lib/related-registries'

export function RelatedRegistriesSection() {
  return (
    <section className="flex flex-col gap-4 border-t pt-10">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-xl font-semibold">여기에 없는 것</h2>
        <p className="text-muted-foreground text-sm">
          이 레지스트리는 React + Tailwind로 브라우저에서 렌더되는 컴포넌트만 담습니다.
          기준에 걸리지만 알아둘 만한 곳들입니다.
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {RELATED_REGISTRIES.map((registry) => (
          <li key={registry.name} className="rounded-xl border p-4">
            <a
              href={registry.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
            >
              {registry.name}
              <ExternalLink className="size-3" />
            </a>
            <p className="text-muted-foreground mt-1 text-sm">{registry.summary}</p>
            <p className="text-muted-foreground/80 mt-1 text-xs">{registry.reason}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
