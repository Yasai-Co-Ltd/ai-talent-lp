import { PiggyBank, PersonStanding, Clapperboard } from "lucide-react";

const benefits = [
  {
    icon: <PiggyBank className="w-12 h-12 mb-4" />,
    title: "大幅コスト削減",
    description: "AIタレント導入でタレント起用費用を最大70%削減",
  },
  {
    icon: <PersonStanding className="w-12 h-12 mb-4" />,
    title: "独自性を強化",
    description: "1オーナー制で、完全オリジナルなAIキャラクターを作成",
  },
  {
    icon: <Clapperboard className="w-12 h-12 mb-4" />,
    title: "拡張性",
    description: "動画、SNS投稿など幅広い活用が可能",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          AIタレントなら、これらのお悩みを全て解決します！
        </h2>
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
  );
}
