import { Header } from "@/app/_components/Head";
import { CTA } from "./_components/CTA";
import { Features } from "./_components/Features";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { TrustBy } from "./_components/TrustBy";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#f5f5f7]">
			{/* Header */}
			<Header />

			{/* Hero Section */}
			<Hero />

			{/* Trusted By Section */}
			<TrustBy />

			{/* Features Section */}
			<Features />

			{/* CTA Section */}
			<CTA />

			{/* Footer */}
			<Footer />
		</div>
	);
}
