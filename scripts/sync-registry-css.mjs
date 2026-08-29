/**
 * registry.json 의 cssVars/css 를 app/globals.css 의 생성 블록으로 옮긴다.
 *
 * 소비자 프로젝트에는 shadcn CLI 가 설치할 때 주입해주지만, 이 사이트에는
 * 아무도 넣어주지 않는다. 이걸 돌리지 않으면 프리뷰에서 애니메이션이 죽는다.
 *
 * 사용: node scripts/sync-registry-css.mjs   (pnpm build 가 자동으로 실행)
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const START = '/* --- registry:start --- 자동 생성. registry.json 의 cssVars/css 반영 --- */'
const END = '/* --- registry:end --- */'

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'registry.json'), 'utf8'))

const themeLines = []
const cssBlocks = []

const render = (obj, indent) =>
  Object.entries(obj)
    .map(([key, value]) =>
      typeof value === 'object'
        ? `${indent}${key} {\n${render(value, indent + '  ')}\n${indent}}`
        : `${indent}${key}: ${value};`
    )
    .join('\n')

for (const item of registry.items) {
  for (const [key, value] of Object.entries(item.cssVars?.theme ?? {})) {
    themeLines.push(`  --${key}: ${value};`)
  }
  for (const [selector, body] of Object.entries(item.css ?? {})) {
    cssBlocks.push(`${selector} {\n${render(body, '  ')}\n}`)
  }
}

const generated = [
  START,
  '',
  '@theme inline {',
  [...new Set(themeLines)].join('\n'),
  '}',
  '',
  [...new Set(cssBlocks)].join('\n\n'),
  '',
  END,
].join('\n')

const cssPath = path.join(ROOT, 'app/globals.css')
const css = fs.readFileSync(cssPath, 'utf8')
const start = css.indexOf(START)

if (start === -1) {
  fs.writeFileSync(cssPath, `${css.trimEnd()}\n\n${generated}\n`)
} else {
  const end = css.indexOf(END)
  fs.writeFileSync(cssPath, css.slice(0, start) + generated + css.slice(end + END.length))
}

console.log(
  `synced: ${new Set(themeLines).size} theme vars, ${new Set(cssBlocks).size} css blocks`
)
