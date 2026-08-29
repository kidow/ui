import EmojiNav from '@/components/kidow/emoji-nav'

const navItems = [
  { label: '홈', href: '#', emogi: '/demo-1.svg', alt: '홈' },
  { label: '컴포넌트', href: '#', emogi: '/demo-2.svg', alt: '컴포넌트' },
  { label: '출처', href: '#', emogi: '/demo-3.svg', alt: '출처' },
]

export default function EmojiNavDemo() {
  return (
    <div className="relative flex min-h-64 w-full items-center justify-center">
      <EmojiNav navItems={navItems} />
    </div>
  )
}
