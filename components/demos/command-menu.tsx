import { CommandMenu } from '@/components/kidow/command-menu'

const groups = [
  {
    title: '이동',
    items: [
      { id: 'home', title: '홈' },
      { id: 'components', title: '컴포넌트 목록' },
    ],
  },
  {
    title: '작업',
    items: [
      { id: 'copy', title: '설치 명령 복사' },
      { id: 'source', title: '원본 문서 열기' },
    ],
  },
]

export default function CommandMenuDemo() {
  return <CommandMenu groups={groups} brandName="kidow/ui" />
}
