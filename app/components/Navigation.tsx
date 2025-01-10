import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AIタレント
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="hover:underline">機能</Link>
          <Link href="#plans" className="hover:underline">料金プラン</Link>
          <Link href="#talents" className="hover:underline">タレント一覧</Link>
          <Link href="#cases" className="hover:underline">利用事例</Link>
          <Link href="#support" className="hover:underline">サポート</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:underline">ログイン</Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">今すぐ試す</Button>
        </div>
      </div>
    </nav>
  )
}

