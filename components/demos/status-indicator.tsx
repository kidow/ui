import { StatusIndicator } from '@/components/kidow/status-indicator/status-indicator'

export default function StatusIndicatorDemo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <StatusIndicator status="operational" />
      <StatusIndicator status="degraded" />
    </div>
  )
}
