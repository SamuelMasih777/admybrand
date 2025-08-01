'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  MoreVertical,
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const data = [
  {
    stats: '1.2L',
    title: 'Sales',
    icon: DollarSign,
    color: 'bg-purple-100 text-purple-700',
  },
  {
    stats: '320',
    title: 'Users',
    icon: Users,
    color: 'bg-green-100 text-green-700',
  },
  {
    stats: '86',
    title: 'Products',
    icon: ShoppingCart,
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    stats: '4.9L',
    title: 'Revenue',
    icon: TrendingUp,
    color: 'bg-blue-100 text-blue-700',
  },
]

export default function TransactionsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-3 p-6">
        <div>
          <h3 className="text-lg font-medium">Transactions</h3>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Total 48.5% Growth 😎</span> this month
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Refresh</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Update</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        {data.map(({ title, stats, icon: Icon, color }) => (
          <div key={title} className="flex items-center space-x-3">
            <div className={`cursor-pointer p-2 rounded-full ${color} transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-5`}>
              <Icon size={32} />
            </div>
            <div>
              <p className="text-lg text-muted-foreground">{title}</p>
              <p className="text-base font-semibold">{stats}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
