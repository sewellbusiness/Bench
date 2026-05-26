"use client";
import { useState } from "react";
type Status = "idle"|"sending"|"success"|"error";
export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name="Name is required.";
    if (!form.email.trim()) e.email="Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email="Please enter a valid email address.";
    if (!form.message.trim()) e.message="Message is required.";
    return e;
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({}); setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      if (res.ok) { setStatus("success"); setForm({ name:"", email:"", message:"" }); } else setStatus("error");
    } catch { setStatus("error"); }
  }
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background:"radial-gradient(ellipse at right, #2a3f6e 0%, #1B2A4A 50%)" }}>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-semibold font-display uppercase tracking-widest text-sewell-orange mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Have a project that needs the right foundation?</h2>
        <p className="text-lg text-white/70 mb-8">Get in touch.</p>
        {status==="success" ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <p className="text-lg font-display font-semibold text-white">Thanks, I&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 text-left">
            {(["name","email","message"] as const).map(field => (
              <div key={field}>
                <label className="text-sm font-display font-medium text-white/80 block mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {field==="message"
                  ? <textarea rows={5} value={form[field]} onChange={e=>setForm({...form,[field]:e.target.value})} placeholder="Tell me about your project..." className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sewell-orange/60 resize-none" />
                  : <input type={field==="email"?"email":"text"} value={form[field]} onChange={e=>setForm({...form,[field]:e.target.value})} placeholder={field==="email"?"your@email.com":"Your name"} className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sewell-orange/60" />
                }
                {errors[field] && <p className="text-xs text-red-400 mt-1">{errors[field]}</p>}
              </div>
            ))}
            <button type="submit" disabled={status==="sending"} className="w-full bg-sewell-orange hover:bg-amber-500 disabled:opacity-60 text-white font-display font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base mt-2">
              {status==="sending" ? "Sending…" : "Send Message"}
            </button>
            {status==="error" && <p className="text-xs text-red-400 text-center">Something went wrong. Please try again or email <a href="mailto:kevin@sewelllabs.com" className="underline hover:text-red-300">kevin@sewelllabs.com</a> directly.</p>}
          </form>
        )}
      </div>
    </section>
  );
}
