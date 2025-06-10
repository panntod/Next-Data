import GoogleAnalytics from '@/lib/google.analytics'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
import { Toaster } from 'sonner'
import NextAuthProvider from '@/components/next-auth-provider'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap'
})

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap'
})

const robots = process.env.NODE_ENV === 'production' ? 'index, follow' : 'noindex, nofollow'

export const metadata: Metadata = {
  title: {
    default: 'Next Data Indonesia',
    template: '%s | Next Data'
  },
  description: 'To become the leading platform that connects top AI professionals with innovative projects worldwide.',
  keywords:
    'Next Data Indonesia, Data Indonesia, Data AI, artificial intelligence, AI, Data, data collectibles, collectible data',
  authors: { name: 'Panntod', url: 'https://panntod.github.io' },
  creator: 'Next Data Developer',
  publisher: 'Next Data Indonesia',
  icons: '/logo.svg',
  robots: robots,
  openGraph: {
    title: 'Next Data Indonesia',
    description:
      'To become the leading platform that connects top AI professionals with innovative projects worldwide.',
    url: process.env.APP_URL ?? 'https://next.pandhuarya.my.id',
    images: [
      {
        url: '/logo.svg',
        alt: 'Next Data Indonesia Logo',
        width: 800,
        height: 600
      }
    ],
    siteName: 'Next Data Indonesia'
  },
  verification: {
    google: 'I7lt2K1qaRcn__KSyiG1dnCP3h18lpcKIC70g9WVuHg'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      {process.env.NODE_ENV === 'production' && process.env.APP_GA_ID && <GoogleAnalytics />}

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
