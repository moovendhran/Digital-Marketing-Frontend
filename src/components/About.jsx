export default function About() {
  return (
    <section
      id="about"
      className="py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="About"
          className="rounded-2xl shadow"
        />

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive SEO & Digital Marketing Solutions
          </h2>

          <p className="mt-4 text-gray-600">
            We help businesses grow through data-driven SEO, PPC, and social media strategies.
          </p>

          <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
