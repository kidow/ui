import type { Metadata } from 'next'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import { CopyCommand } from '@/components/copy-command'
import { SearchCommand } from '@/components/search-command'
import {
  NAMESPACE,
  REGISTRY_URL,
  categorySlug,
  groupByCategory,
} from '@/lib/registry'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(REGISTRY_URL),
  title: {
    default: 'kidow/ui — 여러 UI 프레임워크를 한 곳에',
    template: '%s — kidow/ui',
  },
  description:
    '여러 shadcn 호환 UI 프레임워크의 컴포넌트를 한 레지스트리에 모았습니다. 출처와 라이선스를 함께 표기합니다.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const categories = groupByCategory().map(([label, list]) => ({
    label,
    slug: categorySlug(label),
    count: list.length,
  }))

  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-6 py-4">
            <Link href="/" className="font-heading text-lg font-semibold">
              kidow/ui
            </Link>
            <p className="text-muted-foreground hidden text-sm sm:block">
              여러 UI 프레임워크를 한 곳에 · 출처 표기
            </p>
            <div className="ml-auto flex items-center gap-2">
              <SearchCommand categories={categories} />
              <CopyCommand
                command={`npx shadcn@latest registry add "${NAMESPACE}=${REGISTRY_URL}/r/{name}.json"`}
                label="MCP · 레지스트리 등록"
              />
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
          {children}
        </main>
        <footer className="text-muted-foreground border-t px-6 py-6 text-center text-sm">
          모든 컴포넌트의 저작권은 각 원저자에게 있습니다. 각 상세 페이지에 출처와
          라이선스를 표기합니다.
        </footer>
      </body>
    </html>
  )
}
