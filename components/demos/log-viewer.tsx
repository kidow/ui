import { DEPLOY_LOG } from '@/components/kidow/log-viewer/lib/sample-logs'
import { LogViewerTerminal } from '@/components/kidow/log-viewer/log-viewer'

export default function LogViewerDemo() {
  return <LogViewerTerminal entries={DEPLOY_LOG} className="w-full max-w-md" />
}
