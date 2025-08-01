// components/loaders/DashboardSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"
import { Grid } from "@mui/material"

export default function DashboardSkeleton() {
  return (
    <main className="p-4">
      <Grid container spacing={4}>
        {/* HighlightCard Skeleton */}
        <Grid item xs={12} md={4}>
          <Skeleton className="h-36 w-full rounded-xl" />
        </Grid>

        {/* TransactionsCard Skeleton */}
        <Grid item xs={12} md={8}>
          <Skeleton className="h-36 w-full rounded-xl" />
        </Grid>

        {/* WeeklyBarChart Skeleton */}
        <Grid item xs={12} md={6} lg={4}>
          <Skeleton className="h-60 w-full rounded-xl" />
        </Grid>

        {/* TotalEarningChart Skeleton */}
        <Grid item xs={12} md={6} lg={4}>
          <Skeleton className="h-60 w-full rounded-xl" />
        </Grid>

        {/* Stats Grid */}
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Skeleton className="h-32 w-full rounded-xl" />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* PieChart */}
        <Grid item xs={12} md={6} lg={4}>
          <Skeleton className="h-60 w-full rounded-xl" />
        </Grid>

        {/* EarningsLineChart */}
        <Grid item xs={12} md={6} lg={8}>
          <Skeleton className="h-60 w-full rounded-xl" />
        </Grid>

        {/* DataTable */}
        <Grid item xs={12}>
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </Grid>
      </Grid>
    </main>
  )
}
