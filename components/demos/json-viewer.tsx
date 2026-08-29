import { JsonViewer } from '@/components/kidow/json-viewer/json-viewer'

const data = {
  name: 'marquee',
  categories: ['레이아웃·목록'],
  meta: { source: 'MagicUI', license: 'MIT' },
}

export default function JsonViewerDemo() {
  return <JsonViewer data={data} rootName="registry item" className="w-full max-w-md" />
}
