import { LicenseBadge } from '@/components/kidow/license-badge/license-badge'

export default function LicenseBadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <LicenseBadge license="MIT" />
      <LicenseBadge license="Apache-2.0" />
    </div>
  )
}
