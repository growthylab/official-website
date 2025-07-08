"use client";
import { Logo } from "@/components/Logo";
import { useIsHomePage } from "@/hooks/useIsHomePage";

export const Footer = () => {
  const isHomePage = useIsHomePage();
  const bgColor = isHomePage ? "bg-white/50" : "bg-bgGray";
  return (
    <footer className={bgColor}>
      <div className="md:max-w-custom mx-4 xl:mx-auto py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="">
            <div className="text-2xl font-semibold text-black mb-[27px]">
              <Logo width={102} height={25} className="mr-2" />
            </div>
            <p className="text-gray-600 max-w-[574px]">
              Midas, inspired by the Greek myth of "The Midas Touch," is a
              strategic ads autopilot to turn every campaign into pure gold.
            </p>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_100px] lg:mt-0 mt-6 lg:gap-14 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Media Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    Join Discord
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 text-right text-gray-500 text-sm font-inter font-normal leading-[1.6]">
          <p>Copyright © 2025 MIDAS</p>
        </div>
      </div>
    </footer>
  );
};
