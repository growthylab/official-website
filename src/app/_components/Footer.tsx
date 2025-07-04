import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-white/50">
      <div className="max-w-custom mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-semibold text-black mb-[27px]">
              <Image
                src="title.svg"
                alt="MIDAS"
                className="mr-2"
                width={102}
                height={25}
              />
            </div>
            <p className="text-gray-600 max-w-[574px]">
              Midas, inspired by the Greek myth of "The Midas Touch," is a
              strategic ads autopilot to turn every campaign into pure gold.
            </p>
          </div>

          {/* <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Cultivate</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Convert</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Empower</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Expand</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Company</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
              </ul>
            </div> */}
        </div>

        <div className="mt-12 pt-8 text-right text-gray-500 text-sm font-inter font-normal leading-[1.6]">
          <p>Copyright © 2025 MIDAS</p>
        </div>
      </div>
    </footer>
  );
};
