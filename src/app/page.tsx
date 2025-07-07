import { CTA } from "./_components/CTA";
import { Features } from "./_components/Features";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Head";
import { Hero } from "./_components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
