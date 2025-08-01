'use client'

import { Avatar } from '@mui/material'

// ShadCN UI Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'
// import { Typography } from '@mui/material' // If you’re wrapping `Typography` with ShadCN, otherwise use <p>, <h3>, etc.

type DataType = {
  title: string
  imgSrc: string
  amount: string
  progress: number
  subtitle: string
  colorClass: string // Tailwind class string
}

const data: DataType[] = [
  {
    progress: 75,
    title: 'Zipcar',
    amount: '$24,895.65',
    subtitle: 'Limited-Time Offers',
    imgSrc: '/images/cards/zipcar.png',
    colorClass: 'bg-purple-500'
  },
  {
    progress: 50,
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Value-Add Services',
    imgSrc: '/images/cards/bitbank.png',
    colorClass: 'bg-blue-500'
  },
  {
    progress: 20,
    title: 'Aviato',
    amount: '$1,245.80',
    subtitle: 'Referral Programs',
    imgSrc: '/images/cards/aviato.png',
    colorClass: 'bg-pink-500'
  },
  {
    progress: 50,
    title: 'Venue',
    amount: '$1,678.80',
    subtitle: 'Done-for-You',
    imgSrc: '/images/cards/aviato.png',
    colorClass: 'bg-red-500'
  }
]

const TotalEarningChart = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between p-6 space-y-7">
        <CardTitle className='text-lg'>Total Earning</CardTitle>
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

      <CardContent className="flex flex-col gap-11">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">$24,895</h3>
            <i className="ri-arrow-up-s-line align-bottom text-green-500" />
            <span className="text-md font-medium text-green-500">10%</span>
          </div>
          <p className="text-sm text-muted-foreground">Compared to $84,325 last year</p>
        </div>

        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar
                src={item.imgSrc}
                variant="rounded"
                className="bg-muted"
              />
              <div className="flex justify-between items-center w-full flex-wrap gap-x-4 gap-y-2">
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2 items-center min-w-[120px]">
                  <p className="font-medium">{item.amount}</p>
                  <div className="w-20 h-1.5 rounded bg-gray-200 overflow-hidden">
                    <div
                      className={`${item.colorClass} h-full rounded`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={[{ name: 'Earnings', value: 75, fill: '#34c38f' }]}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                dataKey="value"
                cornerRadius={5}
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div> */}
      </CardContent>
    </Card>
  )
}

export default TotalEarningChart
