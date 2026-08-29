# kidow/ui

여러 shadcn 호환 UI 프레임워크의 컴포넌트를 한 레지스트리에 모은 곳. 원본의 출처와
라이선스를 각 컴포넌트 페이지에 표기합니다.

- 사이트: https://ui.dongwook.kim
- 레지스트리: `https://ui.dongwook.kim/r/{name}.json`
- 네임스페이스: `@kidow`

## 쓰는 법

### 1. 레지스트리 등록 (프로젝트당 한 번)

```bash
npx shadcn@latest registry add "@kidow=https://ui.dongwook.kim/r/{name}.json"
```

`components.json` 에 아래가 추가됩니다.

```json
{
  "registries": {
    "@kidow": "https://ui.dongwook.kim/r/{name}.json"
  }
}
```

### 2. 설치

```bash
npx shadcn@latest add @kidow/<name>
```

### 3. MCP 연결

shadcn CLI에 MCP 서버가 내장돼 있습니다. 등록된 레지스트리를 그대로 검색·설치합니다.

```bash
npx shadcn@latest mcp init
```

### 4. 에이전트에게 알려주기

**이 단계가 빠지면 실제로는 거의 안 쓰입니다.** MCP를 붙여둬도 에이전트가
`search_items_in_registries` 를 부를지 그냥 직접 코드를 짤지는 모델 판단이라,
"먼저 여기를 찾아본다"는 규칙을 명시해야 합니다. `AGENTS.md` 나 `CLAUDE.md` 에 넣으세요.

```markdown
## UI 컴포넌트

새 UI 컴포넌트가 필요하면 직접 만들기 전에 @kidow 레지스트리를 먼저 검색한다.
search_items_in_registries → view_items → get_add_command 순서로 쓴다.
```

이러면 "마퀴 하나 넣어줘" 같은 말에도 에이전트가 레지스트리를 먼저 뒤집니다.
규칙 없이 `@kidow 레지스트리에서 marquee 찾아줘` 처럼 매번 지목해도 동작은 합니다.

> 여러 레지스트리를 함께 등록하면 같은 키워드로 경쟁합니다. 검색은 `name`·`title`·
> `description` 에만 매칭되므로, 원하는 게 잘 안 잡히면 쿼리에 쓰임새 단어를 넣어보세요.

## 요구 스택

React 19 · Tailwind CSS v4 · shadcn CLI 4.x (`radix-nova` 프리셋 기준)

## 저작권 / 출처

각 컴포넌트의 저작권은 원저자에게 있습니다. 원본 문서 링크, 저자, SPDX 라이선스,
가져온 날짜를 `registry.json` 의 `meta` 에 기록하고 상세 페이지에 표기합니다.
표기 누락이나 게재 원치 않는 항목이 있으면 이슈로 알려주세요. 바로 내립니다.

## 개발

```bash
pnpm dev              # 사이트
pnpm build            # shadcn build (public/r/*.json) + next build
pnpm registry:build   # 레지스트리 JSON만 다시 생성
```

컴포넌트 추가는 Claude Code에서 원본 문서 URL을 주면 됩니다.

```
https://magicui.design/docs/components/marquee 추가해줘
```

`add-component` 스킬이 발동해 수집 → 정규화 → 레지스트리 등록 → 데모 → 빌드 검증까지
처리합니다. `/add-component` 로 직접 호출할 수도 있습니다. 절차는
[.claude/skills/add-component/](.claude/skills/add-component/SKILL.md) 에 정의돼 있습니다.

### 구조

```
registry.json              레지스트리 정의 (출처 meta 포함, 단일 진실 원천)
registry/ui/<name>/        컴포넌트 소스 (배포 대상)
components/demos/          사이트 전용 데모 (배포 안 함)
app/page.tsx               카테고리별 목록
app/c/[name]/page.tsx      상세 (프리뷰 + 우측 출처 사이드바)
public/r/*.json            빌드 산출물
```
