# kidow/ui

여러 shadcn 호환 UI 프레임워크의 컴포넌트를 한 레지스트리에 모은 곳. 원본의 출처와
라이선스를 각 컴포넌트 페이지에 표기합니다.

**컴포넌트 1,562개 · 출처 39곳 · 14개 분류**

- 사이트: https://ui.dongwook.kim
- 레지스트리: `https://ui.dongwook.kim/r/{name}.json`
- 네임스페이스: `@kidow`

라이선스는 MIT 1,485 · Apache-2.0 73 · MIT(저작권 표시 유지 조건) 4 입니다.
재배포를 허용하지 않는 곳은 담지 않습니다.

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

### 검색이 걸리는 방식

검색은 `name`·`title`·`description` **만** 훑습니다. 카테고리와 출처는 검색 표면이
아니고, 부분 문자열이 그대로 있어야 맞습니다. 그래서 설명에 한국어와 영문 원어를
함께 넣고 쓰임새까지 적어 뒀습니다.

```bash
npx shadcn@latest search @kidow -q "로딩"        # 125건
npx shadcn@latest search @kidow -q "호가"        # order-book
npx shadcn@latest search @kidow -q "단계구분도"  # choropleth-chart
```

여러 레지스트리를 함께 등록하면 같은 키워드로 경쟁합니다. 원하는 게 잘 안 잡히면
쿼리에 쓰임새 단어를 넣어 보세요.

## 분류

| 분류 | 개수 | 분류 | 개수 |
| --- | --- | --- | --- |
| 인터랙션 | 283 | 폼·입력 | 101 |
| 텍스트 효과 | 218 | 버튼 | 98 |
| 레이아웃·목록 | 192 | 개발자 도구 | 57 |
| 미디어·데이터 | 175 | 마케팅 섹션 | 26 |
| 위젯 | 147 | 디바이스 목업 | 14 |
| 배경·패턴 | 126 | 코드·터미널 | 11 |
| 카드·테두리 | 104 | 오디오·음성 | 10 |

## 담지 않는 것

- **shadcn 기본 컴포넌트 62개** — 다시 만들지 않고 공식 문서로 링크만 겁니다.
- **재배포를 막는 라이선스** — MIT 라도 Commons Clause 가 붙어 "컴포넌트를 모아
  다시 배포"하는 것을 금지하는 곳이 있습니다.
- **`@react-three/fiber` 의존** — 전역 JSX 타입을 오염시켜 무관한 컴포넌트의 타입까지
  무너뜨립니다. `three` 만 쓰는 것은 담습니다.
- **Base UI 의존** — 이 프로젝트는 `radix-nova` 프리셋이라 프리미티브 런타임이 두 벌
  공존하게 됩니다.
- **브라우저에 렌더되지 않는 것** — PDF·이메일·터미널 전용 컴포넌트.

검토했지만 담지 않은 31곳은 사유와 재검토 조건을 [lib/related-registries.ts](lib/related-registries.ts)
에 남기고 홈의 "여기에 없는 것" 섹션에 표시합니다.

## 수집 기록

39곳을 어떤 기준으로 담고 걸렀는지, 매번 걸린 문제가 무엇이었는지는
[docs/collection-log.md](docs/collection-log.md) 에 정리해 뒀습니다.

## 요구 스택

React 19 · Tailwind CSS v4 · shadcn CLI 4.x (`radix-nova` 프리셋 기준)

## 저작권 / 출처

각 컴포넌트의 저작권은 원저자에게 있습니다. 원본 문서 링크, 저자, SPDX 라이선스,
가져온 날짜를 `registry.json` 의 `meta` 에 기록하고 상세 페이지에 표기합니다.
표기 누락이나 게재 원치 않는 항목이 있으면 이슈로 알려주세요. 바로 내립니다.

## 개발

```bash
pnpm dev              # 사이트
pnpm build            # 데모 index 재생성 → shadcn build → CSS 동기화 → next build
pnpm registry:build   # 레지스트리 JSON만 다시 생성
pnpm demos:sync       # components/demos/index.ts 재생성
```

`pnpm build` 는 네 단계를 순서대로 돕니다. 데모 파일만 만들고 index 등록을 잊어도
`sync-demos.mjs` 가 맞춰 줍니다. `components/demos/index.ts` 는 생성물이라 직접
고치지 않습니다.

타입 검사는 반드시 프로젝트 디렉터리에서 돌립니다. 다른 곳에서 돌리면 오류가 없다고
잘못 보고합니다.

```bash
pnpm exec tsc --noEmit
```

### 컴포넌트 추가

Claude Code에서 원본 문서 URL을 주면 됩니다.

```
https://magicui.design/docs/components/marquee 추가해줘
```

`add-component` 스킬이 발동해 라이선스 확인 → 중복 검사 → 수집 → 정규화 →
레지스트리 등록 → 데모 → 빌드 검증까지 처리합니다. `/add-component` 로 직접 호출할
수도 있습니다. 절차는 [.claude/skills/add-component/](.claude/skills/add-component/SKILL.md)
에 정의돼 있습니다.

### 구조

```
registry.json              레지스트리 정의 (출처 meta 포함, 단일 진실 원천)
registry/kidow/<name>.tsx  컴포넌트 소스 (배포 대상)
components/demos/          사이트 전용 데모 (배포 안 함, index.ts 는 생성물)
lib/related-registries.ts  담지 않은 곳과 그 사유
lib/shadcn-base.ts         shadcn 기본 컴포넌트 목록 (중복 수집 방지)
lib/demo-flags.ts          목록에서 렌더하지 않을 데모, 단독 렌더 불가 부품
app/page.tsx               홈 (MCP 안내 · 분류 · 담지 않은 곳)
app/category/[slug]/       분류별 목록
app/c/[name]/page.tsx      상세 (프리뷰 + 우측 출처 사이드바)
app/search-index/route.ts  ⌘K 검색 색인 (정적 생성)
public/r/*.json            빌드 산출물
```

데모가 없는 항목이 53개 있습니다. 훅·유틸·차트 부품처럼 단독으로는 그릴 것이 없는
것들이고, 목록에서 "다른 컴포넌트가 함께 설치해 쓰는 부품입니다"로 표시됩니다.
