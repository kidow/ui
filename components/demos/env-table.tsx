import { EnvTable } from '@/components/kidow/env-table/env-table'

const variables = [
  { key: 'NEXT_PUBLIC_SITE_URL', value: 'https://ui.dongwook.kim' },
  { key: 'REGISTRY_TOKEN', value: 'sk_live_9f2c8a1b7e', description: '비공개 레지스트리 접근용' },
]

export default function EnvTableDemo() {
  return <EnvTable variables={variables} className="w-full max-w-md" />
}
