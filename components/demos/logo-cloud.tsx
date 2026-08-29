import { LogoCloud } from '@/components/kidow/logo-cloud/logo-cloud'

export default function LogoCloudDemo() {
  return (
    <LogoCloud title="이런 곳에서 모았습니다" className="w-full max-w-md">
      {['MagicUI', 'Componentry', 'Spell UI', 'jal-co/ui'].map((name) => (
        <span key={name} className="text-sm font-medium">
          {name}
        </span>
      ))}
    </LogoCloud>
  )
}
