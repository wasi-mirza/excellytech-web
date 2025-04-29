import { Link } from "react-router-dom";
import {
  FaUndo,
  FaSyncAlt,
  FaPowerOff,
  FaDatabase,
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
  FaHistory,
  FaHdd,
  FaShieldAlt,
  FaFileAlt,
  FaTools,
  FaBug,
  FaRetweet,
  FaLock,
  FaServer,
  FaPlay,
} from "react-icons/fa";

import etHero from "../assets/images/et-hero.png";
import dataLeads from "../assets/images/data-leads.jpeg";

export default function Hero() {
  return (
    <section className="text-white bg-gradient-to-br from-slate-900 to-black py-20 space-y-32">
      {/* Hero 1 */}
      <div className="spotlight-bg w-full">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 py-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Backup & Security That Works When It Matters Most!
            </h1>
            <p className="text-lg text-slate-300">
              Protect your business and lead with excellence, ensuring peace of
              mind!
            </p>
          </div>
          <img
            src={etHero}
            alt="Data Protection"
            className="w-full lg:max-w-md"
          />
        </div>
      </div>

      {/* Hero 2 */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Strengthen your business with reliable data protection
        </h2>
        <p className="text-lg text-slate-300">
          Backup, Recovery, Compliance, Intelligence, and peace of mind ensuring
          your data stays secure and accessible across platforms, anytime,
          anywhere!
        </p>
      </div>

      {/* Hero with side image */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <img
          src={dataLeads}
          alt="Business Success"
          className="w-full lg:max-w-md rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            When Data Leads, Business Success Follows.
          </h2>
          <p className="text-lg text-slate-300">
            Secure backup, instant recovery, and intelligent protection ensuring
            your data stays available, resilient, and ready to power your
            business forward.
          </p>
        </div>
      </div>

      {/* Rewind Section */}

      <div
        className="relative bg-cover bg-center py-28 px-6 text-center text-white"
        style={{ backgroundImage: "url('/images/rewind-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 z-0" />

        {/* Scattered Background Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none text-white">
          {[
            { Icon: FaUndo, className: "top-[5%] left-[8%]" },
            { Icon: FaSyncAlt, className: "top-[10%] right-[12%]" },
            { Icon: FaPowerOff, className: "top-[22%] left-[35%]" },
            { Icon: FaDatabase, className: "top-[48%] left-[10%]" },
            { Icon: FaCloudUploadAlt, className: "bottom-[22%] left-[12%]" },
            { Icon: FaCloudDownloadAlt, className: "bottom-[34%] right-[15%]" },
            { Icon: FaHistory, className: "top-[40%] right-[8%]" },
            { Icon: FaHdd, className: "top-[62%] left-[25%]" },
            { Icon: FaShieldAlt, className: "bottom-[8%] right-[10%]" },
            { Icon: FaFileAlt, className: "top-[16%] left-[60%]" },
            { Icon: FaTools, className: "bottom-[30%] left-[42%]" },
            { Icon: FaBug, className: "top-[74%] right-[28%]" },
            { Icon: FaRetweet, className: "top-[52%] right-[40%]" },
            { Icon: FaServer, className: "top-[28%] left-[18%]" },
            { Icon: FaPlay, className: "top-[12%] left-[75%]" },
            { Icon: FaPlay, className: "bottom-[10%] right-[60%]" },
            { Icon: FaUndo, className: "top-[80%] left-[6%]" },
            { Icon: FaSyncAlt, className: "bottom-[48%] right-[48%]" },
            { Icon: FaDatabase, className: "top-[38%] left-[72%]" },
            { Icon: FaLock, className: "bottom-[18%] right-[38%]" },
          ].map(({ Icon, className }, index) => (
            <Icon
              key={index}
              className={`absolute ${className} text-5xl opacity-10`}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 p-10 rounded-xl max-w-5xl mx-auto shadow-xl">
          <div className="flex justify-center gap-6 text-5xl text-primary mb-6 animate-fade-in">
            <FaUndo className="hover:scale-110 transition-transform duration-300" />
            <FaDatabase className="hover:scale-110 transition-transform duration-300" />
            <FaPlay className="hover:scale-110 transition-transform duration-300" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight animate-slide-up">
            Rewind. Restore. <span className="text-primary">Resume.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto animate-fade-in">
            Go beyond recovery—
            <span className="text-white font-semibold">seamlessly rewind</span>{" "}
            your business to the exact moment before downtime struck.
          </p>

          <a
            href="/get-started"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
          >
            Get Started Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero 1 */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              ExcelyTech Protects Every Byte, Everywhere.
            </h2>
            <p className="text-lg text-slate-300">
              From Cloud to on-prem and remote sites, we safeguard your
              workloads with seamless backup, recovery, and security — because
              every byte matters!
            </p>
            <Link
              to="/how-it-works"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition"
            >
              See How
            </Link>
          </div>

          {/* Good Enough Section */}
          <div className="space-y-6 text-center md:text-left bg-slate-800 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Good enough is never enough.
            </h2>
            <p className="text-lg text-slate-300">
              Settling for “good enough” can cost you everything. True
              resilience comes from proactive backup, seamless recovery, and
              ironclad security. Downtime, data loss, and cyber threats don’t
              wait — why should your protection? Secure every byte, every
              workload, every time. Because when it comes to your business, only
              the best backup will do.
            </p>
            <Link
              to="/learn-more"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-slate-900 py-16 px-6 sm:px-12 rounded-lg shadow-lg text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Ready to replace uncertainty with assurance?
        </h2>
        <p className="text-lg text-slate-300 max-w-xl mx-auto">
          Discover true data resilience with ExcelyTech. Let’s safeguard what
          matters most — your data, uptime, and peace of mind.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition duration-300"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
