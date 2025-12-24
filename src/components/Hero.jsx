import { Calendar, CircleDot } from "lucide-react";

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

      {/* ============ OUTER CONTAINER (ENTIRE LAYER) ============ */}

      <div
        className="
          relative
          mx-auto max-w-7xl px-4 mt-20
          border border-white/10
          rounded-2xl
          bg-black/30
          backdrop-blur-xl
          p-3
          overflow-hidden
        "
      >
        {/* Fade to black gradient overlay for entire container */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none rounded-2xl z-20" />

        {/* ============ INNER GRADIENT WRAPPER ============ */}
        <div
          className="
            relative
            rounded-xl
            border border-white/10
            bg-gradient-to-r from-black/50 via-[#180728] to-black/50
            flex
            overflow-hidden
          "
        >
          {/* ================= SIDEBAR ================= */}
          <div
            className="
              w-64
              border-r border-white/10
              p-4
              text-left
              flex flex-col
            "
          >
            {/* Browser dots */}
            <div className="flex gap-1 mb-20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>

            {/* Sidebar menu */}
            <div className="flex flex-col gap-2">
              {[
                "Site Overview",
                "Analytics",
                "Smart Keyword Generator",
                "Goals",
                "Content Evaluation",
                "Backlink Audit",
                "Link Optimization Wizard",
              ].map((item) => (
                <div
                  key={item}
                  className="text-[14px] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ================= MAIN PANEL ================= */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex flex-col items-start">
                <span className="text-[14px] font-medium text-white">
                  Site Overview
                </span>
                <span className="text-[12px] text-gray-400">
                  www.website.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="
                    w-40
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-3 py-1.5
                    text-[13px]
                    text-white
                    placeholder:text-gray-500
                    focus:outline-none
                    focus:ring-1 focus:ring-purple-500/40
                  "
                />
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/50 flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-400 rotate-45" />
                </div>
              </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="p-6">
              {/* Date pill */}
              <div className="border border-white/10 text-white rounded-xl p-2 flex gap-2 max-w-max cursor-pointer hover:bg-white/10 text-[13.5px]">
                <Calendar size={16} className="text-white/70" />
                Jun 24 – Today
              </div>

              {/* ===== STAT CARDS ROW ===== */}
              <div className="flex gap-4 mt-4 items-stretch">
                {/* ===== CARD 1 ===== */}
                <div className="border border-white/10 rounded-xl p-4 flex-1 flex flex-col gap-3 cursor-pointer hover:bg-white/2">
                  <div className="flex flex-col ">
                    <h2 className="text-[13px] text-gray-400 text-left mb-2">
                      Visibility
                    </h2>
                    <h1 className="text-[35px] text-white font-semibold text-left">
                      10.5%
                      <span className="text-red-500 text-[13px] ml-2">-5%</span>
                    </h1>
                  </div>

                  {/* Graph */}
                  <div className="relative border border-white/10 rounded-2xl bg-white/5 p-6 h-[300px] overflow-hidden">
                    {/* 1. TEXT HEADER */}
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-gray-500 hover:text-white cursor-pointer">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* 2. THE GRAPH AREA */}
                    <div className="relative h-30 w-full mt-8">
                      <svg
                        viewBox="0 0 300 100"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full"
                      >
                        <defs>
                          <linearGradient
                            id="graphGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(168, 85, 247, 0.4)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(168, 85, 247, 0)"
                            />
                          </linearGradient>
                        </defs>
                        {/* Shaded Area */}
                        <path
                          d="M 0 80 L 50 60 L 100 75 L 150 40 L 200 85 L 250 30 L 300 70 V 100 H 0 Z"
                          fill="url(#graphGradient)"
                        />
                        {/* Glowing Line */}
                        <path
                          d="M 0 80 L 50 60 L 100 75 L 150 40 L 200 85 L 250 30 L 300 70"
                          stroke="rgb(168, 85, 247)"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>

                      {/* 3. TOOLTIP & INDICATOR (Positioned at X:50% Y:40%) */}
                      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        {/* THE TOOLTIP BOX */}
                        <div className="mb-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-2xl min-w-[120px]">
                          <div className="text-[10px] text-gray-400 mb-1">
                            Jun 18
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              <span className="text-[11px] text-gray-300">
                                Visibility
                              </span>
                            </div>
                            <span className="text-[11px] font-bold text-white">
                              9.8%
                            </span>
                          </div>
                        </div>

                        {/* THE GLOWING DOT */}
                        <div className="relative">
                          <div className="w-3 h-3 bg-white rounded-full border-2 border-purple-500 z-10 relative" />
                          <div className="absolute inset-0 w-3 h-3 bg-purple-500 rounded-full blur-sm animate-pulse" />
                        </div>

                        {/* VERTICAL INDICATOR LINE */}
                        <div className="w-[1px] h-32 bg-gradient-to-b from-white/50 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== CARD 2  ===== */}
                <div className="border border-white/10 rounded-xl p-4 flex-1 flex flex-col gap-3 cursor-pointer hover:bg-white/2">
                  <h2 className="text-[13px] text-gray-400 text-left">
                    Organic Keywords
                  </h2>
                  <h1 className="text-[35px] text-white font-semibold text-left">
                    24.1k
                    <span className="text-green-500 text-[13px] ml-2">
                      +8.8%
                    </span>
                  </h1>
                  <h2 className="text-[15px] text-white text-left pt-3">Top Keywords</h2>
                  {[
                    "online payment processing",
                    "secure transactions",
                    "online payment gateway",
                    "online payment processing",
                    "e-commerce payment gateway",
                    "B2B payment processing",
                    "safe online payments",
                    "better payment gateway",
                  ].map((item, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2 ">
                        <div>
                          <CircleDot size={13} color="gray" />
                        </div>
                        <p className="text-left text-[13px] text-gray-400">
                          {item}
                        </p>
                        <div className="text-right ">...</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border border-white/10 rounded-xl p-4 w-full flex flex-col cursor-pointer hover:bg-white/2 mt-4">
                <div className="flex flex-col">
                  <h2 className="text-[13px] text-gray-400 text-left">
                    Traffic
                  </h2>
                  <h1 className="text-[35px] text-white font-semibold text-left">
                    43.1k
                    <span className="text-green-500 text-[13px] ml-2">
                      +6.8%
                    </span>
                  </h1>
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
