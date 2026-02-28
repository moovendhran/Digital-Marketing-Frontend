import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/digital", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc }),
      });

      if (!res.ok) throw new Error("Failed to add blog");

      setTitle("");
      setDesc("");
      setMessage("Blog added successfully ✅");
    } catch (err) {
      setMessage("Error adding blog ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-24 min-h-screen bg-slate-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin – Add Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-600"
          />

          <textarea
            rows="5"
            placeholder="Blog Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-600"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded font-semibold"
          >
            {loading ? "Adding..." : "Add Blog"}
          </button>

          {message && (
            <p className="text-center mt-4 font-medium">
              {message}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
