# 정규화 규칙

목표: **소비자 프로젝트에 붙여도 바로 컴파일되는 최소 상태.** 그 이상은 손대지 않는다.

## 고치는 것

| 항목 | 규칙 |
|---|---|
| import alias | `@/lib/utils`, `@/components/ui/*` 로 맞춘다. 원본이 `~/`, `src/` 등을 쓰면 교체. |
| Tailwind 버전 | v3 문법이면 v4로. `@layer` 래핑 제거, `theme(colors.x)` → `var(--color-x)`, config 의존 유틸은 CSS 변수로. arbitrary value는 그대로 둔다. |
| 클라이언트 경계 | 훅·이벤트 핸들러·브라우저 API를 쓰면 최상단에 `'use client'`. |
| 파일명 | kebab-case. `registry/kidow/<name>.tsx`. |
| 로컬 유틸 | 원본이 자체 `cn` 을 파일 안에 정의했으면 `@/lib/utils` import로 교체. |
| 컴포넌트 간 참조 | 원본이 자기 레지스트리 경로(`@/registry/magicui/x`)로 형제 컴포넌트를 부르면 `@/components/kidow/x` 로 바꾼다. 이 경로는 tsconfig 별칭 덕에 이 사이트에서도, 설치된 프로젝트에서도 똑같이 동작한다. |
| 색 토큰 | 원본이 shadcn 토큰을 안 쓰면 아래 매핑표대로 치환한다. |

## 색 토큰 매핑

shadcn 레지스트리가 아닌 원본(21st.dev, 블로그 코드, Tailwind 스니펫 등)은 색을 하드코딩한다.
그대로 두면 설치한 프로젝트에서 다크모드·테마가 안 먹으므로 **여기만은 클래스 문자열을 고친다.**

| 원본 | 치환 |
|---|---|
| `bg-white`, `bg-gray-950`, `bg-black` (페이지/카드 바탕) | `bg-background` |
| `bg-gray-50`, `bg-gray-100`, `bg-gray-900` (은은한 면) | `bg-muted` |
| `text-black`, `text-white`, `text-gray-900` (본문) | `text-foreground` |
| `text-gray-500`, `text-gray-400` (보조 텍스트) | `text-muted-foreground` |
| `border-gray-200`, `border-gray-800` | `border` (색 지정 없이) |
| 카드 바탕 | `bg-card` + `text-card-foreground` |
| 강조 버튼 바탕 | `bg-primary` + `text-primary-foreground` |
| `ring-blue-500` 등 포커스 링 | `ring-ring` |

치환하지 않는 것: **디자인 의도 자체인 색.** 브랜드 그라디언트, 무지개 테두리, 네온 글로우,
특정 색이 컴포넌트의 정체성인 경우(`rainbow-button` 의 무지개)는 원본 그대로 둔다.

애매하면 치환하지 말고 사용자에게 묻는다. 잘못 치환하면 원본과 다르게 보이는데,
그건 최소 정규화 원칙 위반이다.

## 건드리지 않는 것

- props 이름, 기본값, variant 체계, `cva` 구조
- 내부 로직, 애니메이션 파라미터
- 클래스 문자열 (위 색 토큰 매핑만 예외 — 레이아웃·간격·크기 클래스는 절대 안 건드림)
- 주석, 타입 이름
- 코드 스타일 (포매터 돌리지 않는다 — diff가 커져서 원본 대조가 불가능해진다)

리팩터링하고 싶어지면 하지 않는다. 원본과 대조 가능한 상태가 유지보수의 전부다.

## 애매할 때

- 원본이 여러 파일로 쪼개져 있으면 그 구조를 유지한다. 하나로 합치지 않는다.
- 원본이 shadcn/ui 기본 컴포넌트를 import하면 그대로 두고 `registryDependencies` 에 이름을 적는다.
- 원본이 자기 프레임워크의 다른 컴포넌트에 의존하면 → 그것도 추가할지 사용자에게 묻는다.
- TW4 변환이 확실하지 않으면 변환을 멈추고 사용자에게 어떤 부분이 애매한지 보고한다.
