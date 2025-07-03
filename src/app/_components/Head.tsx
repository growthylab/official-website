"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    window.open("https://admin.growthylab.ai/login", "_blank");
  };

  const handleSignupClick = () => {
    window.open("https://admin.growthylab.ai/signup", "_blank");
  };

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300 shadow-[0_0_6px_0_rgba(0,0,0,0.15)]
        ${
          isScrolled
            ? "bg-[rgba(246,246,246,0.36)] backdrop-blur-[68px] [mix-blend-mode:luminosity]"
            : "bg-white"
        }
      `}
    >
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/title.svg"
              alt="MIDAS"
              width={115}
              height={27}
              className="mr-2"
            />

            {/* <div className="text-2xl font-semibold text-black">MIDAS</div> */}
          </div>

          {/* Navigation */}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-[50px]">
            <button
              type="button"
              onClick={handleLoginClick}
              className="hidden sm:block text-gray-800 hover:text-blue-500 transition-colors"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={handleSignupClick}
              className="bg-black text-white w-[136px] h-[50px] py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
