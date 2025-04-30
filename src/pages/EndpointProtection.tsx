import { Link } from "react-router-dom";

export default function EndpointProtection() {
  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 px-6 py-16 space-y-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Safeguard Your Digital Assets.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Endpoint Protection is more crucial than ever. At ExcelyTech, we offer
          robust endpoint protection solutions to defend your devices against
          sophisticated cyber threats.
        </p>
      </section>

      {/* Grid of 4 Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Proven Expertise",
            text: "Leveraging over a decade of experience in the market, our solutions are designed to offer the highest level of protection.",
          },
          {
            title: "Real-Time Monitoring",
            text: "With continuous monitoring and real-time threat detection, our solutions provide proactive defense against emerging threats.",
          },
          {
            title: "Advanced Defense",
            text: "Our endpoint security solutions handle ransomware, malware, and other threats, ensuring your devices are safeguarded.",
          },
          {
            title: "Seamless Integration",
            text: "We ensure that our security solutions integrate seamlessly with your infrastructure without disrupting operations.",
          },
        ].map(({ title, text }) => (
          <div
            key={title}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
          </div>
        ))}
      </section>

      {/* Backup & Recovery Importance Section */}
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Why Backup and Recovery Matters?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Digital threats are constantly evolving…
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A strong backup and recovery solution is crucial for keeping your
            business safe and running smoothly.
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Endpoint Protection is more crucial than ever. At ExcelyTech, we
            offer robust endpoint protection solutions to defend your devices
            against sophisticated cyber threats.
          </p>
        </div>

        {/* Extra Feature Section – 3 items in a different layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Prevent Data Breaches",
              text: "Fortify your sensitive information against cybercriminals to avoid costly and damaging breaches.",
            },
            {
              title: "Maintain Business Continuity",
              text: "Keep your operations running smoothly and effortlessly, even in the face of cyber threats.",
            },
            {
              title: "Compliance and Regulation",
              text: "Achieve and maintain top-notch compliance with industry standards by implementing cutting-edge security practices.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="bg-primary text-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Side Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Partner with ExcelyTech
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            By choosing ExcelyTech, you gain a partner adept at navigating the
            complexities of Backup and Recovery. Our solutions are crafted to
            protect and empower your business in a secure digital environment.
          </p>
        </div>

        {/* Right Side Features */}
        <div className="space-y-6">
          {[
            {
              title: "Customized Solutions",
              text: "We tailor our backup and recovery services for your specific business needs.",
            },
            {
              title: "Expert Support",
              text: "Our team offers ongoing support and guidance to keep your data protection robust.",
            },
            {
              title: "Innovative Technology",
              text: "We use the latest tools to ensure your business remains resilient and future-ready.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Card-Style CTA Section */}
      <section className="py-20 px-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-10 md:p-16 text-center space-y-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Experience Peace Of Mind Knowing That Your Data Is Protected By
              Us!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn more about how we can help secure your
              valuable data.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-hover transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
