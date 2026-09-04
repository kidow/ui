import { CopyBlock } from '@/components/copy-block'
import { NAMESPACE, REGISTRY_URL, items } from '@/lib/registry'

const REGISTER = `npx shadcn@latest registry add "${NAMESPACE}=${REGISTRY_URL}/r/{name}.json"`

const MCP_INIT = `npx shadcn@latest mcp init`

const AGENT_RULE = `## UI 컴포넌트

새 UI 컴포넌트가 필요하면 직접 만들기 전에 ${NAMESPACE} 레지스트리를 먼저 검색한다.
search_items_in_registries → view_items → get_add_command 순서로 쓴다.`

const STEPS = [
  {
    title: '레지스트리 등록',
    body: '프로젝트당 한 번. components.json 에 네임스페이스가 추가됩니다.',
    code: REGISTER,
  },
  {
    title: 'MCP 연결',
    body: 'shadcn CLI에 MCP 서버가 내장돼 있습니다. 등록된 레지스트리를 그대로 검색·설치합니다.',
    code: MCP_INIT,
  },
  {
    title: '에이전트에게 알려주기',
    body: 'AGENTS.md 나 CLAUDE.md 에 넣습니다. 이게 없으면 에이전트가 검색하지 않고 직접 만들어 버립니다.',
    code: AGENT_RULE,
  },
]

export function McpSetupSection() {
  return (
    <section className="flex flex-col gap-5 rounded-xl border p-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-xl font-semibold">MCP로 쓰기</h2>
        <p className="text-muted-foreground text-sm">
          세 단계면 에이전트가 이 레지스트리의 컴포넌트 {items.length}개를 직접 찾아 설치합니다.
        </p>
      </div>
      <ol className="grid gap-5 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex min-w-0 flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-muted text-muted-foreground flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                {index + 1}
              </span>
              <h3 className="text-sm font-medium">{step.title}</h3>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">{step.body}</p>
            <CopyBlock code={step.code} className="mt-auto" />
          </li>
        ))}
      </ol>
    </section>
  )
}
