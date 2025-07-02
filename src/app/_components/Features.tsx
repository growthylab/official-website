export const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
          Smarter <span className="text-blue-500">Advertising</span>, Made
          Simple.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
          AI that understands your goals. Plan, launch, and scale Meta campaigns
          effortlessly — with a partner that learns, adapts, and grows with you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
          <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Lightning-Fast Launch</h3>
          <p className="text-gray-600">
            Get your campaigns up and running in minutes, not hours.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-200">
          <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Always-On AI Optimization
          </h3>
          <p className="text-gray-600">
            Continuous learning and optimization for better results.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-200">
          <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center relative">
            <div className="absolute inset-4 rounded-xl bg-blue-100 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Self-improving Ad Engine
          </h3>
          <p className="text-gray-600">
            Machine learning that gets smarter with every campaign.
          </p>
        </div>
      </div>
    </section>
  );
};
