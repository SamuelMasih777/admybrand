'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
  Settings,
  File,
  Shield,
} from 'lucide-react'
import { Disclosure } from '@headlessui/react'
import Logo from "@/public/images/avatars/admybrand_logo.png"
import Image from 'next/image'
import NameLogo from "@/public/images/avatars/ADmyBRAND.png"
import BottomImage from "@/public/images/avatars/imgss.png"

const navItems = [
  {
    label: 'Dashboards',
    icon: LayoutDashboard,
    children: [
      { label: 'Analytics', href: '/dashboard' },
    ],
  },
  {
    label: 'Pages',
    icon: File,
    children: [
      { label: 'Login', href: '/' },
      { label: 'Register', href: '/' },
      {
        label: 'Auth',
        icon: Shield,
        children: [
          { label: 'Forgot Password', href: '/' },
          { label: 'Reset Password', href: '/' },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    icon: Settings,
    children: [
      { label: 'Profile', href: '/' },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  

  const isActive = (href: string) => pathname === href

  const activeClasses =
    'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold rounded-lg'

  const isItemActive = (item: { href?: string; children?: any[] }): boolean => {
    if (item.href && isActive(item.href)) return true;
    if (item.children && item.children.length > 0) {
      return item.children.some((child) => isItemActive(child));
    }
    return false;
  };

  return (
    <aside className="w-64 min-h-screen fixed bg-white dark:bg-zinc-900 border-r shadow-lg flex flex-col justify-between">
      {/* Top content */}
      <div className="p-5 space-y-6">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="w-8 h-8" />
          <Image src={NameLogo} alt="NameLogo" className="h-10 object-contain" />
        </div>

        <nav className="space-y-4">
          {navItems.map((item, index) =>
            item.children ? (
              <Disclosure key={index}>
                {({ open }) => (
                  <div>
                    <Disclosure.Button
                      className={`cursor-pointer flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all ${
                        isItemActive(item)
                          ? 'bg-gray-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={20} />
                        {item.label}
                      </div>
                      {open ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="cursor-pointer pl-6 mt-1 space-y-1">
                      {item.children.map((sub, idx) =>
                        sub.children ? (
                          <Disclosure key={idx}>
                            {({ open }) => (
                              <div>
                                <Disclosure.Button className="flex items-center justify-between w-full text-left px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500">
                                  <div className="flex items-center gap-2">
                                    {sub.icon && <sub.icon size={16} />}
                                    {sub.label}
                                  </div>
                                  {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-4 space-y-1">
                                  {sub.children.map((deep, didx) => (
                                    <Link
                                      key={didx}
                                      href={deep.href}
                                      className={`block px-2 py-1 text-sm rounded-md ${
                                        isActive(deep.href)
                                          ? activeClasses
                                          : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
                                      }`}
                                    >
                                      {deep.label}
                                    </Link>
                                  ))}
                                </Disclosure.Panel>
                              </div>
                            )}
                          </Disclosure>
                        ) : (
                          <Link
                            key={idx}
                            href={sub.href}
                            className={`block px-2 py-1 text-sm rounded-md ${
                              isActive(sub.href)
                                ? activeClasses
                                : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ) : null
          )}
        </nav>
      </div>

      {/* Bottom image */}
      <div className="p-5">
        <Image src="/images/avatars/imgss.png" alt="Decorative Image" width={1000} height={1000} className="w-full h-32 object-contain" />
      </div>
    </aside>
  )
}
