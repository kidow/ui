<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 이 저장소는 shadcn 레지스트리다

컴포넌트 1,554개를 38곳에서 모아 `@kidow` 네임스페이스로 배포한다.
소스는 `registry/kidow/`, 목록은 `registry.json`, 배포는 https://ui.dongwook.kim 다.

## 새 컴포넌트를 만들기 전에 먼저 검색한다

이미 있는 것을 다시 만들지 않는다. 1,554개 중에 있을 확률이 높다.

```bash
npx shadcn@latest search @kidow -q "marquee"
npx shadcn@latest view @kidow/marquee
```

MCP 로는 `search_items_in_registries` → `view_items_in_registries` →
`get_add_command_for_items` 순서로 쓴다.

검색은 `name`·`title`·`description` 만 훑는다. 카테고리와 출처는 검색 표면이
아니다. 부분 문자열이 그대로 있어야 맞으므로 "로딩", "칸반", "생키",
"입력 중"처럼 실제로 쓸 말로 찾는다.

## 컴포넌트를 추가할 때

`add-component` 스킬을 쓴다(`.claude/skills/add-component/`). URL 하나를 받아
라이선스 확인 → 중복 검사 → 소스 정규화 → 데모 → 빌드까지 순서가 정해져 있다.
특히 다음 세 가지는 매번 걸린다.

- **라이선스가 먼저다.** MIT 라도 Commons Clause 가 붙어 재배포를 막는 곳이
  있다. 담지 않기로 한 곳은 `lib/related-registries.ts` 에 사유와 함께 남긴다.
- **`@react-three/fiber` 는 담지 않는다.** 전역 JSX 타입을 오염시켜 무관한
  컴포넌트의 타입까지 무너뜨린다. `three` 만 쓰는 것은 괜찮다.
- **Base UI 의존은 담지 않는다.** 이 프로젝트는 `radix-nova` 프리셋이라
  프리미티브 런타임이 두 벌 공존하게 된다.

## 검증

```bash
pnpm exec tsc --noEmit
```

```bash
pnpm build
```

`pnpm build` 는 `scripts/sync-demos.mjs`(데모 index 재생성) → `shadcn build`
(`public/r/*.json` 생성) → `scripts/sync-registry-css.mjs` → `next build` 순으로
돈다. 데모 파일만 만들고 index 를 손대지 않아도 스크립트가 맞춰 준다.
`components/demos/index.ts` 는 생성물이라 직접 고치지 않는다.

`tsc` 는 반드시 프로젝트 디렉터리에서 돌린다. 다른 곳에서 돌리면 오류가 없다고
잘못 보고한다.
