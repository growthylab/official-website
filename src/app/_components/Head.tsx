"use client";

import { Logo } from "@/components/Logo";

export const Header = () => {
  const handleLoginClick = () => {
    window.open("https://admin.growthylab.ai/login", "_blank");
  };

  const handleSignupClick = () => {
    window.open("https://admin.growthylab.ai/signup", "_blank");
  };

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-all duration-300 shadow-[0_0_6px_0_rgba(0,0,0,0.15)] 
        bg-[rgba(245, 245, 247, 0.8)] backdrop-saturate-[1.8] backdrop-blur-[20px]
      `}
    >
      <div className="md:max-w-custom mx-4 xl:mx-auto">
        <div className="flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="flex items-center">
            <Logo width={115} height={27} className="mr-2" />

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
