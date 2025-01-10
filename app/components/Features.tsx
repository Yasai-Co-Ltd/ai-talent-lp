import Image from 'next/image'

const features = [
  {
    title: 'リアルに近いAIタレント',
    description: 'AIのプロが生成したリアルな人物とも見間違うようなタレントがご利用できます。',
    image: '/placeholder.svg',
    reverse: false,
  },
  {
    title: 'AIタレントで画像も動画も生成可能',
    description: '購入したAIタレントの人物のまま、実際の利用シーンにあった画像や動画を生成できます。',
    image: '/placeholder.svg',
    reverse: true,
  },
  {
    title: 'コスパよく新たなプロモーションが可能',
    description: '今までになかったAIタレントは人の目を惹きやすく、コスパよくリーチできます。',
    image: '/placeholder.svg',
    reverse: false,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">AIタレントが選ばれる特徴</h2>
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-20`}>
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src={feature.image} alt={feature.title} width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

