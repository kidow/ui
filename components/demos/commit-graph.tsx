import { CommitGraph } from '@/components/kidow/commit-graph/commit-graph'

const commits = [
  {
    hash: '99fa7ff',
    message: 'PDFx를 담지 않는 레지스트리에 추가',
    author: { name: 'kidow' },
    date: '2026-08-29',
    parents: ['c204545'],
    refs: ['main'],
  },
  {
    hash: 'c204545',
    message: '홈과 README에 MCP 연결 안내',
    author: { name: 'kidow' },
    date: '2026-08-29',
    parents: ['5a9a24b'],
  },
  {
    hash: '5a9a24b',
    message: 'Spell UI 컴포넌트 33개 수집',
    author: { name: 'kidow' },
    date: '2026-08-28',
    parents: [],
    tag: 'v0.3.0',
  },
]

export default function CommitGraphDemo() {
  return <CommitGraph commits={commits} className="w-full max-w-md" />
}
