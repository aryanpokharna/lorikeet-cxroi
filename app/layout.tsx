import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI for CX ROI Calculator | Lorikeet',
  description: "If you're paying per ticket (not per resolution) for an AI support agent you're getting ripped off.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

