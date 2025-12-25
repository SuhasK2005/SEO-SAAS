import circular from "../assets/circular-thing.png";
import conical from "../assets/conical-thing.png";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";

export default function Features() {
  return (
    <section className="bg-black pt-5 text-white">
      <h2 className="text-center text-3xl font-medium">
        Harness the power of AI, making <br />
        search engine optimization intuitive <br />
        and effective for all skill levels.
      </h2>
      <div className="grid grid-cols-12 gap-3 px-24 pt-8">
        <div className="col-span-4 rounded-2xl border border-white/10 p-8">
          <div className="flex justify-center">
            <img src={circular} className="w-50"/>
          </div>
          <h2 className="font-bold pt-8">SEO Goal Setting</h2>
          <p className="pt-3">
            Helps you set and achieve SEO <br /> goals with guided assistance.
          </p>
        </div>
        <div className="h-85 w-full col-span-8 border border-white/10 rounded rounded-3xl z-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-transparent"></div>
          <div
            style={{ backgroundImage: `url(${graph1})` }}
            className="absolute inset-0 bg-cover bg-center opacity-80"
          ></div>
          <div className="relative p-8 pt-55 z-10">
            <h2 className="font-bold">User-friendly dashboard</h2>
            <p className="pt-3">
              Perform complex SEO audits and <br />
              optimizations with a single click.
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${graph2})` }}
          className="w-full h-85 col-span-8 border border-white/10 rounded rounded-3xl"
        >
          <div className="absolute p-8 pt-55">
            <h2 className="font-bold">Visual Reports</h2>
            <p className="pt-3">
              Visual insights into your <br />
              site’s performance.
            </p>
          </div>
        </div>
        <div className="col-span-4 h-85 rounded-2xl border border-white/10 p-8">
          <div className="flex justify-center">
            <img src={conical} className="w-40"/>
          </div>
          <h2 className="font-bold pt-8">Smart Keyword Generator</h2>
          <p className="pt-3">
            Automatic suggestions and <br />
            the best keywords to target.
          </p>
        </div>
      </div>
    </section>
  );
}
