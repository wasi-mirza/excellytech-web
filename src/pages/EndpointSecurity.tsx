import { Link } from "react-router-dom";

export default function EndpointSecurity() {
  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100 px-6 py-16 space-y-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Unparalleled Endpoint Security
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Guard Your Network at Every Entry Point. In today’s digital landscape,
          securing every Endpoint is critical to protecting your business from
          cyber threats. ExcelyTech offers cutting-edge endpoint security
          solutions that safeguard your devices against the most sophisticated
          attacks.
        </p>
      </section>

      {/* 4-Grid Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Deep Industry Knowledge",
            text: "Backed by over three decades of cybersecurity experience, our endpoint security solutions are crafted to offer uncompromising protection.",
          },
          {
            title: "Effortless Integration",
            text: "Our solutions integrate seamlessly with your existing infrastructure, enhancing security without interrupting operations.",
          },
          {
            title: "Innovative Threat Protection",
            text: "We deploy advanced techniques to neutralize threats like malware, ransomware, and phishing, ensuring your devices stay secure.",
          },
          {
            title: "Proactive Monitoring",
            text: "With continuous oversight and rapid threat response, our services keep endpoints resilient against emerging risks.",
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

      {/* Importance Block */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">
          The Critical Need for Endpoint Security
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Endpoints are often the weakest link in a security chain. Protecting
          these vulnerable access points is essential for maintaining the
          overall security of your organization.
        </p>
      </section>

      {/* 3 Feature Items (Different Design) */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Block Unauthorized Intrusions",
            text: "Prevent unauthorized access to your systems by securing every device that connects to your network.",
          },
          {
            title: "Ensure Operational Continuity",
            text: "Minimize the risk of disruptions caused by cyberattacks, keeping your business running smoothly and efficiently.",
          },
          {
            title: "Meet Regulatory Requirements",
            text: "Comply with industry-specific regulations by implementing robust endpoint security measures that protect sensitive information.",
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

      {/* Why Choose ExcelyTech Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Side */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose ExcelyTech?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            At ExcelyTech, we offer more than just endpoint protection—we
            deliver a comprehensive security strategy that enhances your entire
            digital environment. Our expertise in cybersecurity ensures that
            your business remains protected and resilient in the face of
            evolving threats.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {[
            {
              title: "Customized Security Solutions",
              text: "We tailor our endpoint security services to meet the specific demands of your business, ensuring optimal protection.",
            },
            {
              title: "Expert Guidance",
              text: "Our team of security professionals provides continuous support, ensuring that your security measures are always effective and up to date.",
            },
            {
              title: "Leading-Edge Technology",
              text: "We use the latest advancements in cybersecurity to deliver robust endpoint protection that anticipates and mitigates threats.",
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

      {/* Optional Call-to-Action (reuse previous section) */}
      <section className="py-20 px-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-10 md:p-16 text-center space-y-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Strengthen your defence with ExcelyTech!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fortify your business with ExcelyTech’s comprehensive endpoint
              security solutions. Contact us today to discover how we can help
              you achieve complete protection across all your devices.
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
