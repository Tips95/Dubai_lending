import type { Metadata, Viewport } from 'next'
import { Montserrat, Raleway } from 'next/font/google'
import React from 'react'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', 'sans-serif'],
})

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Брокер-Тур в Дубай | Академия StepDream',
  description: 'Выездной тур в Дубай на неделю или месяц. Станьте успешным брокером по зарубежной недвижимости с личным наставничеством от Беслана Терекбаева.',
  keywords: 'брокер тур, Дубай, недвижимость, обучение, StepDream, брокер по недвижимости',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${raleway.variable} ${montserrat.className}`}>{children}</body>
    </html>
  )
}

