import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/digital")
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-2 text-gray-600">
            Latest updates, tips, and insights from our digital marketing experts.
          </p>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading blogs...</p>
        )}

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-400">{blog.date}</p>

              <h2 className="mt-2 text-xl font-bold">
                {blog.title}
              </h2>

              <p className="mt-3 text-gray-600 text-sm">
                {blog.desc}
              </p>

              <button className="mt-4 text-indigo-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}
