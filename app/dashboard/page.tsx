'use client'

import Grid from '@mui/material/Grid'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/Siderbar'
import Topbar from '@/components/layout/Topbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import HighlightCard from '@/components/cards/Highlightcard'
import TransactionsCard from '@/components/cards/TransactionCard'
import WeeklyBarChart from '@/components/charts/WeeklyBarChart'
import TrafficPieChart from '@/components/charts/PieChart'
import EarningsLineChart from '@/components/charts/LineChart'
import DataTable from '@/components/table/DataTable'
import TotalEarningChart from '@/components/cards/TotalEarning'
import ProfitLineChart from '@/components/charts/SmallLineChart'
import CardStatVertical from '@/components/cards/CardStats'
import DistributedBarChart from '@/components/charts/DistributedChart'
import Drawer from '@mui/material/Drawer'
import dataImage from "@/public/images/logos/citi-bank.png"
import dataImage2 from "@/public/images/logos/american-bank.png"
import Footer from '@/components/layout/Footer'
import DashboardSkeleton from '@/components/loaders/loaderSkeleton'

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  // Simulating loading for 1.5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])
  const isMobile = useMediaQuery('(max-width: 639px)')


  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const DashBoardContent = (
    <main className="p-4">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <HighlightCard />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <TransactionsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyBarChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarningChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <ProfitLineChart />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardStatVertical
                title='Total Profit'
                stats='$225.6k'
                avatarIcon={dataImage.src}
                avatarColor='secondary'
                subtitle='Weekly Profit'
                trendNumber='42%'
                trend='positive'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardStatVertical
                stats='$125.26k'
                trend='positive'
                trendNumber='18%'
                title='New Project'
                subtitle='Yearly Project'
                avatarColor='primary'
                avatarIcon={dataImage2.src}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DistributedBarChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TrafficPieChart />
        </Grid>
        <Grid item xs={12} md={4} lg={8}>
          <EarningsLineChart />
        </Grid>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
      </Grid>
      <Footer />
    </main>
  )
  return (
    <div className="flex">

      {!isMobile && <Sidebar />}

      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: 256 } }}
        >
          <Sidebar />
        </Drawer>
      )}
      <div className={`flex-1 ${mobileOpen ? 'ml-0' : 'md:ml-64'} transition-all duration-300`}>
        <Topbar onMenuClick={() => setMobileOpen(!mobileOpen)} />
        {loading ? <DashboardSkeleton /> : DashBoardContent}
      </div>
    </div>
  )
}
