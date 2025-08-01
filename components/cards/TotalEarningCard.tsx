'use client'
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "Zomato", amount: "₹1.1L" },
  { name: "Swiggy", amount: "₹89K" },
  { name: "Meesho", amount: "₹78K" },
  { name: "Uber", amount: "₹52K" },
]

export default function TotalEarningCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-base font-semibold mb-4">Total Earnings</h3>
        <ul className="space-y-3">
          {clients.map((client) => (
            <li key={client.name} className="flex justify-between border-b pb-2 text-sm">
              <span>{client.name}</span>
              <span className="font-semibold">{client.amount}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
