import Image from "next/image";

export const Features = () => {
  return (
    <section className="mx-auto sm:px-6 py-24 bg-[#FAFAFB] lg:px-[120px]">
      <div className="text-left mb-16 max-w-5xl font-outfit">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111111] mb-6">
          Smarter <span className="text-blue-500">Advertising</span>, Made
          Simple.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          AI that understands your goals. Plan, launch, and scale Meta campaigns
          effortlessly — with a partner that learns, adapts, and grows with you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-[75px]">
        <FeatureCard
          title="Lightning-Fast Launch"
          imageSrc="/homepage/func1.png"
          imageAlt="Feature 1"
          imageWidth={290}
          imageHeight={234}
        />

        <FeatureCard
          title="Always-On AI Optimization"
          imageSrc="/homepage/func2.png"
          imageAlt="Feature 2"
          imageWidth={290}
          imageHeight={234}
        />

        <FeatureCard
          title="Self-improving Ad Engine"
          imageSrc="/homepage/func3.png"
          imageAlt="Feature 3"
          imageWidth={290}
          imageHeight={234}
          imageClassName="relative"
        />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  className?: string;
  imageClassName?: string;
  hasBackground?: boolean;
}

const FeatureCard = ({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  className = "",
  imageClassName = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`w-[350px] h-[310px] rounded-[30px] px-[30px] py-[24px] bg-black/[0.02] shadow-[0px_0px_1px_0px_rgba(24,24,27,0.20),0px_1px_2px_0px_rgba(24,24,27,0.10)] hover:bg-white transition-colors ${className}`}
    >
      <h3 className="text-xl hover:font-medium text-black font-inter leading-8">
        {title}
      </h3>

      <div className="h-[1px] bg-[rgba(0,0,0,0.08)] my-6" />
      <div
        className={`h-48 rounded-2xl flex items-center justify-center ${imageClassName}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );
};
