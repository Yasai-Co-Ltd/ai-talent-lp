import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={`${BASE_PATH}/hero.png`}
        alt="AI Talent Background"
        fill
        style={{ objectFit: "cover", objectPosition: "right" }}
        priority
      />
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative z-10 text-center text-black px-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-6 md:leading-relaxed">
          専属のAIタレントで、
          <br />
          マーケティングを次のステージへ。
        </h1>
        <p className="text-xl md:text-xl mb-8">
          業界初の1オーナー制で、唯一無二のブランド体験を実現。
          <br />
          AI技術でタレント起用のコストを削減し、顧客エンゲージメントをアップ！
        </p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col md:flex-row justify-center">
            <Button
              type="submit"
              className="text-xl py-6 px-10 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              今すぐお問い合わせ
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
