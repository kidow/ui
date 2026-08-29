/**
 * 검토했지만 담지 않기로 한 컴포넌트.
 *
 * "안 담았다"는 판단도 기록으로 남긴다. 나중에 같은 걸 다시 검토하거나,
 * 전제(라이브러리 버전 등)가 바뀌어 다시 담을 수 있는지 판단할 때 필요하다.
 */
export interface ExcludedComponent {
  name: string
  source: string
  sourceUrl: string
  reason: string
  /** 이 조건이 풀리면 다시 검토할 수 있다 */
  revisitWhen?: string
}

export const EXCLUDED_COMPONENTS: ExcludedComponent[] = [
  ...['dither-prism-hero', 'hero-geometric', 'image-ripple-effect', 'newsletter-bookshelf', 'spiral-3d-slider'].map(
    (name) => ({
      name,
      source: 'Componentry',
      sourceUrl: `https://componentry.dev/docs/components/${name}`,
      reason:
        '@react-three/fiber 의존. R3F 타입이 전역 JSX 네임스페이스를 확장해, 이 컴포넌트를 import 하지 않는 다른 컴포넌트(bento-grid, text-3d-flip, video-text)의 타입까지 never 로 붕괴시킨다. v8·v9 모두 동일.',
      revisitWhen:
        'R3F가 전역 확장 대신 모듈 스코프 JSX 타입을 쓰거나, React 19 타입과의 충돌이 해소되면',
    })
  ),
]
