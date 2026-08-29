import FallbackAvatar from '@/components/kidow/fallback-avatar'

export default function FallbackAvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <FallbackAvatar name="kidow" />
      <FallbackAvatar name="지민" />
      <FallbackAvatar name="Alex" />
    </div>
  )
}
