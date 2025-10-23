import React from "react";

export default function WarmUpSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 md:py-16 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://sporto-theme.myshopify.com/cdn/shop/files/grid-img_copy_36de4195-5216-41a4-8705-32f0a5236f9f_600x.png?v=1638868419"
          alt="Athlete preparing to run"
          className="w-[90%] md:w-auto object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
        <p className="text-sm font-semibold text-gray-800 tracking-wider mb-3">
          DEFENSE WINS
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 leading-tight mb-6">
          OUR WARM UP IS YOUR WORK OUT
        </h2>

        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>

        {/* Features */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-5">
            <img
              src="https://sporto-theme.myshopify.com/cdn/shop/files/Icon1_medium.png?v=1640323766"
              alt="Reach Further Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">REACH FURTHER</h3>
              <p className="text-gray-700">
                Pellentesque diam sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <img
              src="https://sporto-theme.myshopify.com/cdn/shop/files/Icon2_medium.png?v=1640323803"
              alt="Best Quality Icon"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">BEST QUALITY</h3>
              <p className="text-gray-700">
                Scelerisque varius sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
