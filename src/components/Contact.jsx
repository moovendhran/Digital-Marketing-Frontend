import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
  console.error("POST ERROR:", error);
  setStatus("❌ Backend not reachable (check server)");
}};

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left */}
        <div>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Get in Touch
  </h2>

  <p className="mt-4 text-gray-600 leading-relaxed">
    Fill out the form and we’ll contact you shortly.
    We’re happy to discuss your project and help your business grow.
  </p>

  <div className="mt-6 space-y-2 text-gray-700">
    <p>
      <span className="font-semibold">Name:</span> Muralidharan
    </p>
    <p>
      <span className="font-semibold">Email:</span> admin@gmail.com
    </p>
    <p>
      <span className="font-semibold">Phone:</span> +91 12345 67890
    </p>
    <p>
      <span className="font-semibold">Location:</span> Coimbatore, India
    </p>
  </div>
</div>

        {/* Right */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-8 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded border"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded border"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 rounded border"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
