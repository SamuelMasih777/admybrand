'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t py-4 mt-8 flex items-center justify-center text-sm text-muted-foreground">
      <span className="flex items-center gap-1">
        © {new Date().getFullYear()} Made with
        <Heart className="fill-red-500 w-4 h-4 text-red-500" />
        by <span className="font-medium text-foreground">Samuel</span>
      </span>
    </footer>
  )
}
