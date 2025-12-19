import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-[#0d0f18] shadow-lg border-b border-[#1a1f2e] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
          Career<span className="text-white">Bridge</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-white font-medium">

          <Link to="/jobs" className="hover:text-blue-400 transition">Jobs</Link>

          <Link to="/resume" className="hover:text-blue-400 transition">Resume AI</Link>

          <Link to="/job-ai" className="hover:text-blue-400 transition">Job AI</Link>

          <Link to="/interview-ai" className="hover:text-blue-400 transition">Interview AI</Link>

          <Link to="/career-guide" className="hover:text-blue-400 transition">Career Guide</Link>

          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
              <Link to="/register" className="hover:text-blue-400 transition">Register</Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="text-red-400 hover:text-red-300 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
