"use client"
import { useEffect, useState } from "react"

export default function ClientDate({ date }: { date: Date }) {
  const [formatted, setFormatted] = useState("")

  useEffect(() => {
    const local = date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    setFormatted(local)
  }, [date])

  return <span>{formatted}</span>
}
