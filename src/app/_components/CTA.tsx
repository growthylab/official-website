import { GetStartedButton } from "./Hero";

export const CTA = () => {
  return (
    <section className="md:max-w-custom mx-4 md:mx-auto py-24">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* left */}
        <div className="flex-1 font-outfit">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#111111] mb-6 leading-[1.4] tracking-[0.02em] font-outfit maintitle">
            Try <span className="text-blue-500">Midas</span> Now.
          </h2>
          <p className="subtitle max-w-2xl">
            Your next golden campaign is one touch away.
          </p>
        </div>

        {/* right */}
        <div className="flex-shrink-0 my-[13px]">
          <GetStartedButton />
        </div>
      </div>
    </section>
  );
};
