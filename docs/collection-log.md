# 수집 기록

빈 저장소에서 시작해 39곳의 컴포넌트 1,562개를 모으고, 출처와 라이선스를 함께 기록해
[ui.dongwook.kim](https://ui.dongwook.kim) 에 배포하기까지의 기록.

| | |
| --- | --- |
| 컴포넌트 | 1,562 |
| 출처 | 39 |
| 분류 | 14 |
| 데모 | 1,509 (나머지 53개는 단독 렌더 불가한 부품) |
| 제외 기록 | 31 |
| 커밋 | 62 |

---

## 담은 것

라이선스가 재배포를 허용하는 곳만 담았다. MIT 1,485 · Apache-2.0 73 ·
MIT(저작권 표시 유지) 4. Apache-2.0 은 고지 의무가 있어 파일마다 저작권·변경 사항
헤더를 넣었다.

| 출처 | 개수 | 라이선스 |
| --- | ---: | --- |
| Animata | 183 | MIT |
| Lightswind UI | 147 | MIT |
| Amicro | 121 | MIT |
| wigggle-ui | 93 | MIT |
| MagicUI | 77 | MIT |
| VengeanceUI | 74 | MIT |
| Spectrum UI | 73 | Apache-2.0 |
| Cult UI | 71 | MIT |
| Componentry | 62 | MIT |
| Fancy Components | 57 | MIT |
| UI Layouts | 54 | MIT |
| beui | 50 | MIT |
| Loading UI | 41 | MIT |
| Satisium UI | 41 | MIT |
| KokonutUI | 38 | MIT |
| jal-co/ui | 36 | MIT |
| JolyUI | 35 | MIT |
| Spell UI | 33 | MIT |
| Eldora UI | 31 | MIT |
| Kibo UI | 27 | MIT |
| Beautiful UI | 25 | MIT |
| Badtz UI | 24 | MIT |
| Bklit UI | 24 | MIT |
| Systaliko UI | 23 | MIT |
| Motion Primitives | 19 | MIT |
| EvilCharts | 18 | MIT |
| Trophy UI | 17 | MIT |
| Serenity UI | 17 | MIT |
| Voxlet UI | 12 | MIT + 저작권 표시 유지 |
| Arise UI | 10 | MIT |
| ElevenLabs UI | 9 | MIT |
| Rare UI | 8 | MIT |
| Kaif UI | 4 | MIT + 저작권 표시 유지 |
| ui-x | 3 | MIT |
| Cascader for shadcn/ui | 1 | MIT |
| Coverflow | 1 | MIT |
| mapcn | 1 | MIT |
| shadcn Multi Select | 1 | MIT |
| shadcn-phone-input | 1 | MIT |

---

## 담지 않은 것

31곳을 사유와 재검토 조건까지 [`lib/related-registries.ts`](../lib/related-registries.ts) 에
남기고 홈의 "여기에 없는 것" 섹션에 표시한다. 별 개수와 품질은 판단 근거가 아니었다 —
React Bits 는 46,000개가 넘는 별을 받았지만 라이선스가 막았다.

### 라이선스가 재배포를 금지 (7)

MIT 라도 Commons Clause 가 붙어 "컴포넌트를 모아 다시 배포"하는 것을 금지하거나,
약관이 권리를 유보한다.

React Bits · Canvas UI · Sora Labs UI · Aceternity UI · ScrollX UI · ForgeUI · Skiper UI

### 라이선스를 확인할 수 없음 (5)

LICENSE 파일도, 라이선스 페이지도, 약관도 없다. 밝히지 않은 공개 코드는 모든 권리가
유보된다.

DevsLoka UI · Pixel Perfect · Klarden UI · Tripled UI · chartcn

### 프리미티브 런타임 충돌 (2)

담을 만한 것이 전부 `@base-ui/react` 의존이다. 이 프로젝트는 `radix-nova` 프리셋이라
런타임이 두 벌 공존하게 된다.

ReUI · ui-x(3개만 수집)

### 범위 밖 (17)

브라우저에 렌더되지 않거나(PDF·이메일·터미널·Vue), npm 패키지이거나, 컴포넌트가 아니라
도구·에셋·테마다.

Reka UI · PDFx · termcn · Torph · Liveline · NumberFlow · shieldcn · TanCN · dialectcn ·
flagcn · LocalMode · Groot Studio · blocks.so · HextaUI · shadcn-labs 계열 · terrae ·
Kaif UI(나머지)

---

## 되풀이해서 걸린 것

39곳을 돌면서 같은 문제가 계속 나왔다. 다음 수집 때 먼저 확인할 것들.

### 라이선스

항상 첫 관문. MIT 배지만 보고 넘어가면 안 된다 — Commons Clause 는 본문에 있다.
GitHub API 가 `NOASSERTION` 을 주면 반드시 전문을 읽는다. 파일명이 `LICENCE.md`(영국식)
이거나 `license.md` 라 API 조회가 실패하는 경우도 있었다.

### 타입 오염

`@react-three/fiber` 는 설치만 해도 전역 JSX 타입을 확장해, 그것을 import 하지 않는
파일의 폴리모픽 컴포넌트 타입까지 `never` 로 무너뜨린다. 이 이유로 40개 넘게 제외했다.
`three` 단독은 안전하다.

### 배포 경로

상류가 자기 사이트 기준으로 배포한다. 설치 경로가 아닌 저자의 소스 경로로
import 하거나(`@/registry/…`, `@repo/shadcn-ui/…`), 존재하지 않는 파일을 참조하거나(404),
사이트 전용 에셋(`@/public/…`, `@/components/icons`)에 기댄다.

### 런타임 이탈

- React 19 — `useRef()` 초기값 필수, 전역 `JSX` 네임스페이스 제거, `cloneElement` props 타입 축소
- recharts v3 — `TooltipProps` 에서 `payload`·`label` 제거, `AxisDomain` 시그니처 축소
- lucide — 브랜드 아이콘(`Github`·`Twitter`·`Instagram`·`Linkedin`·`Facebook`·`Youtube`) 삭제
- react-player v3 — `/lazy` 서브패스와 `url`·`color` prop 제거
- motion — `transition.type` 리터럴 좁힘, `useScroll` 의 `layoutEffect` 제거
- @tsparticles/react v4 — `initParticlesEngine` 제거

### 검색 표면

MCP 는 `name`·`title`·`description` **만** 훑는다. 카테고리와 출처는 잡히지 않고,
부분 문자열이 그대로 있어야 맞는다. 설명에 한국어와 영문 원어를 함께 넣고 쓰임새까지
적은 이유다.

### 빌드를 막은 것

- `'use client'` 가 파일 중간에 있거나 두 번 있으면 Turbopack 이 거부한다
- Tailwind v4 의 `@reference` 가 상류 프로젝트 경로를 가리킨다
- `Math.random()` 을 쓰는 데모는 hydration 이 깨진다
- matter-js 의 svg 바디는 `poly-decomp` 를 런타임에 요구한다

---

## 분류

| 분류 | 개수 | 분류 | 개수 |
| --- | ---: | --- | ---: |
| 인터랙션 | 283 | 폼·입력 | 101 |
| 텍스트 효과 | 218 | 버튼 | 98 |
| 레이아웃·목록 | 192 | 개발자 도구 | 57 |
| 미디어·데이터 | 175 | 마케팅 섹션 | 26 |
| 위젯 | 147 | 디바이스 목업 | 14 |
| 배경·패턴 | 126 | 코드·터미널 | 11 |
| 카드·테두리 | 104 | 오디오·음성 | 10 |

---

## 검증

배포된 레지스트리에 직접 질의해 확인했다. MCP 가 쓰는 것과 같은 경로다.

```bash
npx shadcn@latest search @kidow -q "로딩"
```

| 질의 | 결과 | 맨 위 항목 |
| --- | ---: | --- |
| 로딩 | 125 | `waveform-loader` |
| marquee | 23 | `marquee` |
| 게이미피케이션 | 17 | `achievement-grid` |
| 업적 | 5 | `achievement-grid` |
| 입력 중 | 4 | `typing-indicator` |
| 칸반 | 2 | `kanbanboard` |
| 생키 | 2 | `sankey-chart` |
| 단계구분도 | 1 | `choropleth-chart` |

`게이미피케이션` 은 처음에 0건이었다. Trophy UI 17개가 정확히 그 영역인데 설명에 상위
개념어가 없어 걸리지 않았다. 키워드를 넣고 다시 확인해 17건이 됐다.

`접근성` 도 0건이지만 이건 해당 컴포넌트가 실제로 없어서다. 없는 것을 있는 것처럼
만들지 않았다.

---

## 남은 것

동작에는 지장이 없지만 다듬을 여지가 있는 것들.

- **데모 밀도** — 자동 생성한 데모 상당수가 `<Component />` 한 줄이라 상류 문서만큼
  컴포넌트를 보여주지 못한다.
- **타입 검사 우회** — 상류가 `@ts-nocheck` 를 붙여 둔 파일이 몇 개 섞여 있다.
- **재검토 대상** — 제외한 31곳 중 다수는 라이선스가 바뀌면 담을 수 있다. 조건을
  항목마다 적어 뒀다.
