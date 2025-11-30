import React from "react";

const ContactForm = () => {
  return (
    <div className="relative p-10 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-xl overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/grid.svg')] bg-repeat pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Full Name */}
        <div>
          <label className="text-sm text-gray-400">Full name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-400">Email Address</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
          />
        </div>

        {/* Company */}
        <div>
          <label className="text-sm text-gray-400">Company</label>
          <input
            type="text"
            placeholder="Your Company"
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            rows="5"
            placeholder="Type your message here..."
            className="w-full mt-2 px-4 py-3 rounded-md bg-[#111] border border-white/10 outline-none resize-none"
          />
        </div>

        {/* Button */}
        <button className="px-6 py-3 rounded-md bg-white text-black font-semibold mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
