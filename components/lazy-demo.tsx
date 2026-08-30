'use client'

import { useEffect, useRef, useState } from 'react'

import { demos } from '@/components/demos'

/**
 * 화면에 들어온 카드의 데모만 마운트한다.
 *
 * 카테고리 페이지는 카드가 90개까지 가는데, 셰이더 데모를 한꺼번에 띄우면
 * 브라우저 WebGL 컨텍스트 상한(크롬 ~16개)에 걸려 "Shader compile error: null"
 * 이 쏟아진다. 벗어나면 언마운트해 컨텍스트를 돌려준다.
 *
 * 클라이언트에서만 그리므로 motion 데모의 hydration 불일치도 함께 사라진다.
 */
export function LazyDemo({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const Demo = demos[name]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '100px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex h-52 w-full items-center justify-center overflow-hidden"
    >
      {visible && Demo ? (
        <div className="flex w-full origin-center scale-[0.6] items-center justify-center">
          <Demo />
        </div>
      ) : null}
    </div>
  )
}
