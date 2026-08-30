/**
 * 여기에 담지 않지만 알아둘 만한 레지스트리.
 *
 * 이 사이트는 React + Tailwind로 브라우저에서 렌더되는 컴포넌트만 담는다.
 * 그 기준에 걸리는 곳들은 복제하지 않고 링크로 안내한다.
 */
export interface RelatedRegistry {
  name: string
  url: string
  /** 무엇을 다루는 곳인가 */
  summary: string
  /** 왜 여기에 없는가 */
  reason: string
  /** 이 조건이 바뀌면 다시 검토할 수 있다 */
  revisitWhen?: string
}

export const RELATED_REGISTRIES: RelatedRegistry[] = [
  {
    name: 'DevsLoka UI',
    url: 'https://ui.devsloka.in/components',
    summary:
      'shadcn 레지스트리로 배포되는 컴포넌트 27종. morphing 카드·모달·내비와 온보딩 투어처럼 여기 없는 것들이 있다.',
    reason:
      '라이선스를 찾을 수 없다. 사이트 어디에도 명시가 없고 공개 저장소나 npm 패키지도 없어 소스가 /r/*.json 으로만 배포된다. 재배포해도 되는지 확인할 방법이 없다.',
    revisitWhen: '사이트나 저장소에 라이선스가 명시되면',
  },
  {
    name: 'ui-x',
    url: 'https://ui-x.junwen-k.dev',
    summary:
      'shadcn/ui 를 보완하는 컴포넌트 26종. 날짜·시간 입력 계열이 특히 촘촘하다. 이 중 3개(confirmer, description-list, time)는 담았다.',
    reason:
      '나머지 21개가 @base-ui/react 에 직·간접으로 의존한다. 이 프로젝트는 radix-nova 프리셋이라 Radix 를 쓰는데, 담으면 프리미티브 런타임이 두 벌 공존하게 된다. Base UI 프로젝트라면 원본에서 그대로 설치하는 편이 낫다.',
    revisitWhen: '이 레지스트리가 Base UI 가 아닌 구현도 제공하게 되면',
  },
  {
    name: 'Reka UI',
    url: 'https://reka-ui.com',
    summary:
      'Vue 3 를 위한 unstyled 접근성 프리미티브. Radix Vue 의 후신이고 shadcn/vue 의 기반이다.',
    reason:
      'Vue 컴포넌트라 React 인 이 사이트에서 프리뷰가 불가능하다. npm 패키지로 배포되는 점도 소스를 복사해 담는 우리 방식과 맞지 않는다. 애초에 스타일이 없는 프리미티브라 여기 모으는 완성 컴포넌트와는 층이 다르다.',
  },
  {
    name: 'Kaif UI',
    url: 'https://kaif-ui.vercel.app/components',
    summary:
      'Framer Motion 기반 컴포넌트 모음. 이 중 4개(circular-navigation, emoji-nav, loader-button, zoom-parallax)는 담았다.',
    reason:
      '나머지는 이미 가진 것과 겹친다 — floating-dock(dock 3종 보유), custom-cursor(2종), infinite-slider(마퀴 4종), scroll-velocity(2종), pendulum(2종), carousel(8종·예약어). shadcn 레지스트리가 없어 저장소에서 직접 가져와야 하는 점도 감안했다.',
  },
  {
    name: 'terrae',
    url: 'https://www.terrae.dev',
    summary:
      'Mapbox GL 위에 얹는 지도 레이어 41종. radar, choropleth, volcano 같은 기상·지형 효과를 props 로 다룬다.',
    reason:
      'mapbox-gl 의존이라 Mapbox 계정과 액세스 토큰이 있어야 동작한다. 여기 담은 것들은 설치하면 바로 보이는 컴포넌트인데 이건 전제가 다르고, 우리 사이트 프리뷰도 토큰 없이는 회색 화면이다. 41개 중 40개가 map 코어 하나에 묶여 있어 사실상 지도 패키지 한 벌이기도 하다.',
    revisitWhen: 'MapLibre 와 무료 타일만으로 동작하는 경로가 기본이 되면',
  },
  {
    name: 'Liveline',
    url: 'https://benji.org/liveline',
    summary:
      '캔버스 하나로 그리는 React 실시간 라인·캔들 차트. React 외 의존성이 없다.',
    reason:
      'Torph 와 같은 이유로 npm 패키지다. 게다가 npm 에는 빌드 산출물만 올라와 있어 복사해 담을 소스가 배포물에 없다. 실시간 차트가 필요하면 npm install liveline 이 정답이다.',
  },
  {
    name: 'Torph',
    url: 'https://torph.lochie.me/',
    summary: '의존성 없는 텍스트 모핑 컴포넌트. React·Svelte·Vue 를 함께 지원하는 npm 패키지.',
    reason:
      'npm 패키지라 배포 모델이 다르다. 소스를 복사해 담으면 저자가 버전으로 관리하는 것을 스냅샷으로 떠서 재배포하는 셈이고, 의존성만 걸어두는 래퍼는 npm i torph 와 다를 게 없다. 우리 컴포넌트가 이걸 의존하게 되면 그때 dependencies 로 들어온다.',
  },
  {
    name: 'Pixel Perfect',
    url: 'https://www.pixel-perfect.space/blocks',
    summary:
      'WebGL 셰이더 기반 이미지 효과와 인터랙션 블록 297개. React + Tailwind, shadcn 호환 레지스트리.',
    reason:
      '저장소에 LICENSE 파일이 없다. 라이선스를 밝히지 않은 공개 코드는 기본적으로 모든 권리가 유보되므로 재배포할 수 없다.',
    revisitWhen: '저장소에 라이선스가 명시되면',
  },
  {
    name: 'PDFx',
    url: 'https://pdfx.akashpise.dev/components',
    summary: 'PDF 문서를 만드는 컴포넌트 24종. @react-pdf/renderer 위에서 동작한다.',
    reason:
      '브라우저 DOM이 아니라 PDF 문서로 렌더된다. Tailwind를 쓰지 않고 shadcn 레지스트리도 아니며(자체 pdfx-cli), 라이선스 표기를 찾지 못했다.',
  },
  {
    name: 'Skiper UI',
    url: 'https://skiper-ui.com/components',
    summary: 'shadcn/ui 를 위한 "흔치 않은" 컴포넌트. 무료·유료(Pro)를 나눠 판다.',
    reason:
      'Aceternity UI 와 같은 약관 문구를 쓴다. "All intellectual property rights are reserved" 아래 Republish · Reproduce, duplicate or copy · Redistribute 를 모두 금지한다. 오픈소스 라이선스도 공개 저장소도 없다.',
    revisitWhen: '오픈소스 라이선스로 공개하면',
  },
  {
    name: 'ReUI',
    url: 'https://reui.io',
    summary:
      'MIT 로 공개된 레지스트리. 항목이 1,700개인데 1,621개가 페이지 블록(app-shell-1..21, auth-1..N 같은 번호 변형)이고 컴포넌트는 75개다.',
    reason:
      '컴포넌트 75개 중 28개가 @base-ui/react 에 의존한다. 그것도 autocomplete·data-grid·event-calendar·gantt·kanban·tree·sortable 처럼 이 레지스트리에 없어서 담을 만한 것들이 전부 그렇다. 이 프로젝트는 radix-nova 프리셋이라 담으면 프리미티브 런타임이 두 벌 공존한다. 나머지 블록 1,621개는 페이지 템플릿이라 컴포넌트 레지스트리의 범위 밖이다.',
    revisitWhen: 'Base UI 가 아닌 구현을 제공하거나, 이 프로젝트가 Base UI 로 옮겨가면',
  },
  {
    name: 'HextaUI',
    url: 'https://www.hextaui.com',
    summary: 'MIT 로 공개된 레지스트리, 139개.',
    reason:
      '139개 중 51개가 shadcn 기본 컴포넌트를 같은 이름으로 다시 만든 것이고(accordion·button·card…), 나머지 86개는 auth-login-form·billing-invoice-list·team-dashboard 처럼 화면 단위 블록이다. 컴포넌트로서 여기 없는 것은 사실상 없다.',
  },
  {
    name: 'blocks.so',
    url: 'https://blocks.so',
    summary: 'MIT 로 공개된 블록 모음 77개.',
    reason:
      '전부 ai-01, dialog-03, file-upload-02 같은 번호가 붙은 화면 블록이다. 컴포넌트가 아니라 섹션 조합이고, 이름만으로는 MCP 가 무엇인지 알 수 없어 검색 표면으로도 쓸 수 없다.',
  },
  {
    name: 'Aceternity UI',
    url: 'https://ui.aceternity.com/components',
    summary:
      'shadcn 레지스트리(/registry.json)로 배포되는 컴포넌트 111종과 블록 167종. 이 바닥에서 가장 널리 쓰이는 곳 중 하나이고, 스크롤 연출과 3D 카드 계열의 원조 격인 것들이 많다.',
    reason:
      '오픈소스 라이선스가 없다. 공개 저장소도 LICENSE 파일도 없고, 약관이 "All intellectual property rights are reserved" 아래 Republish · Reproduce, duplicate or copy · Redistribute 를 모두 금지한다. 무료 컴포넌트는 각자 프로젝트에 복사해 쓰라는 것이지 모아서 다시 배포하라는 것이 아니다.',
    revisitWhen: '오픈소스 라이선스로 공개하거나 개별 허락을 주면',
  },
  {
    name: 'ScrollX UI',
    url: 'https://scrollxui.dev/docs/components',
    summary:
      'shadcn 레지스트리(/registry/*.json)로 배포되는 컴포넌트 145종. 스크롤 인터랙션과 배경 효과가 두텁고 여기 없는 것들이 많다.',
    reason:
      'MIT 에 Commons Clause 제약이 붙어 있다. "컴포넌트 라이브러리·템플릿·UI 킷·패키지 제품의 일부로 재배포" 금지와 "ScrollX UI 와 경쟁하는 라이브러리 제작" 금지를 명시한다. 애플리케이션·SaaS 에 쓰는 것은 상업적 이용까지 허용하지만, 모아서 다시 배포하는 것은 정확히 금지 대상이다.',
    revisitWhen: '원저자에게 명시적 허락(라이선스가 예외로 인정하는 절차)을 받으면',
  },
  {
    name: 'ForgeUI',
    url: 'https://forgeui.in',
    summary:
      'shadcn 레지스트리로 배포되는 컴포넌트 24종. 라이브러리 없이 순수 WebGL 로 그리는 배경 7종(auralis, cloudscape, cosmicrift 등)과 Clerk 랜딩에서 따온 보안·인증 블록이 있다. 품질과 구현 방식은 여기 기준에 잘 맞는다 — motion/react 를 쓰고 three.js 에 의존하지 않는다.',
    reason:
      '라이선스가 재배포를 명시적으로 금지한다. 사용·수정은 허용하지만 "컴포넌트 모음(component collection)으로 재포장·재배포"와 "배포를 목적으로 하는 다른 저장소·플랫폼에 업로드"를 금지한다. 이 레지스트리가 하는 일이 정확히 그것이다.',
    revisitWhen: '원저자가 재배포를 허용하는 라이선스로 바꾸거나 개별 허락을 주면',
  },
  {
    name: 'termcn',
    url: 'https://www.termcn.dev/docs/components',
    summary: 'CLI 앱을 위한 터미널 UI 컴포넌트. Ink와 OpenTUI 렌더러용 121종.',
    reason:
      '브라우저가 아니라 터미널에서 렌더된다. 이 사이트의 프리뷰로 검증할 수 없어 담지 않는다.',
  },
]
