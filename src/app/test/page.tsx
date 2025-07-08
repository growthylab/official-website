export default function TestPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900">MIDAS</h1>
      {/* Hero Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Turn Every Campaign Into Gold
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Midas, inspired by the Greek myth of "The Midas Touch," is a strategic
          ads autopilot to turn every campaign into pure gold.
        </p>
      </section>
      {/* Why Choose Midas Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          WHY CHOOSE MIDAS
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Built for Connection
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Midas doesn't just reach audiences—it resonates. Our platform
              empowers your business to transform ideas into campaigns that
              spark interest, drive action, and build lasting loyalty with the
              customers who matter most.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Engineered for Growth
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reach customers on the platforms that drive impact—from social
              feeds to emerging channels—unlocking access to 3 billion daily
              active users. Midas accelerates growth by making sophisticated
              advertising simple, so you can scale faster with less effort.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Designed for Versatility
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Whether you're launching a single product or managing campaigns
              across markets, Midas adapts to your goals. Harness our
              intelligent toolkit to run multi-channel campaigns that flex and
              evolve as your business grows.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Crafted for Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Powered by $5 billion in campaign expertise, Midas uses advanced
              machine learning to optimize every bid, budget, and creative in
              real time. The result: a self-improving engine that maximizes ROI
              and keeps your business ahead.
            </p>
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">KEY FEATURES</h2>

        <div className="grid md:grid-cols-1 gap-6">
          <aside className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-gray-900 mb-3">
              Lightning-Fast Launch
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Get your campaigns up and running in minutes—not days. Our
              streamlined workflow and intuitive interface cut through
              complexity, letting you concentrate on high-value strategy.
            </p>
          </aside>

          <aside className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-gray-900 mb-3">
              Always-On AI Optimization
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our intelligent algorithms continuously analyze performance data,
              delivering real-time optimizations that boost results across all
              your campaigns and channels.
            </p>
          </aside>

          <aside className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-gray-900 mb-3">
              Self-improving Ad Engine
            </h4>
            <p className="text-gray-700 leading-relaxed">
              The more you use Midas, the smarter it becomes. Our platform
              learns from every interaction to drive ever-stronger results with
              continued use.
            </p>
          </aside>
        </div>
      </section>
      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          READY TO TURN YOUR CAMPAIGNS INTO GOLD?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Start your journey with Midas today and experience the power of
          intelligent advertising.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </section>
      {/* Footer Links */}
      <footer className="border-t pt-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <strong className="text-gray-900">Join Our Team</strong>
            <span className="text-gray-500">|</span>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Careers at LEAPMIND
            </a>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a
              href="https://www.notion.so/Privacy-Policy-2293b8074a98803b9390c12478821187?pvs=21"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Privacy Policy
            </a>
            <span>© 2025 LEAPMIND. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
