'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

import { Card, CardContent } from '@/components/ui/card'

const data = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 5 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 15 },
  { name: 'Jun', value: 45 },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="rounded px-3 py-2 shadow-sm border text-sm">
        <p>{`Value: $${payload[0].value}k`}</p>
      </div>
    )
  }
  return null
}

export default function ProfitLineChart() {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="text-2xl font-semibold">
          $86.4k
        </div>
        <div className="h-[88px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center font-medium text-muted-foreground mt-3">
          Total Profit
        </div>
      </CardContent>
    </Card>
  )
}
