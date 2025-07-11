import Image from "next/image";

export const Features = () => {
  return (
    <section className="w-full px-4 py-24 bg-[#FAFAFB]">
      <div className="max-w-custom xl:mx-auto flex flex-col justify-center items-start">
        <div className="text-left mb-16 max-w-5xl font-outfit">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111111] mb-6 maintitle">
            Smarter <span className="text-blue-500">Advertising</span>, Made
            Simple.
          </h2>
          <p className="subtitle">
            AI that understands your goals. Plan, launch, and scale Meta
            campaigns effortlessly — with a partner that learns, adapts, and
            grows with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-[75px] w-full justify-items-center">
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
          />
        </div>
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
  hasBackground?: boolean;
}

const FeatureCard = ({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`
        w-full max-w-[350px] h-[310px] 
        md:w-full md:max-w-none md:h-[280px]
        xl:w-[350px] xl:h-[310px]
        rounded-[30px] px-[30px] py-[24px] 
        bg-black/[0.02] 
        shadow-[0px_0px_1px_0px_rgba(24,24,27,0.20),0px_1px_2px_0px_rgba(24,24,27,0.10)] 
        hover:bg-white transition-colors 
        ${className}
      `}
    >
      <h3 className="text-xl hover:font-medium text-black font-inter leading-8">
        {title}
      </h3>

      <div className="h-[1px] bg-[rgba(0,0,0,0.08)] xl:my-6 my-2" />
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-[calc(100%-60px)] object-contain"
      />
    </div>
  );
};
