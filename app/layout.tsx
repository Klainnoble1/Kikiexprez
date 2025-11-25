import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'KIKIEXPREZ - Cargo Delivery Service',
  description: 'Professional cargo freight forwarding and logistics services. London to Lagos air and sea freight, door-to-door delivery, and warehousing solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-k.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-k.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-k.svg',
        sizes: '16x16',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/icon-k.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

