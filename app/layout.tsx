import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIタレント - ビジネスを加速させるAIソリューション',
  description: '最先端のAIモデルでブランドの可能性を広げる',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

