import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'スタータープラン',
    price: '¥9,800',
    features: ['1つのAIタレント', 'メールサポート'],
  },
  {
    name: 'プロフェッショナルプラン',
    price: '¥29,800',
    features: ['1つのAIタレント', '無制限の利用時間', '優先サポート', 'カスタマイズオプション'],
  },
  {
    name: 'エンタープライズプラン',
    price: 'お問い合わせ',
    features: ['1つのAIタレント', 'フルカスタマイズ', '専用サポートチーム'],
  },
]

export default function SubscriptionPlans() {
  return (
    <section id="plans" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">サブスクリプションプラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/月</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">今すぐ選択</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

