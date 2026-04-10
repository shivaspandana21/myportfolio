import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_47jeoxp";
const EMAILJS_TEMPLATE_ID = "template_t1ig9cp";
const EMAILJS_PUBLIC_KEY  = "fW-irSlKBXUSWKDmT";

const contactInfo = [
  { emoji: "📧", label: "Email", value: "avulashivaspandana1320@gmail.com", href: "mailto:avulashivaspandana1320@gmail.com" },
  { emoji: "💼", label: "LinkedIn", value: "shivaspandana-avula", href: "https://www.linkedin.com/in/shivaspandana-avula-141129346" },
  { emoji: "💻", label: "GitHub", value: "shivaspandana21", href: "https://github.com/shivaspandana21" },
  { emoji: "🧩", label: "LeetCode", value: "Spandana_21", href: "https://leetcode.com/u/Spandana_21/" },
  { emoji: "📍", label: "Location", value: "Warangal, India", href: null },
];

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3500);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", background: "#f5f0e8", border: "1px solid #ddd5c8",
    borderRadius: 10, padding: "10px 14px", color: "#3d2b1f", fontSize: 13,
    fontFamily: "DM Sans, sans-serif", outline: "none",
  };

  return (
    <section id="contact" style={{ background: "#f5f0e8", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span style={{ color: "#5b9bb5", fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: 4, textTransform: "uppercase" }}>Get In Touch</span>
          <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(28px,5vw,42px)", color: "#3d2b1f" }}>
            Let's <span style={{ background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
          </h2>
          <p style={{ color: "#7a6555", marginTop: 12, maxWidth: 440, margin: "12px auto 0", fontSize: 15 }}>
            Open to internships, collaborations, and exciting opportunities. Let's build something together.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="font-display font-bold" style={{ fontSize: 20, color: "#3d2b1f", marginBottom: 20 }}>Say Hello 👋</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactInfo.map(({ emoji, label, value, href }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  whileHover={{ x: 4 }}>
                  {href ? (
                    <a href={href} target={href.startsWith("mailto") || href.startsWith("tel") ? "_self" : "_blank"} rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 14, textDecoration: "none", transition: "all 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "#b8d4de"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "#ddd5c8"}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: "#e8f4f8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{emoji}</div>
                      <div>
                        <div style={{ fontSize: 11, color: "#a89880", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#3d2b1f" }}>{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 14 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: "#f5ede2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{emoji}</div>
                      <div>
                        <div style={{ fontSize: 11, color: "#a89880", textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#3d2b1f" }}>{value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 22, padding: 28 }}>
            <h3 className="font-display font-bold" style={{ fontSize: 18, color: "#3d2b1f", marginBottom: 20 }}>Send a Message</h3>
            {sent ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 0", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, background: "#e8f4f8", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 12 }}>✅</div>
                <p style={{ fontWeight: 600, color: "#3d2b1f", fontSize: 15 }}>Message sent!</p>
                <p style={{ color: "#7a6555", fontSize: 13, marginTop: 4 }}>I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "#3d2b1f", marginBottom: 6 }}>Your Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "#3d2b1f", marginBottom: 6 }}>Email Address</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "#3d2b1f", marginBottom: 6 }}>Message</label>
                  <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Hi Shiva, I'd love to connect about..." style={{ ...inputStyle, resize: "none" }} />
                </div>
                {error && (
                  <p style={{ color: "#c0392b", fontSize: 12, marginTop: -6 }}>{error}</p>
                )}
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={loading}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: loading ? "#a0c4d8" : "linear-gradient(135deg, #5b9bb5, #7ab8ce)", color: "#fff", fontWeight: 600, fontSize: 14, padding: "13px", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer", transition: "background 0.2s" }}>
                  <FiSend size={15} /> {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}