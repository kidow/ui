import { readFile } from 'node:fs/promises'
import path from 'node:path'

import registryJson from '@/registry.json'

export const REGISTRY_URL = 'https://ui.dongwook.kim'
export const NAMESPACE = '@kidow'

/** 출처 표기용 메타. 모든 아이템에 필수. */
export interface RegistryItemMeta {
  /** 원본 프레임워크/사이트 이름. 예: "MagicUI" */
  source: string
  /** 원본 문서 페이지 URL */
  sourceUrl: string
  /** 원저자 또는 조직 */
  author: string
  /** SPDX 식별자. 예: "MIT" */
  license: string
  /** 가져온 날짜 (YYYY-MM-DD) */
  retrievedAt: string
}

export interface RegistryFile {
  path: string
  type: string
  target?: string
}

export interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  categories?: string[]
  dependencies?: string[]
  registryDependencies?: string[]
  files: RegistryFile[]
  meta: RegistryItemMeta
}

export const registry = registryJson as unknown as {
  name: string
  homepage: string
  items: RegistryItem[]
}

export const items = registry.items

export function getItem(name: string) {
  return items.find((item) => item.name === name)
}

/** 카테고리별로 묶는다. 카테고리 없는 아이템은 "기타". */
export function groupByCategory(list: RegistryItem[] = items) {
  const groups = new Map<string, RegistryItem[]>()
  for (const item of list) {
    for (const category of item.categories?.length ? item.categories : ['기타']) {
      groups.set(category, [...(groups.get(category) ?? []), item])
    }
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b))
}

export function addCommand(name: string) {
  return `npx shadcn@latest add ${NAMESPACE}/${name}`
}

/**
 * 아이템 파일들의 실제 소스를 디스크에서 읽는다 (빌드 타임).
 * 경로는 registry/ 하위로 고정한다 — 그래야 번들러가 프로젝트 전체를 추적하지 않는다.
 */
export async function readItemSources(item: RegistryItem) {
  return Promise.all(
    item.files.map(async (file) => ({
      path: file.path,
      content: await readFile(
        path.join(process.cwd(), 'registry', file.path.replace(/^registry\//, '')),
        'utf8'
      ),
    }))
  )
}
