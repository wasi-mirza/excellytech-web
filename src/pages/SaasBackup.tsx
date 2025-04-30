import { Link } from "react-router-dom";

export default function SaasBackup() {
  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 px-6 py-16 space-y-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Next-Gen SaaS Backup Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Secure Your Cloud Data with Confidence. Protecting cloud-stored data
          has become a top priority as more businesses transition to cloud-based
          applications.
        </p>
      </section>

      {/* 4-Grid Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Expert Cloud Protection",
            text: "With years of experience in data security, we offer tailored SaaS backup services that ensure your cloud data is protected from potential loss, corruption, or cyber threats.",
          },
          {
            title: "Total Data Coverage",
            text: "Our SaaS backup solutions safeguard all your essential cloud applications—whether email, storage, or collaboration tools—ensuring no data is left vulnerable.",
          },
          {
            title: "Automated Backups",
            text: "Rely on consistent and automated backups to keep your data safe, reducing manual intervention and human error in the backup process.",
          },
          {
            title: "Seamless Integration",
            text: "Our services integrate smoothly with the most widely used cloud platforms, ensuring you experience no disruption in daily operations while maintaining data security.",
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-10 md:p-16 text-center space-y-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Safeguard your business with ExcelyTech’s comprehensive SaaS
              backup solutions.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reach out today and discover how we can secure your cloud-based
              applications and ensure business continuity.
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
