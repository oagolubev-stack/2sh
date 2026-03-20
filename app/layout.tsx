import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Agency',
  description: 'Лучшие туры и путешествия',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  )
}