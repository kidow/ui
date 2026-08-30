/**
 * components/demos/*.tsx 를 스캔해 index.ts 를 다시 만든다.
 *
 * 데모 파일만 만들고 index.ts 등록을 잊으면 사이트에 "데모 없음"으로 뜨는데
 * 빌드는 통과하므로 눈치채기 어렵다. 손으로 관리하지 않는다.
 *
 * 사용: node scripts/sync-demos.mjs   (pnpm demos:sync)
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const DIR = path.join(ROOT, 'components/demos')

const names = fs
  .readdirSync(DIR)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => file.replace(/\.tsx$/, ''))
  .sort()

/**
 * 파일명 → 식별자.
 * 3d-carousel 처럼 숫자로 시작하는 이름이 있어 앞에 밑줄을 붙인다.
 * 자바스크립트 식별자는 숫자로 시작할 수 없다.
 */
const pascal = (name) => {
  const id = name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  return /^\d/.test(id) ? `_${id}` : id
}

const imports = names.map((name) => `import ${pascal(name)}Demo from './${name}'`).join('\n')
const entries = names.map((name) => `  '${name}': ${pascal(name)}Demo,`).join('\n')

const content = `import type { ComponentType } from 'react'

${imports}

/**
 * 사이트 전용 데모. 레지스트리(/r/*.json)에는 포함되지 않는다.
 * 이 파일은 scripts/sync-demos.mjs 가 생성한다 — 직접 고치지 말 것.
 */
export const demos: Record<string, ComponentType> = {
${entries}
}
`

fs.writeFileSync(path.join(DIR, 'index.ts'), content)

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'registry.json'), 'utf8'))
const registered = new Set(names)
const missing = registry.items.filter((item) => !registered.has(item.name)).map((item) => item.name)

console.log(`demos: ${names.length}개 등록`)
if (missing.length) console.log(`데모 없는 아이템 ${missing.length}개: ${missing.join(' ')}`)
