import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AIタレント</h3>
            <p className="text-sm">最先端のAIモデルでビジネスの可能性を広げる</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:underline">機能</Link></li>
              <li><Link href="#plans" className="hover:underline">料金プラン</Link></li>
              <li><Link href="#talents" className="hover:underline">タレント一覧</Link></li>
              <li><Link href="#cases" className="hover:underline">利用事例</Link></li>
              <li><Link href="#support" className="hover:underline">サポート</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:underline">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook /></Link>
              <Link href="#" aria-label="Twitter"><Twitter /></Link>
              <Link href="#" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} AIタレント. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

