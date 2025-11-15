// ...existing code...
import React from "react";

export default function ContactPage() {
  const stats = [
    { icon: "⭐", number: "5+", label: "Projects Completed" },
    { icon: "⏱️", number: "24h", label: "Response Time" },
    { icon: "🎯", number: "2+", label: "Years Experience" },
  ];

  const contactItems = [
    {
      icon: "📧",
      title: "Email",
      value: "example@gmail.com",
      linkText: "Send me an email →",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "(+251) 900-000-000",
      linkText: "Give me a call →",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      linkText: "Available for remote work →",
    },
  ];

  const faqList = [
    {
      q: "What types of projects do you work on?",
      a: "I focus on full-stack web development, modern UI builds, API development, and cloud-based systems.",
    },
    {
      q: "How quickly do you respond?",
      a: "I typically respond within 24 hours. For urgent matters, phone calls are faster.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes, I am fully remote-ready and experienced working with global teams.",
    },
    {
      q: "What's your typical project timeline?",
      a: "Timeline depends on complexity: small (2–4 weeks), medium (1–3 months), large (3–6 months).",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-purple-500/30 transform transition-all duration-500 motion-safe:animate-pulse">
          💬
        </div>
        <h1 className="text-4xl font-extrabold mt-6">Get In Touch</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and projects. Let's connect and discuss how we can collaborate.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {stats.map((item, i) => (
          <div
            key={i}
            className="group bg-[#161b22] border border-gray-700 rounded-2xl p-10 text-center transform transition-all duration-300 will-change-transform
                       hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500"
          >
            <div className="text-5xl mb-4 group-hover:rotate-6 transform transition-transform duration-500">{item.icon}</div>
            <h3 className="text-4xl font-extrabold tracking-tight">{item.number}</h3>
            <p className="text-gray-400 mt-1 font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Contact & Form */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {/* Contact Info Left */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold mb-4">📮 Let's Connect</h2>

          {contactItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group block bg-[#161b22] border border-gray-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-2xl p-6 flex gap-4 items-start transform hover:-translate-y-1"
            >
              <span className="text-3xl shrink-0 transform transition-transform duration-300 group-hover:translate-y-[-4px]">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{item.value}</p>
                <span className="text-indigo-400 text-sm hover:underline inline-block mt-2">{item.linkText}</span>
              </div>
            </a>
          ))}

          {/* Socials */}
          <div className="bg-[#161b22] border border-gray-700 rounded-2xl hover:border-purple-500 p-6 transition-all duration-300">
            <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
            <div className="space-y-3">
              <a
                className="w-full block py-3 bg-[#21262d] hover:bg-[#30363d] rounded-lg font-semibold text-center transition-all duration-200"
                href="#"
              >
                GitHub
              </a>
              <a
                className="w-full block py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold text-center transition-all duration-200"
                href="#"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#161b22] border border-gray-700 hover:border-purple-500 transition-all rounded-2xl p-10 shadow-md shadow-black/20 transform hover:scale-102">
          <h2 className="text-2xl font-extrabold mb-8">📨 Send Me a Message</h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <input
                  className="w-full mt-2 px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  type="text"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  className="w-full mt-2 px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Subject *</label>
              <input
                className="w-full mt-2 px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                className="w-full mt-2 px-4 py-3 h-32 bg-[#0d1117] border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              ></textarea>
            </div>

            <button className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold text-lg hover:opacity-95 transform hover:-translate-y-0.5 transition-all">
              Send Message
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-4">
            * I typically respond within 24 hours.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {faqList.map((item, i) => (
          <details
            key={i}
            className="group bg-[#161b22] border border-gray-700 hover:border-indigo-500 rounded-xl p-6 transition-all duration-200 open:shadow-2xl"
          >
            <summary className="font-semibold mb-2 text-lg list-none cursor-pointer select-none">
              ⚡ {item.q}
            </summary>
            <p className="text-gray-400 text-sm mt-3">{item.a}</p>
          </details>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
        © 2025 Your Name. All rights reserved.
      </div>
    </div>
  );
}
// ...existing code...