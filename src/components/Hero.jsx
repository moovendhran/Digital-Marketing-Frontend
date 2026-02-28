export default function Hero() {
  return (
    <section className="pt-24 min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm">
            Top SEO & Marketing Agency
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Elevate Your Brand with Expert SEO & Digital Marketing
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Grow traffic, leads and sales with proven digital strategies.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
              Start Ranking Now
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              Contact Now
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Marketing"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
