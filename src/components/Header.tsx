import { Link } from "react-router-dom";
import { useState } from "react";
import etLogo from "../../public/excelytech-logo.png";
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

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
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Services
              </button>

              <div
                className={`absolute top-full mt-2 bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 w-56 border border-slate-200 dark:border-slate-700 z-10 transition-all duration-150 ${
                  showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link
                  to="/services/endpoint-protection"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Endpoint Protection
                </Link>
                <Link
                  to="/services/endpoint-security"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Endpoint Security
                </Link>
                <Link
                  to="/services/disaster-recovery"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Disaster Recovery
                </Link>
                <Link
                  to="/services/saas-backup"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  SaaS Backup
                </Link>
              </div>
            </div>

            <Link
              to="/blogs"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu placeholder */}
          <button className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
