'use client'

import { Table } from '@/components/kidow/table-async/components/motion/table/index'

const DATA = [
  { name: 'marquee', source: 'MagicUI', license: 'MIT' },
  { name: 'kanban', source: 'Kibo UI', license: 'MIT' },
  { name: 'bar-chart', source: 'Spectrum UI', license: 'Apache-2.0' },
]

export default function TableAsyncDemo() {
  return (
    <div className="w-full max-w-lg p-4">
      <Table
        data={DATA}
        columns={[
          { key: 'name', header: '이름', sortable: true },
          { key: 'source', header: '출처' },
          { key: 'license', header: '라이선스' },
        ]}
      />
    </div>
  )
}
