# 레지스트리 통째로 수집하기

컴포넌트 하나가 아니라 레지스트리 전체를 담을 때의 절차. 실제로 12개 출처에서
458개를 이렇게 모았다.

## 1. 인덱스부터 찾는다

```
<base>/r/registry.json
```

없으면 순서대로 시도한다.

- `<base>/registry.json`
- 저장소의 `registry.json` (raw.githubusercontent.com)
- 문서 페이지에서 이름 목록을 긁고 `<base>/r/<name>.json` 을 하나씩
- 그것도 없으면 저장소의 소스 디렉토리에서 직접 (Kaif UI 가 이 경우였다)

인덱스 형태가 표준이 아닐 수 있다. VengeanceUI 는 `{items:[...]}` 가 아니라 배열이었다.

## 2. 담기 전에 전수 점검한다

아이템을 하나씩 받아 아래를 집계한다. 이 표가 있어야 사용자에게 판단을 물을 수 있다.

| 항목 | 왜 보는가 |
|---|---|
| 이름 충돌 | 우리 `registry.json` 과 shadcn 예약어 양쪽 |
| 파일 수·경로 | 다중 파일이면 디렉토리 구조를 유지해야 한다 |
| `target` | `app/...` 이면 컴포넌트가 아니라 **페이지 템플릿**이다(mapcn) |
| `dependencies` | 부실한 경우가 많다. import 에서 다시 뽑는다 |
| `registryDependencies` | 자기 레지스트리 참조는 `@kidow/` 로 바꿔야 한다 |
| 로컬 import 경로 | `@/registry/...`, `@/components/<their-ns>/...` 를 재작성해야 한다 |
| 외부 import | R3F·API 키 의존 같은 거절 사유를 여기서 발견한다 |
| `description` 유무 | 없으면 우리가 전부 써야 한다. 비용이 크다 |
| 데모(`registry:example`) 유무 | 있으면 그대로 쓰고, 없으면 전부 직접 짜야 한다 |

## 3. upstream 결함을 전제하고 검증한다

실제로 겪은 것들이다. 그대로 담으면 설치가 깨진다.

- **소스가 잘려 있다** — VengeanceUI `mega-menu-navbar` 는 620번째 줄이 중간에 끊겨
  파싱되지 않았다. 원본 JSON 을 다시 받아 우리 전송 문제가 아님을 확인하고 제외했다.
- **없는 의존성을 참조한다** — wigggle-ui 의 미디어 위젯 8개가 `audio-player` 를
  요구하는데 그 아이템이 레지스트리에 없다(404). 소스에서도 import 한다. 제외했다.
- **인터페이스에 같은 프로퍼티가 두 번** — Componentry `image-scatter`.
- **`dependencies` 가 비어 있거나 틀리다** — 항상 import 문과 대조한다.
- **버전을 뗀 채 선언한다** — 원본이 `cobe@^0.6.4` 처럼 고정했으면 그대로 옮긴다.
  최신을 깔면 API 가 안 맞는다(cobe, opentype.js 에서 실제로 겪었다).

## 4. 일괄 처리는 스크립트로, 판단은 손으로

- 스크립트가 할 일: fetch, 파일 쓰기, import 재작성, `dependencies` 추론, 초안 항목 생성
- 사람이 할 일: 이름 충돌 처리, 카테고리, `description`, 제외 판단

`description` 은 검색의 유일한 표면이라 자동 생성하지 않는다. 다만 wigggle-ui 위젯처럼
`clock-sm-01`~`13` 이 같은 종류의 변형이면 그룹 단위 틀을 만들어 쓴다.

## 5. 검증은 세 단계

```bash
pnpm exec tsc --noEmit    # 반드시 프로젝트 디렉토리에서 — 다른 곳에서 돌리면 0건이 나온다
pnpm build                # 프리렌더까지 확인
```

그 다음 브라우저로 목록과 상세를 눈으로 본다. 타입이 통과해도 런타임에서 깨지는 것들이
있다.

- `TooltipProvider` 없이 `Tooltip` 을 쓰면 프리렌더가 실패한다 → 데모에서 감싼다
- `Math.random()` 을 쓰면 hydration 이 어긋난다 → 데모를 `ssr: false` 로 감싼다
- 훅을 쓰는데 `'use client'` 가 없으면 서버 컴포넌트로 빌드돼 실패한다 → 소스에 붙인다
- `position: fixed` 에 큰 z-index, 전역 커서·스크롤 조작은 목록 전체를 망가뜨린다
  → `lib/demo-flags.ts` 에 등록해 목록에서만 렌더를 건너뛴다

## 6. 규모가 크면 먼저 묻는다

수집 개수가 수십 개를 넘거나, 중복이 많거나, 일부를 제외해야 하면 사용자에게 범위를
확인한다. "전부 / 선별 / 링크만" 중 무엇인지에 따라 작업량이 몇 배 차이 난다.
