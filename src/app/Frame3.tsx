import React from "react";

export const Frame3 = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Complex gradient background */}
      <div 
        className="absolute inset-0 bg-white"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 100% 100%, rgba(31,92,140,1) 0%, rgba(54,128,188,0.5) 50%, rgba(77,163,236,0) 100%),
            radial-gradient(ellipse at 100% 0%, rgba(232,32,33,1) 0%, rgba(241,61,21,1) 25%, rgba(250,89,9,1) 50%, rgba(251,105,33,0.75) 63%, rgba(253,122,56,0.5) 75%, rgba(255,154,104,0) 100%),
            radial-gradient(ellipse at 100% 56%, rgba(130,29,53,1) 0%, rgba(186,35,61,0.5) 50%, rgba(241,40,68,0) 100%),
            radial-gradient(ellipse at 75% 4%, rgba(250,211,9,1) 0%, rgba(250,211,9,0) 100%),
            radial-gradient(ellipse at 100% 93%, rgba(77,163,236,1) 0%, rgba(77,163,236,0) 100%)
          `
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 lg:py-16">
        <div className="w-full max-w-[1300px] mx-auto">
          {/* Layered card background effect */}
          <div className="relative">
            {/* Third layer - most background */}
            <div className="absolute inset-0 bg-white/25 backdrop-blur-[10px] rounded-[60px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.05)] transform translate-y-[50px] hidden lg:block" />
            
            {/* Second layer */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[10px] rounded-[60px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.05)] transform translate-y-[25px] hidden md:block" />
            
            {/* Main content card */}
            <div className="relative bg-white/85 backdrop-blur-[10px] rounded-[40px] lg:rounded-[60px] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.05)] p-6 lg:p-12 xl:p-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Left content */}
                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[50px] font-bold text-[#1a3478] leading-tight tracking-[2.5px]">
                    1 Minute, 1 Campaign
                  </h1>
                  
                  <div className="space-y-4 text-[#565656] text-lg lg:text-xl leading-relaxed">
                    <p>
                      No more complicated setups. Just drop your product link and assets—Midas auto-generates optimized targeting, ad structure, and creative settings.
                    </p>
                    <p>
                      Enjoy launching enterprise-grade campaigns in one click and cut setup time by 98%.
                    </p>
                  </div>
                </div>

                {/* Right content - Dashboard mockup */}
                <div className="relative">
                  {/* Creative sets panel */}
                  <div className="relative z-20 mb-8 lg:mb-0">
                    <div className="bg-gradient-to-br from-[#e6f4ff] to-[#f9f0ff] border-2 border-white rounded-[20px] p-6 w-full max-w-[340px] mx-auto lg:mx-0">
                      <h3 className="text-sm font-semibold text-zinc-800 mb-4">Creatives</h3>
                      
                      <div className="space-y-3">
                        {['Ad Set - 01', 'Ad Set - 02', 'Ad Set - 03'].map((item, index) => (
                          <div 
                            key={index}
                            className="bg-white/45 border border-white rounded-lg px-4 py-3"
                          >
                            <p className="text-sm text-[rgba(0,0,0,0.88)]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone mockup */}
                  <div className="absolute top-0 right-0 lg:right-[-50px] xl:right-[-100px] transform rotate-12 hidden lg:block">
                    <div className="bg-white/45 border-2 border-white rounded-[20px] w-[268px] h-[342px] relative overflow-hidden">
                      {/* Phone header */}
                      <div className="p-4 border-b border-white/30">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-xs">🦉</span>
                          </div>
                          <span className="text-xs text-zinc-600">Username</span>
                        </div>
                      </div>
                      
                      {/* Phone content area */}
                      <div className="relative h-[226px] bg-gradient-to-br from-blue-50 to-purple-50">
                        {/* Mock content */}
                        <div className="absolute inset-4 bg-white/30 rounded-lg" />
                        
                        {/* Social media icons */}
                        <div className="absolute bottom-4 left-4 flex space-x-2">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-xs">♥</span>
                          </div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-xs">💬</span>
                          </div>
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-xs">✈</span>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-4 right-4">
                          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-xs">👍</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating cursor/pointer element */}
                  <div className="absolute top-[60px] right-[40px] lg:right-[120px] xl:right-[160px] transform rotate-[-20deg] z-30">
                    <div className="w-12 h-16 relative">
                      {/* Simple cursor representation */}
                      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#ffad39]" />
                      <div className="absolute top-[8px] left-[6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
