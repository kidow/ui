'use client'

import { useState } from 'react'
import { Home, Layers, Search, Settings } from 'lucide-react'

import CircularNavigation from '@/components/kidow/circular-navigation'

const navItems = [
  { name: '홈', icon: Home, href: '#' },
  { name: '컴포넌트', icon: Layers, href: '#' },
  { name: '검색', icon: Search, href: '#' },
  { name: '설정', icon: Settings, href: '#' },
]

export default function CircularNavigationDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-64 w-full items-center justify-center">
      <CircularNavigation
        navItems={navItems}
        isOpen={isOpen}
        toggleMenu={() => setIsOpen((prev) => !prev)}
      />
    </div>
  )
}
