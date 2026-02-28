import React, { useState } from "react";

export default function ContactSalesPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    revenue: "",
    industry: "",
    teamSize: "",
    message: "",
    agree: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background:"radial-gradient(ellipse 120% 100% at 70% 10%, #ff6600 0%, #ff6600 30%, #a259ff 70%, #000 100%)", backgroundColor: "#1a0033"}}>
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-stretch">
          {/* Left: Info */}
          <div className="flex-1 text-white flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Accelerate Your Growth<br/>with Nexo Global</h1>
            <p className="mb-6 text-lg">Speak with our sales experts to design a scalable AI-powered commerce infrastructure tailored to your business.</p>
            <div className="flex gap-4 mb-8">
              <button className="px-6 py-2 rounded-full font-semibold text-white" style={{background:"linear-gradient(90deg,#ff6600 0%,#a259ff 100%)"}}>Book a Strategy Call</button>
              <button className="px-6 py-2 rounded-full border border-white/40 text-white font-semibold bg-white/10 hover:bg-white/20 transition">Talk to Enterprise Team</button>
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-8">Built for Ambitious Brands</h2>
            <p className="mb-6">Whether you're scaling an e-commerce operation, launching a global charpeplace, or optimizing automation workflows, our team helps you deploy intelligent systems that drive measurable results.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-8">
              <div className="flex items-center gap-2"><span className="text-orange-400">•</span> Dedicated account manager</div>
              <div className="flex items-center gap-2"><span className="text-purple-400">•</span> Multi-platform deployment</div>
              <div className="flex items-center gap-2"><span className="text-orange-400">•</span> Custom AI integrations</div>
              <div className="flex items-center gap-2"><span className="text-purple-400">•</span> Data-driven scaling strategies</div>
              <div className="flex items-center gap-2"><span className="text-orange-400">•</span> Advanced automation setup</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Let's Build Your Growth Infrastructure</h3>
            <p className="mb-4 text-sm">Our architecture team designs large-scale Ai commerce ecosystems for high-growth and international brands.</p>
            <div className="mb-2 flex flex-col gap-1 text-sm">
              <span>📧 Sales@nexoglobal.com</span>
              <span>📧 partners@nexoglobal.com</span>
              <span>📧 support@nexoglobal.com</span>
              <span>📞 +1 (000) 000 0000</span>
            </div>
            <div className="mt-4 text-xs">
              <div><b>Sales:</b> sales@nexoglobal.com</div>
              <div><b>Partnerships:</b> partners@nexoglobal.com</div>
              <div><b>Support:</b> support@nexoglobal.com</div>
            </div>
          </div>
          {/* Right: Form */}
          <div className="flex-1 bg-black/30 rounded-2xl p-8 shadow-2xl border border-white/10 flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📝</span> Request Consultation
            </h2>
            <form className="space-y-4">
              <div className="flex gap-3">
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="flex-1 px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="flex-1 px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
              </div>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Business Email" className="w-full px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className="w-full px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
              <input name="revenue" value={form.revenue} onChange={handleChange} placeholder="Monthly Revenue" className="w-full px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
              <input name="industry" value={form.industry} onChange={handleChange} placeholder="Industry" className="w-full px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
              <input name="teamSize" value={form.teamSize} onChange={handleChange} placeholder="Team Size" className="w-full px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" className="w-full px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-gray-300" rows={2} />
              <div className="flex items-center gap-2">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="accent-orange-500" />
                <span className="text-xs text-white">I agree to the Terms of Service and Privacy Policy</span>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-bold text-lg shadow-md transition mt-2" style={{background: "linear-gradient(90deg, #ff6600 0%, #a259ff 100%)", boxShadow: '0 4px 24px 0 rgba(162,89,255,0.25)'}}>
                Request Consultation
              </button>
              <div className="text-xs text-gray-300 mt-2">Our team responds within 24 hours.</div>
            </form>
          </div>
        </div>
        <footer className="mt-12 flex flex-wrap gap-4 justify-between items-center text-xs text-gray-300 border-t border-white/10 pt-6">
          <div className="flex gap-4">
            <span>Francais</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
          <span>© 2025 Nexo Global. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
