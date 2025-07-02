export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="title.svg" alt="MIDAS" className="h-8 w-16 mr-2" />

            {/* <div className="text-2xl font-semibold text-black">MIDAS</div> */}
          </div>

          {/* Navigation */}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-gray-800 hover:text-blue-500 transition-colors">
              Log in
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
