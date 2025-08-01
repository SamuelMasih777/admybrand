import './globals.css'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ADmyBRAND Insights',
  description: 'Marketing Analytics Dashboard',
  icons: {
    icon: '/images/avatars/admybrand_logo.png',
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
