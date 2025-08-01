"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Mon", earnings: 310 },
  { name: "Tue", earnings: 400 },
  { name: "Wed", earnings: 280 },
  { name: "Thu", earnings: 510 },
  { name: "Fri", earnings: 420 },
  { name: "Sat", earnings: 109 },
  { name: "Sun", earnings: 100 },
];

export default function EarningsLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Earnings</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
