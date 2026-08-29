import { ExternalLink } from 'lucide-react'

import { SHADCN_BASE_COMPONENTS, shadcnDocUrl } from '@/lib/shadcn-base'

export function ShadcnBaseSection() {
  return (
    <section className="flex flex-col gap-4 border-t pt-10">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-xl font-semibold">shadcn 기본 컴포넌트</h2>
        <p className="text-muted-foreground text-sm">
          기본 컴포넌트는 여기에 복제하지 않습니다. 공식 레지스트리에서 그대로 설치하세요
          — <code className="font-mono">npx shadcn@latest add accordion</code>. 이 목록은
          링크일 뿐이며, 우리 컴포넌트는 필요할 때 이들을 의존성으로 참조합니다.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {SHADCN_BASE_COMPONENTS.map((name) => (
          <a
            key={name}
            href={shadcnDocUrl(name)}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground hover:border-foreground/20 font-mono inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-colors"
          >
            {name}
            <ExternalLink className="size-2.5" />
          </a>
        ))}
      </div>
    </section>
  )
}
