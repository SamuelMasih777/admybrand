"use client"

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface Props {
  loading: boolean
  children: React.ReactNode
}

export default function WithShadSkeleton({ loading, children }: Props) {
  if (!loading) return <>{children}</>

  return (
    <div className="space-y-6 p-4">
      {/* Mimicking a card header */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[140px]" />
        </div>
      </div>

      {/* Mimicking a card body or table */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-[90%]" />
        <Skeleton className="h-6 w-[80%]" />
        <Skeleton className="h-6 w-[85%]" />
      </div>
    </div>
  )
}
