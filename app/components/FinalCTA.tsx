import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">今すぐ始めましょう</h2>
            <p className="text-xl mb-6">AIタレントの力で、あなたのビジネスを次のレベルへ</p>
            <form className="flex flex-col md:flex-row gap-4">
              <Input type="email" placeholder="メールアドレスを入力してください" className="bg-white text-gray-800" />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                無料トライアルを開始
              </Button>
            </form>
          </div>
          <div className="md:w-1/2">
            {/* Add AI talent demo video here */}
            <div className="bg-gray-300 w-full h-auto rounded-lg">
              <Image src={`${BASE_PATH}features02.gif`} alt="今すぐ始めましょう" width={500} height={300} className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

