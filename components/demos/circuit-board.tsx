import { CircuitBoard } from '@/components/kidow/circuit-board'

const nodes = [
  { id: 'client', x: 12, y: 50, label: 'Client', status: 'active' as const },
  { id: 'edge', x: 40, y: 22, label: 'Edge', status: 'processing' as const },
  { id: 'api', x: 40, y: 78, label: 'API', status: 'active' as const },
  { id: 'db', x: 76, y: 50, label: 'DB', status: 'inactive' as const },
]

const connections = [
  { from: 'client', to: 'edge', animated: true },
  { from: 'client', to: 'api', animated: true },
  { from: 'edge', to: 'db' },
  { from: 'api', to: 'db', bidirectional: true },
]

export default function CircuitBoardDemo() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg">
      <CircuitBoard nodes={nodes} connections={connections} />
    </div>
  )
}
