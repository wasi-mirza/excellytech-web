import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/excelytech-logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-700 pb-12">

        {/* Logo and Description */}
        <div className="space-y-5">
          <img src={logo} alt="Excelytech Logo" className="w-36" />
          <p className="text-sm text-slate-400 leading-relaxed">
            Excelytech offers data recovery, endpoint security, and SaaS backup solutions with 24/7 support tailored for business continuity.
          </p>
        </div>

        {/* Pages Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/services/endpoint-protection" className="hover:text-white transition">Endpoint Protection</Link></li>
            <li><Link to="/services/endpoint-security" className="hover:text-white transition">Endpoint Security</Link></li>
            <li><Link to="/services/disaster-recovery" className="hover:text-white transition">Disaster Recovery</Link></li>
            <li><Link to="/services/saas-backup" className="hover:text-white transition">SaaS Backup</Link></li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="https://portal.excelytech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Client Login</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              className=" w-full inline-block bg-primary hover:bg-primary-hover text-white px-8 py-1 rounded-lg text-lg font-medium transition duration-300"
              // className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-slate-500 mt-8">
        &copy; {new Date().getFullYear()} ExcelyTech Limited. All rights reserved.
      </div>
    </footer>
  );
}
