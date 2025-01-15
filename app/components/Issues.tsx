import { Clock, Users, DollarSign } from "lucide-react";
import Image from "next/image";

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

const issues = [
  {
    icon: (
      <Image
        src={`${BASE_PATH}/issues01.png`}
        alt="Issue Icon"
        width={100}
        height={100}
        className="h-36 w-auto mb-4"
      />
    ),
    title: "有名タレントの起用には高額なコストが必要で困っている",
    solution:
      "AIタレントの導入で人件費を大幅に削減し、コスト効率を向上させます。",
  },
  {
    icon: (
      <Image
        src={`${BASE_PATH}/issues02.png`}
        alt="Issue Icon"
        width={100}
        height={100}
        className="h-36 w-auto mb-4"
      />
    ),
    title: "ブランドの個性を際立たせるキャラクターが見つからない",
    solution: "AIタレントは24時間365日稼働可能で、時間の制約を解消します。",
  },
  {
    icon: (
      <Image
        src={`${BASE_PATH}/issues03.png`}
        alt="Issue Icon"
        width={100}
        height={100}
        className="h-36 w-auto mb-4"
      />
    ),
    title: "SNSや広告でインパクトを与えられる新しい施策が欲しい",
    solution:
      "AIタレントがスタッフの補助や代替として機能し、人材不足を解消します。",
  },
];

export default function Issues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          こんなお悩みありませんか？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg p-6 text-card-foreground"
            >
              <div className="flex justify-center">{issue.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {issue.title}
              </h3>
              {/* <p className="text-center">{issue.solution}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
