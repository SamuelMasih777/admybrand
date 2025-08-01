import './globals.css'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Inter } from 'next/font/google'
import { LocalizationProvider } from '@mui/x-date-pickers'
import Logo from "@/public/images/avatars/admybrand_logo.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ADmyBRAND Insights',
  description: 'Marketing Analytics Dashboard',
  icons: {
    icon: '/images/avatars/admybrand_logo.png', // relative to /public
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
