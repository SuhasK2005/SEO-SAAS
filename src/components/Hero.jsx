const Hero = () => {
  return (
    <div className="text-center bg-radial from-purple-950 to-black pt-20 pb-20">
      <div className="border border-[#262527] bg-black rounded-full flex items-center justify-center px-3 py-2 gap-2 mx-auto max-w-max">
        <span className="border rounded-full px-1.5 py-0.5 bg-[#9855ff] text-[10px] font-bold">
          NEW
        </span>
        <p className="text-base font-normal text-[#9855ff]">
          Latest integration just arrived
        </p>
      </div>

      <div>
        <h1 className="text-8xl tracking-tight font-sans font-semibold text-white">
          Boost your
          <br />
          <span className="bg-clip-text bg-linear-to-b text-transparent from-white to-purple-500">
            rankings with AI.
          </span>
        </h1>
      </div>

      <div className="pt-5">
        <p className="text-white text-2xl px-95">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
      </div>
      <div className="border border-white rounded-xl px-1 py-1 max-w-max flex items-center justify-center mx-auto mt-8 mb-15">
        <button className="border border-[#262527] rounded-xl px-4 py-2 text-black bg-white cursor-pointer">
          Start for free
        </button>
      </div>

      <div className="border border-[#262527] shadow-[0_0_95px_rgba(152,85,255,0.5)] rounded-xl px-2 py-2 mx-10">
        <div className="border border-[#262527] rounded-xl bg-black/50">
          <div className="grid grid-cols-[250px_400px]">
            {/* Left Column */}
            <div className="border-r border-[#262527] px-3 py-3">
              <div className="flex gap-1 mb-9">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>

              <div className="text-left">
                <ul className="text-white">
                  <li className="cursor-pointer mb-3 px-3 py-2 rounded-xl border-none hover:bg-gray-700/20 hover:border-[#262527]">
                    Site Overview
                  </li>
                  <li className="cursor-pointer mb-3 px-3 py-2 rounded-xl border-none hover:bg-gray-700/20 hover:border-[#262527]">
                    Site Overview
                  </li>
                  <li className="cursor-pointer mb-3 px-3 py-2 rounded-xl border-none hover:bg-gray-700/20 hover:border-[#262527]">
                    Site Overview
                  </li>
                  <li className="cursor-pointer mb-3 px-3 py-2 rounded-xl border-none hover:bg-gray-700/20 hover:border-[#262527]">
                    Site Overview
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-max">
              <div className="flex items-start px-3 py-3">
                <div className="mr-148">
                  <h2 className="text-white text-xl font-semibold">
                    Site Overview
                  </h2>
                  <p className="text-gray-500 cursor-pointer">
                    www.website.com
                  </p>
                </div>
                <div className="flex gap-3">
                  <input
                    className="border border-gray-500 rounded-xl px-2 py-1 text-white"
                    type="text"
                    placeholder="Search"
                  />
                  <img className="h-10" src="/demologo.png" alt="logo" />
                </div>
              </div>
              <div className="border border-[#262527] mx-3"></div>

              <div className="flex border border-[#262527] rounded-xl max-w-max mx-3 px-3 py-2 mt-7">
                <p className="text-white">Jun 24 → Today</p>
              </div>

              <div className="grid grid-cols-2 mt-7">
                <div className="border mx-3 border-[#262527] rounded-xl px-3 py-3">
                  <div className="flex flex-col items-start">
                    <h2 className="text-gray-400 text-xl font-light mb-2">
                      Visibility
                    </h2>
                    <p className="text-white text-4xl font-semibold">
                      10.15%
                      <span className="text-green-600 text-sm"> +5.6%</span>
                    </p>
                  </div>
                </div>
                <div className="border mx-3 border-[#262527] rounded-xl px-3 py-3">
                  <div className="flex flex-col items-start">
                    <h2 className="text-gray-400 text-xl font-light mb-2">
                      Organic Keywords
                    </h2>
                    <p className="text-white text-4xl font-semibold mb-7">
                      35.6K
                      <span className="text-red-500 text-sm"> -2.5%</span>
                    </p>
                    <h3 className="text-white mb-1">Top Keywords</h3>
                    <p className="text-gray-400 mb-1">
                      ◉ online payment processing
                    </p>
                    <p className="text-gray-400 mb-1">
                      ◉ secure transactions online
                    </p>
                    <p className="text-gray-400 mb-1">◉ transaction platform</p>
                    <p className="text-gray-400 mb-1">
                      ◉ online shopping payments
                    </p>
                    <p className="text-gray-400 mb-1">
                      ◉ e-commerce payment gateway
                    </p>
                    <p className="text-gray-400 mb-1">
                      ◉ B2B payment processing
                    </p>
                    <p className="text-gray-400 mb-1">◉ safe online payments</p>
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

export default Hero;
