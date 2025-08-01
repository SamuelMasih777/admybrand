'use client'

import {
  Card,
  CardContent,
} from '@/components/ui/card'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'


const data = [
  { name: 'Zomato', value: 45 },
  { name: 'Swiggy', value: 85 },
  { name: 'Zepto', value: 65 },
  { name: 'Blinkit', value: 50 },
  { name: 'BMW', value: 70 },
]

const colors = ['#f87171', '#3b82f6', '#f87171', '#3b82f6', '#3b82f6']

const DistributedBarChart = () => {
  return (
    <Card className="w-full max-w-md ">
      <CardContent className="pt-4">
        <h4 className="text-xl font-semibold text-center">2,856</h4>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip cursor={{ fill: '#f3f4f6' }} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={24}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-muted-foreground font-medium mt-1">Sessions</p>
      </CardContent>
    </Card>
  )
}

export default DistributedBarChart
