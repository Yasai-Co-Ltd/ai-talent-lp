import { Clock, DollarSign, Zap } from 'lucide-react'

const benefits = [
  {
    icon: <Clock className="w-12 h-12 mb-4" />,
    title: 'AIタレントを格安で',
    description: 'AIタレントを活用することで、従来のタレント起用と比べて大幅な時間とコスト削減が可能です。'
  },
  {
    icon: <Zap className="w-12 h-12 mb-4" />,
    title: 'ハイクオリティなAIタレント',
    description: 'AIのプロが生成したハイクオリティなAIタレントが利用可能。'
  },
  {
    icon: <DollarSign className="w-12 h-12 mb-4" />,
    title: '1オーナー制で他社と被らない',
    description: '1タレントにつき1社のみの販売なので、御社だけの専属AIタレントになります。'
  }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">そのお悩み、AIタレントで解決！</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

