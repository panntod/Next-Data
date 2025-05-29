import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: "Admin",
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
    <main>
      {children}
    </main>
  )
}
