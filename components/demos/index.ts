import type { ComponentType } from 'react'

import MarqueeDemo from './marquee'

/**
 * 사이트 전용 데모. 레지스트리(/r/*.json)에는 포함되지 않는다.
 * `add-component` 스킬이 컴포넌트를 추가할 때 여기에 한 줄씩 등록한다.
 */
export const demos: Record<string, ComponentType> = {
  marquee: MarqueeDemo,
}
