import { useState } from "react";
import { faqs } from "../data/faq_data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import vision from "../assets/images/vision-about.png";
import goal from "../assets/images/goal-about.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number | null) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-black text-white px-4 py-24 space-y-24">
      {/* Intro */}
      <section className="max-w-6xl mx-auto text-center space-y-6 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to ExcelyTech!
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          At ExcelyTech, we specialize in{" "}
          <span className="text-white font-semibold">data protection</span> and{" "}
          <span className="text-white font-semibold">system security</span>,
          ensuring your business-critical data remains secure, accessible, and
          resilient.
        </p>
      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <img
          src={vision}
          alt="Vision"
          className="w-full md:w-1/4 max-w-sm rounded-xl shadow-lg object-cover"
          />
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold">Our Vision of Excellence</h3>
          <p className="text-slate-300 text-lg">
            Empowering success through{" "}
            <span className="text-white font-semibold">Excellence</span>.
          </p>
          <p className="text-slate-300 text-lg">
            We embrace{" "}
            <span className="text-white font-semibold">innovation</span>,{" "}
            <span className="text-white font-semibold">precision</span>, and{" "}
            <span className="text-white font-semibold">reliability</span>.
          </p>
          <p className="text-slate-300 text-lg">
            Your trusted partner in{" "}
            <span className="text-white font-semibold">
              Operational Excellence
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">Business Resilience</span>
            .
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 px-4">
        <img
          src={goal}
          alt="Mission"
          className="w-full md:w-1/4 max-w-sm rounded-xl shadow-lg object-cover"
          />
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold">Our Mission for Your Success</h3>
          <p className="text-slate-300 text-lg">
            Delivering{" "}
            <span className="text-white font-semibold">cutting-edge</span>{" "}
            solutions in:
            <br />
            <span className="text-white">
              Data Protection, Endpoint Security, SaaS Backup, and Disaster
              Recovery.
            </span>
          </p>
          <p className="text-slate-300 text-lg">
            We ensure your data is always{" "}
            <span className="text-white font-semibold">secure</span>,{" "}
            <span className="text-white font-semibold">accessible</span>, and{" "}
            <span className="text-white font-semibold">protected</span>.
          </p>
        </div>
      </section>

      {/* How We Do It */}
      <section className="max-w-6xl mx-auto text-center px-4 space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold">How We Do It?</h2>
        <p className="text-lg text-slate-300">
          The New Standard for Cyber Resilience
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {[
          {
            title: "Endpoint Protection",
            description:
              "We leverage cutting-edge technology to ensure data security, backup, and recovery.",
          },
          {
            title: "Endpoint Security",
            description:
              "Shielding your systems from threats like ransomware and malware using industry-leading tools.",
          },
          {
            title: "Disaster Recovery",
            description:
              "Minimizing downtime with solutions that ensure uninterrupted business continuity.",
          },
          {
            title: "SaaS Backup",
            description:
              "Securing SaaS data to maintain consistent, resilient business operations.",
          },
        ].map((item, index) => (
          <Link
          key={index}
          to={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
          className=" cursor-pointer bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-180 transition duration-300"
        >
          <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
          <p className="text-slate-300 mb-4">{item.description}</p>
          <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition">
            Learn More →
          </button>
        </Link>
        
        ))}
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            <span className="text-white font-semibold">24/7 support</span> from
            our expert team to ensure your peace of mind.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left ${
                    isOpen ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-indigo-400">
                    {isOpen ? (
                      <FaChevronUp size={20} />
                    ) : (
                      <FaChevronDown size={20} />
                    )}
                  </span>
                </button>
                <div
                  className={`px-6 text-slate-300 transition-all duration-300 ${
                    isOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic Message */}
      <section className="max-w-6xl mx-auto text-center px-4 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Resilience Beyond Boundaries
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          Navigate the storm of IT complexity with{" "}
          <span className="text-white font-semibold">cutting-edge data protection</span>,{" "}
          <span className="text-white font-semibold">intelligent automation</span>, and{" "}
          <span className="text-white font-semibold">proactive security</span>.
        </p>
        <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          We minimize downtime and secure your mission-critical operations against evolving threats.
        </p>
      </section>
    </div>
  );
}
