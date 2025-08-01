'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Input
} from "@/components/ui/input"
import {
  Button
} from "@/components/ui/button"
import {
  Label
} from "@/components/ui/label"
import {
  Checkbox
} from "@/components/ui/checkbox"
import {
  Separator
} from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { Eye, EyeOff, Facebook, Github, Twitter } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('auth', 'true')
    router.push('/dashboard')
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-muted">
      {/* <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div> */}

      <Card className="w-full max-w-sm">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Welcome Back 👋</h2>
            <p className="text-sm text-muted-foreground">Sign in to continue to the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Link href="/" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">Sign In</Button>

            <p className="text-center text-sm text-muted-foreground">
              New here?{' '}
              <Link href="/" className="text-primary hover:underline">
                Create an account
              </Link>
            </p>

            <Separator />

            <div className="flex justify-center gap-3">
              <Button variant="outline" size="icon">
                <Facebook size={16} />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter size={16} />
              </Button>
              <Button variant="outline" size="icon">
                <Github size={16} />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
