# 수집 기록

빈 저장소에서 시작해 40곳의 컴포넌트 1,640개를 모으고, 출처와 라이선스를 함께 기록해
[ui.dongwook.kim](https://ui.dongwook.kim) 에 배포하기까지의 기록.

| | |
| --- | --- |
| 컴포넌트 | 1,640 |
| 출처 | 40 |
| 분류 | 14 |
| 데모 | 1,587 (나머지 53개는 단독 렌더 불가한 부품) |
| 제외 기록 | 32 |
| 커밋 | 65 |

---

## 담은 것

라이선스가 재배포를 허용하는 곳만 담았다. MIT 1,563 · Apache-2.0 73 ·
MIT(저작권 표시 유지) 4. Apache-2.0 은 고지 의무가 있어 파일마다 저작권·변경 사항
헤더를 넣었다.

| 출처 | 개수 | 라이선스 |
| --- | ---: | --- |
| Animata | 183 | MIT |
| Lightswind UI | 147 | MIT |
| Amicro | 121 | MIT |
| wigggle-ui | 93 | MIT |
| AI Canvas | 78 | MIT |
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
| Voxlet UI | 12 | MIT |
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

32곳을 사유와 재검토 조건까지 [`lib/related-registries.ts`](../lib/related-registries.ts) 에
남기고 홈의 "여기에 없는 것" 섹션에 표시한다. 별 개수와 품질은 판단 근거가 아니었다 —
React Bits 는 46,000개가 넘는 별을 받았지만 라이선스가 막았다.

### 라이선스가 재배포를 금지 (8)

MIT 라도 Commons Clause 가 붙어 "컴포넌트를 모아 다시 배포"하는 것을 금지하거나,
약관이 권리를 유보한다.

React Bits · Canvas UI · Sora Labs UI · Aceternity UI · ScrollX UI · ForgeUI · Skiper UI ·
Spy UI

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

40곳을 돌면서 같은 문제가 계속 나왔다. 다음 수집 때 먼저 확인할 것들.

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

- AI Canvas — `document.documentElement.classList.contains('dark')` 의 SSR 폴백을
  `true` 로 잡아 둔 파일이 섞여 있었다. 이 프로젝트는 다크 모드를 토글하는 코드가
  없어 그 클래스가 항상 없는데, 서버는 "다크"로 가정하고 클라이언트는 "라이트"로
  판정해 hydration 이 깨졌다. `sticker-wall`·`crypto-swap`·`mood-tracker` 3개에서
  발견해 폴백을 `false`/`'light'` 로 고쳤다.
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
| 인터랙션 | 288 | 폼·입력 | 108 |
| 텍스트 효과 | 229 | 버튼 | 106 |
| 레이아웃·목록 | 204 | 개발자 도구 | 57 |
| 미디어·데이터 | 179 | 마케팅 섹션 | 26 |
| 위젯 | 155 | 디바이스 목업 | 14 |
| 배경·패턴 | 140 | 코드·터미널 | 11 |
| 카드·테두리 | 111 | 오디오·음성 | 12 |

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

## 출처 링크 유지보수

2026-09-12 에 `meta.sourceUrl` 1,562개를 전수 재확인했다. 처음 수집한 이후 두 주
남짓 지났을 뿐인데 링크 1,399개(고유 URL 기준) 중 **664개가 죽어 있었다** — 절반에
가깝다. 상류 사이트가 이 정도 속도로 바뀐다는 뜻이다.

### 왜 이렇게 많이 죽었나

병렬로 200개씩 찔러보니 도메인 전체가 404 로 보이는 경우가 많았다. 처음엔 사이트가
망한 줄 알았는데, 브라우저로 직접 열어보면 홈페이지는 멀쩡했다 — Vercel 배포가 짧은
시간에 몰린 요청을 봇으로 보고 캐시된 404 를 돌려준 것이었다. 그래서 검증을 세 단계로
나눴다.

1. 동시 20개로 전체를 훑어 의심 목록을 만든다
2. 도메인별로 하나씩, 요청 사이 0.5~1초를 두고 다시 찔러본다 (버스트가 원인이면 여기서
   사라진다)
3. 그래도 죽어 있으면 브라우저로 직접 열어 실제 사이트 개편인지 확인한다

이 과정에서 `loading-ui.com` 41개 전부가 가짜 경보였다 — 병렬 요청이 원인이었지,
실제로는 `/components/` 가 아니라 `/docs/components/` 로 옮겨간 것뿐이었다(진짜 원인은
따로 있었지만 처음엔 버스트 탓으로 오인할 뻔했다).

### 진짜로 죽은 것들 — 사이트 개편

거의 다 같은 패턴이다: 상류가 문서 사이트를 다시 짜면서 URL 구조를 바꿨다.

| 출처 | 무엇이 바뀌었나 |
| --- | --- |
| wigggle-ui | 개별 컴포넌트 문서를 없애고 카테고리 통합 페이지로(`/widgets/<category>`) |
| Spectrum UI | `/docs/components/<name>` → `/docs/<name>` 또는 `/charts/<name>`, 다수 컴포넌트 자체가 정리됨 |
| beui | 평면 구조 → `/components/<category>/<name>`, 여러 변형이 기반 컴포넌트 페이지로 통합 |
| Serenity UI | 사이트 전체 리디자인, 17개 중 9개만 남고 8개는 사라짐(1개는 이름도 바뀜: brand-section→brand-marquee) |
| animata.design | bento-grid·card 카테고리의 번호·이름 변형 다수를 정리해 42개가 통째로 사라짐 |
| ui-layouts.com | 54개 중 16개가 사라짐, www 서브도메인 자체가 죽고 베어 도메인만 살아있음 |
| eldoraui / jolyui / spell.sh / badtz-ui / systaliko-ui | `/docs/<name>` ↔ `/docs/components/<name>` 사이를 오가거나 카테고리 세그먼트가 붙음 |
| bklit.com | 차트 내부 부품(`chart-context`·`chart-series` 등)이 `/docs/utility/use-chart` 하나로 합쳐짐 |
| lightswind.com | PascalCase 로 남아있던 4개가 kebab-case 로 바뀜(`CinematicScroll`→`cinematic-scroll`) |
| Fancy Components | `/docs/*` 전체가 500 에러 — 브라우저로 직접 열어도 재현된다. 사이트 쪽 장애로 보이며 57개를 임시로 홈페이지로 돌려놨다. 복구되면 되돌릴 것 |

각 사이트의 `sitemap.xml`·`llms.txt`를 받아 현재 살아있는 경로와 이름을 정규화해
대조하는 방식으로 새 링크를 찾았다. 이름이 통째로 사라져 대응할 페이지가 없는
항목은 홈페이지로 돌려뒀다 — 총 196개.

### AI Canvas — open-core 수집

`aicanvas-me/aicanvas` 는 오픈소스 MIT 레지스트리와 유료 프리미엄이 분리된
"open-core" 구조다. 86개 중 80개가 무료(MIT), 6개는 프리미엄(`premium-license`
페이지에 별도 조항 — 공개 MIT 레지스트리와 무관하다고 명시). 익명으로 shadcn
레지스트리 JSON(`/r/<name>.json`)을 받으면 계정 없이는 플레이스홀더가 오지만,
페이지의 `/api/component-code?slug=<name>` 엔드포인트는 계정 없이도 실제 소스를
돌려준다 — 이 경로로 80개를 받았다. 그중 2개(`meet-the-crew`, `traveldeck`)는
사이트 자체에서도 이 엔드포인트가 404 를 내 제외했다. 이름 충돌 4개
(`diamond-grid`·`glitch-button`·`magnetic-dots`·`glass-dock`)는 `-aicanvas`
접미사를 붙였다.

### 가짜 경보로 확인하고 그대로 둔 것

`motion-primitives.com`·`www.cult-ui.com`·`ui.elevenlabs.io` 세 곳은 curl 이 몇
번을 다시 찔러도 계속 429 를 준다. 브라우저로 직접 열면 세 곳 다 페이지가 정상
렌더된다 — Cloudflare 급 봇 차단이 curl 트래픽만 막는 것이지 링크가 죽은 게
아니다. 98개를 그대로 뒀다.

### 검증

`git show`(원본)와 지금 상태를 대조해 원래 죽어 있던 664개가 전부 다른 URL로
바뀌었는지, 그리고 바뀐 URL 이 실제로 200 을 주는지 두 번 확인했다. 최종
1,271개 고유 URL 중 200 이 1,173개, 위 세 도메인의 429 가 98개, 그 외 0개.

---

## 남은 것

동작에는 지장이 없지만 다듬을 여지가 있는 것들.

- **데모 밀도** — 자동 생성한 데모 상당수가 `<Component />` 한 줄이라 상류 문서만큼
  컴포넌트를 보여주지 못한다.
- **타입 검사 우회** — 상류가 `@ts-nocheck` 를 붙여 둔 파일이 몇 개 섞여 있다.
- **재검토 대상** — 제외한 32곳 중 다수는 라이선스가 바뀌면 담을 수 있다. 조건을
  항목마다 적어 뒀다.
- **Fancy Components 57개** — 상류 `/docs/*` 가 500 에러 중이라 임시로 홈페이지
  링크로 돌려놨다. 사이트가 복구되면 원래 있던 `/docs/components/<name>` 경로로
  되돌려야 한다.
