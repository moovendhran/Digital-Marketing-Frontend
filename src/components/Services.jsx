const services = [
  { title: "SEO Optimization", bg: "bg-pink-100" },
  { title: "PPC Advertising", bg: "bg-blue-100" },
  { title: "Social Media Marketing", bg: "bg-green-100" },
  { title: "Web Design & Development", bg: "bg-yellow-100" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-slate-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Popular Digital Marketing Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.bg} p-6 rounded-xl transition transform hover:scale-105 hover:shadow-lg`}
            >
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Boost your online presence and conversions.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
