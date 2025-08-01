import { Menu, Bell, Search } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import AvatarMenu from './AvatarMenu'

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="h-16 px-6 sticky top-0 z-20 border-b shadow-sm 
                flex items-center justify-between 
                bg-gradient-to-r from-purple-50 via-white to-zinc-100 
                dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 
                backdrop-blur-md">

      <div className="flex items-center gap-4">
        {/* Hamburger visible on mobile */}
        <button onClick={onMenuClick} className="md:hidden">
          <Menu className="cursor-pointer text-gray-700 dark:text-gray-300" />
        </button>
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-50 pl-9 pr-3 py-2 border rounded-md text-sm 
                       border-gray-300 dark:border-zinc-700 
                       bg-white dark:bg-zinc-800 
                       text-gray-800 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
  <ThemeToggle />
  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
    <Bell className="text-gray-600 dark:text-gray-300" />
  </button>
  <AvatarMenu />
</div>

    </div>
  )
}
