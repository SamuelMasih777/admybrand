'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 160 },
  { name: "Wed", users: 110 },
  { name: "Thu", users: 180 },
  { name: "Fri", users: 100 },
  { name: "Sat", users: 140 },
  { name: "Sun", users: 170 },
]

export default function WeeklyBarChart() {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Weekly Overview</h3>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4 mr-1 ml-8" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Refresh</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Update</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>

        <div className="h-64 -mr-1 -ml-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#7e22ce" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex gap-2">
          <p className="text-2xl font-bold text-primary">45%</p>
          <p className="text-md text-muted-foreground">
            Your user growth is <span className="text-foreground font-medium">45% better</span> than last week 🚀
          </p>
        </div>

        <Button className="w-full cursor-pointer">Details</Button>
      </CardContent>
    </Card>
  )
}
