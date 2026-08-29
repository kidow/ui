import { FileTree } from '@/components/kidow/file-tree-jalco/file-tree'

const tree = [
  {
    name: 'registry',
    children: [{ name: 'kidow', children: [{ name: 'marquee.tsx' }, { name: 'terminal.tsx' }] }],
  },
  { name: 'registry.json' },
]

export default function FileTreeJalcoDemo() {
  return <FileTree tree={tree} className="w-64" />
}
