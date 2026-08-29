import { ApiRefTable } from '@/components/kidow/api-ref-table/api-ref-table'

const props = [
  { name: 'reverse', type: 'boolean', description: '흐르는 방향을 뒤집습니다.' },
  { name: 'pauseOnHover', type: 'boolean', description: 'hover 시 정지합니다.' },
  { name: 'repeat', type: 'number', required: true, description: '반복 횟수.' },
]

export default function ApiRefTableDemo() {
  return <ApiRefTable title="Marquee" props={props} />
}
