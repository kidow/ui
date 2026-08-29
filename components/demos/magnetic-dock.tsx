import {
  DockIconFolder,
  DockIconHome,
  DockIconMail,
  DockIconSearch,
  DockIconSettings,
  MagneticDock,
} from '@/components/kidow/magnetic-dock'

const items = [
  { id: 'home', label: 'Home', icon: <DockIconHome /> },
  { id: 'search', label: 'Search', icon: <DockIconSearch /> },
  { id: 'files', label: 'Files', icon: <DockIconFolder /> },
  { id: 'mail', label: 'Mail', icon: <DockIconMail /> },
  { id: 'settings', label: 'Settings', icon: <DockIconSettings /> },
]

export default function MagneticDockDemo() {
  return <MagneticDock items={items} />
}
