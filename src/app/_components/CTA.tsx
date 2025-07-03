import { GetStartedButton } from "./Hero";

export const CTA = () => {
  return (
    <section className="max-w-custom mx-auto sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
        {/* left */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6 leading-[1.4] tracking-[0.02em] font-outfit">
            Try <span className="text-blue-500">Midas</span> Now.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            Your next golden campaign is one touch away.
          </p>
        </div>

        {/* right */}
        <div className="flex-shrink-0">
          <GetStartedButton />
        </div>
      </div>
    </section>
  );
};
