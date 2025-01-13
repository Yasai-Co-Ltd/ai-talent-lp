import Image from 'next/image'
import { Star } from 'lucide-react'

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

const testimonials = [
  {
    name: '山田太郎',
    company: 'テックカンパニー株式会社',
    comment: 'AIタレントの導入で、カスタマーサポートの効率が劇的に向上しました。24時間対応が可能になり、顧客満足度も上がりました。',
    rating: 5,
    image: '/placeholder.svg'
  },
  {
    name: '佐藤花子',
    company: 'クリエイティブエージェンシー',
    comment: 'ブランドに合わせたAIタレントのカスタマイズが簡単で、マーケティングキャンペーンの効果が大幅に改善されました。',
    rating: 5,
    image: '/placeholder.svg'
  },
  {
    name: '鈴木一郎',
    company: 'オンライン教育プラットフォーム',
    comment: 'AIタレントを活用した学習支援システムにより、生徒の理解度が向上し、学習効果が飛躍的に高まりました。',
    rating: 4,
    image: '/placeholder.svg'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ユーザーの声</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6 text-card-foreground">
              <div className="flex items-center mb-4">
                <Image src={`${BASE_PATH}${testimonial.image}`} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="mb-4">{testimonial.comment}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

