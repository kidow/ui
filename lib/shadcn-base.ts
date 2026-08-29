/**
 * shadcn/ui 공식 기본 컴포넌트.
 *
 * 이 레지스트리는 기본 컴포넌트를 복제하지 않는다 — 사이트에 링크만 걸고,
 * 설치·검색은 CLI에 내장된 @shadcn 네임스페이스가 처리한다.
 * 우리 아이템은 `registryDependencies` 에 이름만 적어 참조한다.
 *
 * 갱신: pnpm dlx shadcn@latest search @shadcn -t ui -l 200 --json
 */
export const SHADCN_BASE_COMPONENTS = [
  'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'attachment', 'avatar',
  'badge', 'breadcrumb', 'bubble', 'button', 'button-group', 'calendar', 'card',
  'carousel', 'chart', 'checkbox', 'collapsible', 'combobox', 'command',
  'context-menu', 'dialog', 'direction', 'drawer', 'dropdown-menu', 'empty',
  'field', 'form', 'hover-card', 'input', 'input-group', 'input-otp', 'item',
  'kbd', 'label', 'marker', 'menubar', 'message', 'message-scroller',
  'native-select', 'navigation-menu', 'pagination', 'popover', 'progress',
  'questionnaire', 'radio-group', 'resizable', 'scroll-area', 'select',
  'separator', 'sheet', 'sidebar', 'skeleton', 'slider', 'sonner', 'spinner',
  'switch', 'table', 'tabs', 'textarea', 'toggle', 'toggle-group', 'tooltip',
] as const

const BASE_SET: ReadonlySet<string> = new Set(SHADCN_BASE_COMPONENTS)

export function isShadcnBase(name: string) {
  return BASE_SET.has(name)
}

/**
 * 공식 문서 URL. 경로에 base(radix/base/aria)가 들어간다.
 * 이 사이트는 radix 기반이므로 radix 문서로 보낸다.
 */
export function shadcnDocUrl(name: string) {
  return `https://ui.shadcn.com/docs/components/radix/${name}`
}
