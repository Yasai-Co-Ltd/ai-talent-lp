import { Button } from '@/components/ui/button'
import Image from 'next/image'

const talents = [
  { name: 'AI太郎', description: '多才なAIタレント', image: '/placeholder.svg' },
  { name: 'AI花子', description: '親しみやすいAIアシスタント', image: '/placeholder.svg' },
  { name: 'AIケン', description: 'ビジネス特化型AI', image: '/placeholder.svg' },
  { name: 'AIユミ', description: 'クリエイティブAIタレント', image: '/placeholder.svg' },
]

export default function TalentList() {
  return (
    <section id="talents" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">選べる多彩なAIタレント</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {talents.map((talent, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image src={talent.image} alt={talent.name} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{talent.name}</h3>
                <p className="text-gray-600 mb-4">{talent.description}</p>
                <Button variant="outline" className="w-full">詳細を見る</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

