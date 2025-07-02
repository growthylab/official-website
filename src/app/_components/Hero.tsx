import Image from "next/image";

export const Hero = () => {
  return (
    <section className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between min-h-[585px]">
          <HeroTitle />
          <TrustedBy />
        </div>

        {/* Right Content - Feature Cards */}
        <div className="lg:w-[400px] space-y-6">
          <FeatureCard
            src="/homepage/feat1.svg"
            alt="Built for Connection"
            title="Built for Connection"
          />

          <FeatureCard
            src="/homepage/feat2.svg"
            alt="Engineered for Growth"
            title="Engineered for Growth"
          />

          <FeatureCard
            src="/homepage/feat3.svg"
            alt="Designed for Versatility"
            title="Designed for Versatility"
          />

          <FeatureCard
            src="/homepage/feat4.svg"
            alt="Crafted for Excellence"
            title="Crafted for Excellence"
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
    <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center">
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );
};

interface FeatureCardProps {
  src: string;
  alt: string;
  title: string;
}

const FeatureCard = ({ src, alt, title }: FeatureCardProps) => {
  return (
    <div className="bg-black/[0.03] backdrop-blur-sm rounded-[30px] px-[35px] py-[30px] border border-gray-200">
      <div className="flex items-center space-x-[20px]">
        <FeatIcon src={src} alt={alt} />
        <span className="font-medium text-gray-700">{title}</span>
      </div>
    </div>
  );
};

const HeroTitle = () => {
  return (
    <section className="space-y-8 flex-1">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
        Feel The <span className="text-blue-500">Midas</span> Touch.
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
        Your ultimate strategic Ads Autopilot, Engineered To Turn Every Campaign
        Into Pure Gold.
      </p>

      <button
        type="button"
        className="bg-black text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors group"
      >
        <span className="text-lg font-medium">Get Started</span>
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Arrow Right</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </section>
  );
};

const TrustedBy = () => {
  return (
    <section>
      <p className="text-gray-500 font-inter text-base font-medium leading-[30px] tracking-[0.8px] mb-8">
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
