export const TrustBy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-center text-gray-500 mb-8">Trusted by</p>
      <div className="flex justify-center items-center space-x-8 opacity-60">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-20 h-6 bg-gray-300 rounded"></div>
        ))}
      </div>
    </section>
  );
};
