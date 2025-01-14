import Image from "next/image";

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

const features = [
  {
    title: "専属AIタレント",
    description:
      "AIタレントは1社専用設計。貴社だけのオリジナルキャラクターで、他社と被る心配がなく、ブランドの個性をしっかりアピールできます。",
    image: "/features01.jpg",
    reverse: false,
  },
  {
    title: "高品質な表現力",
    description:
      "最新のAI技術でリアルな表情や自然な動きが再現可能。まるで本物のタレントのように感情豊かに表現できるので、見る人に強い印象を与えます。",
    image: "/features02.jpg",
    reverse: true,
  },
  {
    title: "コスト削減",
    description:
      "AIタレントなら、人件費がかからないのでコストを大幅にカット。従来のタレント起用費用の半分以下で、高い成果が期待できます。",
    image: "/features03.jpg",
    reverse: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        AIタレントで、ここまでできる！
      </h2>
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center mb-20`}
          >
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src={`${BASE_PATH}${feature.image}`}
                alt={feature.title}
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
