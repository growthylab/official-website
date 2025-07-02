export const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
        Try <span className="text-blue-500">Midas</span> Now.
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Your next golden campaign is one touch away.
      </p>
      <button className="bg-black text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors group mx-auto">
        <span className="text-lg font-medium">Get Started</span>
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
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
