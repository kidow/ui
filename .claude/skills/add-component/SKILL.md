---
name: add-component
description: 다른 UI 프레임워크(MagicUI, Aceternity, OriginUI, Kibo 등)의 컴포넌트를 이 레지스트리에 추가한다. 사용자가 컴포넌트 문서 페이지 URL을 주면서 "추가해줘", "넣어줘", "가져와줘" 라고 하거나, URL만 던질 때 사용한다. 원본을 최소 정규화해 registry/ 에 넣고, 출처·라이선스 meta를 기록하고, 데모를 만들고, 빌드로 검증하는 전체 파이프라인.
---

# 컴포넌트 추가

입력: 원본 **문서 페이지 URL** 1개 (+ 선택적으로 카테고리).

아래를 순서대로 전부 수행한다. 판단이 필요한 지점(이름 충돌, 라이선스 불명, 정규화 애매)에서만 사용자에게 묻는다.

## 0. 받을 수 있는 것인지 판단

shadcn 레지스트리가 아니어도 된다. 기준은 **React + Tailwind로 이 사이트에서 렌더되는가**.
받는 것 / 안 받는 것 목록: [references/scope.md](references/scope.md)

Vue·Svelte, CSS-in-JS 프레임워크 의존, 라이선스 불명, 유료 라이선스는 추가하지 않는다.

## 1. 원본 수집

1. 문서 URL을 fetch.
2. 페이지에서 `npx shadcn add https://.../r/<name>.json` 형태의 **레지스트리 JSON URL**을 찾는다.
   - 있으면 그 JSON을 받아 `files`, `dependencies`, `registryDependencies`, `cssVars` 를 파악한다. 가장 신뢰도 높은 경로.
   - 없으면 문서 페이지 코드 블록에서 소스를 추출한다. 파일 여러 개면 전부.
3. 라이선스·저자 확인 (보통 원본 GitHub의 LICENSE). 확인 불가하면 **사용자에게 묻고**, 답을 못 얻으면 중단한다.

## 2. 이름·카테고리

- flat kebab-case, **특징 기반** 이름 (`shimmer-button`, `bento-grid`). 출처는 이름에 넣지 않는다.
- shadcn/ui 기본 컴포넌트 이름(`button`, `card` 등)은 **예약어라 등록 금지**. 충돌 처리와 예약어 전체 목록: [references/naming.md](references/naming.md)
- 카테고리는 인자로 받은 값 우선, 없으면 `registry.json` 의 기존 카테고리에서 고르거나 새로 제안한다. 새 카테고리 생성 허용.

## 3. 정규화

**최소만 손댄다.** 규칙과 예시: [references/normalization.md](references/normalization.md)

저장 위치: `registry/ui/<name>/<name>.tsx`

## 4. registry.json 항목 추가

스키마와 필드별 규칙: [references/item-schema.md](references/item-schema.md)

**description은 MCP 검색의 유일한 표면이다.** 검색은 `name`·`title`·`description` 에만 매칭하고 `meta`·`categories`·소스는 보지 않는다. "무엇 + 언제 쓰는가 + 영문 일반명" 을 반드시 담는다: [references/description.md](references/description.md)

놓치기 쉬운 두 가지:
- `meta` 5개 필드(source·sourceUrl·author·license·retrievedAt) 전부 필수. 날짜는 `date +%F` 로 확인한다 — 기억으로 쓰지 않는다.
- `files[].target` 은 항상 `components/kidow/<파일명>`. 생략하면 소비자의 기존 컴포넌트와 충돌한다.

## 5. 데모 (사이트 전용)

- `components/demos/<name>.tsx` 에 최소 데모 작성. 원본 예제 참고하되 짧게.
- `components/demos/index.ts` 의 `demos` 맵에 등록.
- 데모는 `registry.json` 의 `files` 에 **넣지 않는다.**
- 아이템에 `cssVars`/`css` 가 있으면 **이 사이트의 `app/globals.css` 에도 같은 내용을 반영한다.** 소비자 프로젝트엔 CLI가 주입하지만 우리 사이트엔 아무도 안 넣어준다 — 안 하면 프리뷰가 움직이지 않는다. (`cssVars.theme` 의 `animate-x` → `@theme inline` 의 `--animate-x`)

## 6. 검증

```bash
pnpm build
pnpm dlx shadcn@latest add ./public/r/<name>.json --dry-run
```

- `pnpm build`: `public/r/<name>.json` 생성 + `next build` 통과.
- `--dry-run`: 파일이 `components/kidow/<name>.tsx` 로 가는지, CSS 변수가 주입되는지 확인. 기존 파일을 덮어쓴다고 나오면 이름·target을 다시 잡는다.
- 브라우저로 `/c/<name>` 을 열어 Preview·Code 탭을 눈으로 확인한다.
- **검색 확인**: 영문 일반명과 쓰임새 단어로 각각 `search` 를 돌려 잡히는지 본다 ([references/description.md](references/description.md) 의 자가 점검).

실패하면 고치고, 못 고치면 추가한 파일·항목을 되돌린 뒤 사용자에게 보고한다.

## 7. 보고

- 설치 명령: `npx shadcn@latest add @kidow/<name>`
- 상세 페이지: `/c/<name>`
- 출처·라이선스 한 줄 요약

커밋은 사용자가 요청할 때만.
