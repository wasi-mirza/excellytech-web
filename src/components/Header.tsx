import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import etLogo from "../../public/excelytech-logo.png";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="hover:scale-105 transition-transform">
            <img src={etLogo} alt="Excelytech Logo" className="w-36" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">About Us</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
                Services
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-2 bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 w-56 border border-slate-200 dark:border-slate-700 z-10">
                  <Link to="/services/endpoint-protection" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">Endpoint Protection</Link>
                  <Link to="/services/endpoint-security" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">Endpoint Security</Link>
                  <Link to="/services/disaster-recovery" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">Disaster Recovery</Link>
                  <Link to="/services/saas-backup" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">SaaS Backup</Link>
                </div>
              )}
            </div>

            <Link to="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Blogs</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">Contact Us</Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition"
              aria-label="Toggle theme"
            >
              {isDark ? (
                // Sun icon
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25zM10 13a3 3 0 100-6 3 3 0 000 6zm6.75-3a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5a.75.75 0 01.75-.75zM4 10a.75.75 0 010 1.5H3.5a.75.75 0 010-1.5H4zM16.03 5.47a.75.75 0 010 1.06l-.354.354a.75.75 0 01-1.06-1.06l.354-.354a.75.75 0 011.06 0zM5.47 16.03a.75.75 0 010-1.06l.354-.354a.75.75 0 011.06 1.06l-.354.354a.75.75 0 01-1.06 0zM5.47 5.47a.75.75 0 011.06 0l.354.354a.75.75 0 11-1.06 1.06l-.354-.354a.75.75 0 010-1.06zM16.03 16.03a.75.75 0 01-1.06 0l-.354-.354a.75.75 0 011.06-1.06l.354.354a.75.75 0 010 1.06z" />
                </svg>
              ) : (
                // Moon icon
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293a8 8 0 01-10.586-10.586 8.001 8.001 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu placeholder */}
          <button className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
