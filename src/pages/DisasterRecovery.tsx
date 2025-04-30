import { Link } from "react-router-dom";

export default function DisasterRecovery() {
  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 px-6 py-16 space-y-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Disaster Recovery Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Backups Aren’t Enough. True Recovery Requires More.
        </p>
      </section>

      {/* 4-Grid Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Proven Expertise",
            text: "With years of experience, ExcelyTech’s disaster recovery solutions offer a robust framework to keep your business protected and resilient, no matter the situation.",
          },
          {
            title: "Rapid Recovery",
            text: "Our disaster recovery solutions ensure quick data restoration, minimizing downtime and allowing you to get back to business swiftly.",
          },
          {
            title: "Advanced Data Protection",
            text: "We utilize advanced technology to secure your critical data, covering all aspects of backup and disaster recovery, so you’re protected from potential losses and disruptions.",
          },
          {
            title: "Seamless Integration",
            text: "ExcelyTech’s disaster recovery solutions integrate seamlessly with your infrastructure, providing extensive coverage without interrupting your business operations.",
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

      {/* Importance Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Why Disaster Recovery Matters!</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Unexpected events can have serious repercussions, especially when
          critical business data is at stake. A solid disaster recovery plan is
          essential for securing your business’s data and ensuring a fast,
          efficient response in the event of an emergency.
        </p>
      </section>

      {/* 3 Highlight Cards (Different Format) */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Minimize Downtime",
            text: "Reduce potential downtime with ExcelyTech’s rapid recovery solutions, ensuring your business operations resume smoothly, even during emergencies.",
          },
          {
            title: "Secure Sensitive Data",
            text: "Protect your valuable business data from loss or corruption with robust disaster recovery protocols that meet high security standards.",
          },
          {
            title: "Compliance and Regulation",
            text: "Stay compliant with industry regulations by leveraging advanced disaster recovery practices and security frameworks.",
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
      </section>

      {/* Why Choose ExcelyTech - Split Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Side */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Trusted Disaster Recovery Partner
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Choosing ExcelyTech means aligning with a partner well-versed in
            disaster recovery. Our expertise supports your business’s long-term
            stability by safeguarding critical data and systems.
          </p>
        </div>

        {/* Right Side Features */}
        <div className="space-y-6">
          {[
            {
              title: "Customized Solutions",
              text: "We tailor our disaster recovery plans to align with your specific business needs, ensuring comprehensive protection.",
            },
            {
              title: "Expert Support",
              text: "Our team provides continuous support, guiding you through every aspect of disaster recovery and data security.",
            },
            {
              title: "Innovative Technology",
              text: "Leveraging the latest advancements, our disaster recovery solutions guarantee swift response times and extensive data protection.",
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

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-10 md:p-16 text-center space-y-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Enjoy Peace of Mind Knowing Your Business is Protected by
              ExcelyTech!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reach out today to discover how ExcelyTech’s disaster recovery
              solutions can secure your business’s future.
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
