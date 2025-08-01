'use client'

import Image from 'next/image'
import avatar from '@/public/images/avatars/1.png'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

export default function AvatarMenu() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('auth')
    router.push('/')
  }

  const handleProfile = () => {
    router.push('/dashboard')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfile}>
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} variant="destructive">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
