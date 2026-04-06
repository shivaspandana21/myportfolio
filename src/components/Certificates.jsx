import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FiExternalLink } from "react-icons/fi";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    emoji: "☁️",
    color: "#e07b39",
    bg: "#fff3eb",
    border: "rgba(224,123,57,0.25)",
    credential: "https://drive.google.com/file/d/1ZKTbqYmUPSbVJZIHLHSm2D0x0hTfNMrb/view",
    desc: "Foundational cloud concepts, AWS services, security, architecture, pricing and support.",
  },
  {
    title: "NVIDIA Deep Learning Fundamentals",
    issuer: "NVIDIA",
    emoji: "🤖",
    color: "#76b900",
    bg: "#f0f9e0",
    border: "rgba(118,185,0,0.25)",
    credential: "https://drive.google.com/file/d/1_W3qMw6uc4WPFrVE6QuL05Uh_dT9pNiR/view",
    desc: "Deep learning fundamentals using NVIDIA tools, neural networks, and GPU-accelerated computing.",
  },
  {
    title: "AI Prompt Engineering",
    issuer: "Virtual Internship Program",
    emoji: "✨",
    color: "#5b9bb5",
    bg: "#e8f4f8",
    border: "rgba(91,155,181,0.25)",
    credential: "https://drive.google.com/file/d/1_h0DNe4TL0zkIGvDCbDQKTuDYc74Knm1/view",
    desc: "Techniques for effective prompt design, LLM interaction, and AI-assisted application development.",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Certificates() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="certificates" style={{ background: "#fdfaf5", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span style={{ color: "#5b9bb5", fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: 4, textTransform: "uppercase" }}>Credentials</span>
          <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(28px,5vw,42px)", color: "#3d2b1f" }}>
            Certifications & <span style={{ background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Achievements</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {certs.map(({ title, issuer, emoji, color, bg, border, credential, desc }) => (
            <motion.div key={title} variants={item}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${color}18` }}
              style={{ background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 22, padding: 24, transition: "all 0.3s" }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>
                {emoji}
              </div>
              <h3 className="font-display font-bold" style={{ fontSize: 15, color: "#3d2b1f", marginBottom: 4, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: 13, color, fontWeight: 500, marginBottom: 10 }}>{issuer}</p>
              <p style={{ fontSize: 12, color: "#7a6555", lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
              <motion.a href={credential} target="_blank" rel="noreferrer"
                whileHover={{ x: 3 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color, textDecoration: "none" }}>
                View Credential <FiExternalLink size={12} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 40 }}>
          {[
            { num: "3+", label: "Certifications" },
            { num: "3", label: "Projects Built" },
            { num: "5+", label: "ML Models Deployed" },
          ].map(({ num, label }) => (
            <div key={label} style={{ background: "#f5f0e8", border: "1px solid #ddd5c8", borderRadius: 16, padding: "20px", textAlign: "center" }}>
              <p className="font-display font-bold" style={{ fontSize: 28, background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</p>
              <p style={{ fontSize: 12, color: "#a89880", marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
