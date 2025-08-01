'use client'

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DateRange } from "react-day-picker"
import DatePickerWithRange from "@/components/date-picker-with-range"
import { DownloadIcon, X } from "lucide-react"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import americanImage from"@/public/images/logos/american-bank.png"
import americanImage1 from"@/public/images/logos/asana.png"
import americanImage2 from"@/public/images/logos/behance.png"
import americanImage3 from"@/public/images/logos/dribbble.png"
import americanImage4 from"@/public/images/logos/citi-bank.png"
import americanImage5 from"@/public/images/logos/aws.png"
import americanImage6 from"@/public/images/logos/github.png"
import americanImage7 from"@/public/images/logos/google.png"
import americanImage8 from"@/public/images/logos/mastercard.png"
import americanImage9 from"@/public/images/logos/mastercard.png"
import americanImage10 from"@/public/images/logos/mastercard.png"
import americanImage11 from"@/public/images/logos/mastercard.png"
import americanImage12 from"@/public/images/logos/mastercard.png"
import americanImage13 from"@/public/images/logos/mastercard.png"
import Image from "next/image"
import ClientDate from "../clientDate"

const rawData = [
  { image:americanImage, name: "Zomato", conversions: 127, budget: "$110K", date: new Date("2024-07-01") },
  { image:americanImage1, name: "Swiggy", conversions: 102, budget: "$89K", date: new Date("2024-07-10") },
  { image:americanImage8, name: "Meesho", conversions: 88, budget: "$78K", date: new Date("2024-07-15") },
  { image:americanImage2, name: "Uber", conversions: 66, budget: "$52K", date: new Date("2024-07-22") },
  { image:americanImage12, name: "Amazon", conversions: 180, budget: "$195K", date: new Date("2024-07-25") },
  { image:americanImage3, name: "Flipkart", conversions: 142, budget: "$102K", date: new Date("2024-07-28") },
  { image:americanImage11, name: "Dunzo", conversions: 54, budget: "$39K", date: new Date("2024-07-29") },
  { image:americanImage4, name: "Zepto", conversions: 77, budget: "$610K", date: new Date("2024-07-30") },
  { image:americanImage13, name: "Nokia", conversions: 777, budget: "$661K", date: new Date("2024-07-31") },
  { image:americanImage5, name: "Apple", conversions: 177, budget: "$613K", date: new Date("2024-08-01") },
  { image:americanImage10, name: "Samsung", conversions: 75, budget: "$614K", date: new Date("2024-07-31") },
  { image:americanImage6, name: "LinkedIn", conversions: 89, budget: "$161K", date: new Date("2024-07-28") },
  { image:americanImage9, name: "Lenovo", conversions: 566, budget: "$641K", date: new Date("2024-07-29") },
  { image:americanImage7, name: "Acer", conversions: 99, budget: "$541K", date: new Date("2024-07-27") },
]

const rowsPerPage = 5

export default function DataTable() {
  const [query, setQuery] = useState("")
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [page, setPage] = useState(1)
  const [sortKey, setSortKey] = useState<keyof typeof rawData[0] | null>(null)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filteredData = rawData
    .filter((row) => row.name.toLowerCase().includes(query.toLowerCase()))
    .filter((row) =>
      !dateRange?.from || !dateRange?.to
        ? true
        : row.date >= dateRange.from && row.date <= dateRange.to
    )
    .sort((a, b) => {
      if (!sortKey) return 0

      const valA = a[sortKey]
      const valB = b[sortKey]
      if (sortKey === "budget") {
        const numA = parseFloat(String(valA).replace(/[^0-9.]/g, ""));
        const numB = parseFloat(String(valB).replace(/[^0-9.]/g, ""));
        return sortOrder === "asc" ? numA - numB : numB - numA;
      }
      if (typeof valA === "string" && typeof valB === "string") {
        return sortOrder === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA)
      }

      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA
      }

      if (valA instanceof Date && valB instanceof Date) {
        return sortOrder === "asc"
          ? valA.getTime() - valB.getTime()
          : valB.getTime() - valA.getTime()
      }

      return 0
    })


  const handleClear = () => {
    setQuery("")
    setDateRange(undefined)
    setPage(1)
  }

  const handleExport = () => {
    const csv = [["Name", "Conversions", "Budget", "Date"]]
    filteredData.forEach(row => {
      csv.push([row.name, String(row.conversions), row.budget, row.date.toLocaleDateString()])
    })

    const blob = new Blob([csv.map(r => r.join(",")).join("\n")], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "clients.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  // const filteredData = rawData
  //   .filter(row =>
  //     row.name.toLowerCase().includes(query.toLowerCase())
  //   )
  //   .filter(row =>
  //     !dateRange?.from || !dateRange?.to
  //       ? true
  //       : row.date >= dateRange.from && row.date <= dateRange.to
  //   )
  const handleSort = (key: keyof typeof rawData[0]) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortOrder("asc")
    }
  }


  const totalPages = Math.ceil(filteredData.length / rowsPerPage)
  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CardTitle>Client Conversions Table</CardTitle>
        <div className="flex flex-wrap items-center gap-2">
          <Input
            type="text"
            placeholder="Search client..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            className="w-[200px]"
          />
          {/* <DatePickerWithRange date={dateRange} setDate={setDateRange} /> */}
          <Button variant="outline" onClick={handleClear}>
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
          <Button onClick={handleExport}>
            <DownloadIcon className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                Client {sortKey === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </TableHead>
              <TableHead onClick={() => handleSort("conversions")} className="cursor-pointer">
                Conversions {sortKey === "conversions" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </TableHead>
              <TableHead onClick={() => handleSort("budget")} className="cursor-pointer">
                Budget {sortKey === "budget" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </TableHead>
              <TableHead onClick={() => handleSort("date")} className="cursor-pointer">
                Date {sortKey === "date" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={`${row.name}-${row.date.toISOString()}`}>
                <TableCell>
  <div className="flex items-center gap-2">
    <Image
      src={row?.image}
      alt={row.name}
      className="w-6 h-6 rounded-full object-cover"
    />
    <span>{row.name}</span>
  </div>
</TableCell>

                <TableCell>{row.conversions}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell><ClientDate date={row.date}/></TableCell>
              </TableRow>
            ))}
            {paginatedData.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6">
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 1 && setPage(page - 1)}
                className={page === 1 ? "opacity-50 pointer-events-none" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <span className="px-4 py-2 text-sm text-muted-foreground">
                Page {page} of {totalPages || 1}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => page < totalPages && setPage(page + 1)}
                className={page === totalPages ? "opacity-50 pointer-events-none" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
