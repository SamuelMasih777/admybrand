'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import prize from "@/public/images/pages/trophy.png"

export default function HighlightCard() {
  return (
    <Card className="relative overflow-hidden shadow-xl">
      <CardContent className="flex flex-col gap-2 items-start p-6 mb-1">
        <div>
          <h3 className="text-lg font-semibold">Congratulations Samuel! 🎉</h3>
          <p className="text-sm text-muted-foreground">Best seller of the month</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">$42.8k</h2>
          <p className="text-sm text-muted-foreground">78% of target 🚀</p>
        </div>
        <Button size="sm" variant="default" className="cursor-pointer">
          View Sales
        </Button>

        <div className="cursor-pointer absolute right-6 bottom-6 w-[100px] h-[100px] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-5">
          <Image
            src={prize}
            alt="Trophy image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </CardContent>
    </Card>
  )
}
