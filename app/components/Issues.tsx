import { Clock, Users, DollarSign } from 'lucide-react'

const issues = [
  {
    icon: <DollarSign className="w-12 h-12 mb-4" />,
    title: 'タレントを起用したいけどコストが高すぎる',
    solution: 'AIタレントの導入で人件費を大幅に削減し、コスト効率を向上させます。'
  },
  {
    icon: <Clock className="w-12 h-12 mb-4" />,
    title: 'AIで人物を作ってみたけど気に入ったものができない',
    solution: 'AIタレントは24時間365日稼働可能で、時間の制約を解消します。'
  },
  {
    icon: <Users className="w-12 h-12 mb-4" />,
    title: 'みんな同じようなタレントを使用していてインパクトが薄い',
    solution: 'AIタレントがスタッフの補助や代替として機能し、人材不足を解消します。'
  }
]

export default function Issues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">こんなお悩みありませんか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6 text-card-foreground">
              <div className="flex justify-center">{issue.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{issue.title}</h3>
              {/* <p className="text-center">{issue.solution}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

