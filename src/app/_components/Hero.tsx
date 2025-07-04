"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="max-w-custom mx-auto py-16 lg:py-25 mt-[100px]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between min-h-[585px]">
          <HeroTitle />
          <TrustedBy />
        </div>

        {/* Right Content - Feature Cards */}
        <div className="lg:w-[400px] space-y-[30px] py-4">
          <FeatureCard
            src="/homepage/feat1.svg"
            alt="Built for Connection"
            title="Built for Connection"
            description="Midas doesn’t just reach audiences—it resonates. Our platform empowers your business to transform ideas into campaigns that spark interest, drive action, and build lasting loyalty with the customers who matter most."
            index={0}
          />

          <FeatureCard
            src="/homepage/feat2.svg"
            alt="Engineered for Growth"
            title="Engineered for Growth"
            description="Reach customers on the platforms that drive impact—from social feeds to emerging channels—unlocking access to 3 billion daily active users. Midas accelerates growth by making sophisticated advertising simple, so you can scale faster with less effort."
            index={1}
          />

          <FeatureCard
            src="/homepage/feat3.svg"
            alt="Designed for Versatility"
            title="Designed for Versatility"
            description="Whether you’re launching a single product or managing campaigns across markets, Midas adapts to your goals. Harness our intelligent toolkit to run multi-channel campaigns that flex and evolve as your business grows."
            index={2}
          />

          <FeatureCard
            src="/homepage/feat4.svg"
            alt="Crafted for Excellence"
            title="Crafted for Excellence"
            description="Powered by $5 billion in campaign expertise, Midas uses advanced machine learning to optimize every bid, budget, and creative in real time. The result: a self-improving engine that maximizes ROI and keeps your business ahead."
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

interface FeatIconProps {
  src: string;
  alt: string;
}
const FeatIcon = ({ src, alt }: FeatIconProps) => {
  return (
    <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center -ml-[10px]">
      <Image src={src} alt={alt} width={60} height={60} />
    </div>
  );
};

interface FeatureCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({
  src,
  alt,
  title,
  description,
  index,
}: FeatureCardProps) => {
  const expandDirection = index < 2 ? "down" : "up";

  // 处理标题，将最后一个单词加粗
  const renderTitle = (titleText: string) => {
    const words = titleText.split(" ");
    const lastWord = words.pop();
    const restWords = words.join(" ");

    return (
      <>
        {restWords && <span>{restWords} </span>}
        <span className="font-semibold">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="relative group">
      {/* 主卡片 */}
      <div className="bg-black/[0.03] rounded-[30px] px-[35px] py-[30px] relative z-10 shadow-[0px_1px_2px_0px_rgba(24,24,27,0.10),0px_0px_1px_0px_rgba(24,24,27,0.20)]">
        <div className="flex items-center space-x-[20px]">
          <FeatIcon src={src} alt={alt} />
          <span className="font-normal text-lg text-gray-700">
            {renderTitle(title)}
          </span>
        </div>
      </div>

      {/* 展开的描述区域 */}
      <div
        className={`
            px-[35px] py-[30px]
          absolute left-0 right-0 bg-white/95 backdrop-blur-sm rounded-[30px] shadow-xl
          opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto
          ${
            expandDirection === "down"
              ? "top-0 transform translate-y-[-20px] group-hover:translate-y-0"
              : "bottom-0 transform translate-y-[20px] group-hover:translate-y-0"
          }
        `}
        style={{
          height: "420px", // 2个FeatureCard的高度
          zIndex: 50,
        }}
      >
        {/* 重复主卡片内容 */}
        <div className="">
          <div className="flex items-center space-x-[20px]">
            <FeatIcon src={src} alt={alt} />
            <span className="font-normal text-lg text-gray-700">
              {renderTitle(title)}
            </span>
          </div>
        </div>

        {/* 描述内容 */}
        <div className="flex-1 flex items-center mt-[25px]">
          <p className="text-gray-700 text-lg font-normal leading-[30px] tracking-[0.72px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const GetStartedButton = () => {
  const handleClick = () => {
    window.open("https://admin.growthylab.ai/signup", "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-black text-white px-8 py-[18px] rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors group"
    >
      <span className="text-lg font-medium">Get Started</span>
      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

const HeroTitle = () => {
  return (
    <section className="space-y-[20px] flex-1 font-outfit">
      <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-gray-900 leading-[90px]">
        Feel The <span className="text-blue-500">Midas</span> Touch.
      </h1>

      <p className="text-[24px] text-gray-600 leading-[44px] max-w-2xl mb-[70px] font-light">
        Your ultimate strategic ads autopilot, engineered to turn every campaign
        into pure gold.
      </p>

      <GetStartedButton />
    </section>
  );
};

const TrustedBy = () => {
  return (
    <section>
      <p className="text-[#A1A1AA] font-inter text-base leading-[30px] tracking-[0.8px] mb-[20px]">
        Trusted by
      </p>
      <div className="overflow-hidden max-w-[656px]">
        <div className="flex space-x-8 opacity-60 animate-scroll-left">
          {/* 第一组 logos */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`first-${i}`}
              className="relative h-6 w-[80px] flex-shrink-0"
            >
              <Image
                src="/homepage/trust.svg"
                fill
                color="#00000066"
                alt={`Trusted by ${i}`}
                className="object-contain"
              />
            </div>
          ))}
          {/* 第二组 logos (重复) */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`second-${i}`}
              className="relative h-6 w-[80px] flex-shrink-0"
            >
              <Image
                src="/homepage/trust.svg"
                fill
                alt={`Trusted by ${i}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
