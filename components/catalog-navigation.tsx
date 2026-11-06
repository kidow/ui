'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Blocks, ChevronDown, FolderOpen, LayoutGrid, Search } from 'lucide-react'

type Category = { label: string; slug: string; count: number }

export function CatalogNavigation({ categories }: { categories: Category[] }) {
  const pathname = usePathname()
  const links = (
    <>
      <div className="catalog-nav-group">
        <Link href="/" className="catalog-nav-link" aria-current={pathname === '/' ? 'page' : undefined}>
          <LayoutGrid size={16} /> 둘러보기
        </Link>
        <Link href="/search" className="catalog-nav-link" aria-current={pathname === '/search' ? 'page' : undefined}>
          <Search size={16} /> 컴포넌트 검색
        </Link>
        <Link href="/#sources" className="catalog-nav-link">
          <FolderOpen size={16} /> 출처별 모아보기
        </Link>
      </div>
      <div className="catalog-nav-group">
        <p className="catalog-nav-label">카테고리</p>
        {categories.map(({ label, slug, count }) => (
          <Link key={slug} href={`/category/${slug}`} className="catalog-nav-link" aria-current={pathname === `/category/${slug}` ? 'page' : undefined}>
            <span className="catalog-category-dot" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate">{label}</span>
            <span className="catalog-nav-count">{count}</span>
          </Link>
        ))}
      </div>
    </>
  )

  const brand = <Link href="/" className="catalog-brand"><span className="catalog-brand-mark"><Blocks size={19} /></span><span>kidow<span className="font-normal text-muted-foreground"> / ui</span></span></Link>

  return (
    <>
      <aside className="catalog-sidebar">
        {brand}
        <nav aria-label="라이브러리 탐색" className="catalog-sidebar-scroll">{links}</nav>
        <div className="catalog-sidebar-footer">
          <span className="catalog-status-dot" aria-hidden="true" />
          <span>shadcn 호환 레지스트리</span>
          <a href="https://github.com/kidow/ui" target="_blank" rel="noreferrer" aria-label="GitHub 저장소 열기" className="ml-auto"><ArrowUpRight size={15} /></a>
        </div>
      </aside>
      <div className="catalog-mobile-bar">
        {brand}
        <details className="catalog-mobile-menu">
          <summary>탐색 <ChevronDown size={14} /></summary>
          <nav aria-label="모바일 라이브러리 탐색" onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) event.currentTarget.closest('details')?.removeAttribute('open')
          }}>{links}</nav>
        </details>
      </div>
    </>
  )
}
