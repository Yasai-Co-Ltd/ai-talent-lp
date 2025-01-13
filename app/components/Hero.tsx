import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={`${BASE_PATH}/hero.png`}
        alt="AI Talent Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative z-10 text-center text-black px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">AIタレントでビジネスを加速</h1>
        <p className="text-xl md:text-2xl mb-8">御社だけのAIタレントでブランドの可能性を広げる</p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col md:flex-row justify-center">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              無料トライアルを開始
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

