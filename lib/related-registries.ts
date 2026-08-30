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
