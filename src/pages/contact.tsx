import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {
      name: formData.name.trim() ? "" : "Please enter your name.",
      email: formData.email.trim()
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? ""
          : "Please enter a valid email address."
        : "Email is required.",
      service: formData.service ? "" : "Please select a service.",
      message: formData.message.trim() ? "" : "Please write your message.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (!hasErrors) {
      // Submit logic here (e.g., API call)
      alert("Message sent successfully!");
    }
  };

  const services = [
    "Business continuity",
    "Endpoint security",
    "Disaster recovery",
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-900 px-6 py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text + Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-300 mt-2">
              How Can We Help?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Let’s start a conversation. Tell us about yourself and how we can
              assist you. Contact us and we’ll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 mt-10">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Ontario, Canada</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>289-291-6377</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-primary text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@excelytech.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border ${
                  errors.name
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border ${
                  errors.email
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Choose a Service
              </label>

              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full px-4 py-3 flex justify-between items-center rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border ${
                  errors.service
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                {formData.service || "Select a service"}
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg shadow max-h-60 overflow-auto">
                  {services.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setFormData({ ...formData, service: option });
                        setDropdownOpen(false);
                        setErrors({ ...errors, service: "" });
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white text-gray-700 dark:text-gray-200"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              {errors.service && (
                <p className="text-sm text-red-500 mt-1">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                className={`w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-white border ${
                  errors.message
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
