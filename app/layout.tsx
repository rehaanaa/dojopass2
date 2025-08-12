import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DojoPass - India\'s Fastest Digital Pass Store',
  description: 'Buy ChatGPT Plus, Spotify Premium, Domains, Netflix & more with instant UPI payments. India\'s fastest digital pass delivery platform.',
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/favicon_io/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 