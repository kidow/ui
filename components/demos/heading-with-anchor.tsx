'use client'

import { H2, H3, P } from '@/components/kidow/heading-with-anchor'

export default function HeadingWithAnchorDemo() {
  return (
    <div className="w-full max-w-md p-4">
      <H2>레지스트리 등록</H2>
      <P>제목에 마우스를 올리면 앵커 링크가 나타납니다.</P>
      <H3>MCP 연결</H3>
      <P>문서 사이트의 목차와 함께 쓴다.</P>
    </div>
  )
}
