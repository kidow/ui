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
    name: 'termcn',
    url: 'https://www.termcn.dev/docs/components',
    summary: 'CLI 앱을 위한 터미널 UI 컴포넌트. Ink와 OpenTUI 렌더러용 121종.',
    reason:
      '브라우저가 아니라 터미널에서 렌더된다. 이 사이트의 프리뷰로 검증할 수 없어 담지 않는다.',
  },
]
