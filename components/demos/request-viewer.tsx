import { RequestViewer } from '@/components/kidow/request-viewer/request-viewer'

const request = {
  method: 'GET',
  url: 'https://ui.dongwook.kim/r/marquee.json',
  status: 200,
  statusText: 'OK',
}

export default function RequestViewerDemo() {
  return <RequestViewer request={request} className="w-full max-w-md" />
}
