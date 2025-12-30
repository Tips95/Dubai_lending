import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Брокер-Тур в Дубай | Академия StepDream',
  description: 'Выездной тур в Дубай на неделю или месяц. Станьте успешным брокером по зарубежной недвижимости с личным наставничеством от Беслана Терекбаева.',
  keywords: 'брокер тур, Дубай, недвижимость, обучение, StepDream, брокер по недвижимости',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

