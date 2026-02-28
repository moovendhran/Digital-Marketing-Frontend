import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          DigitalMarketing
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>

          <li>
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-indigo-600">
              Services
            </a>
          </li>

          <li>
            <Link to="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </li>

          {/* Admin Link */}
          {token && role === "admin" && (
            <li>
              <Link to="/admin" className="text-indigo-600 font-semibold">
                Admin
              </Link>
            </li>
          )}

          {/* Logout */}
          {token && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
 