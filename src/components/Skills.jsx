import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    category: "Programming Languages",
    color: "#5b9bb5",
    bg: "#e8f4f8",
    skills: ["Python", "JavaScript"],
  },
  {
    category: "Web Technologies",
    color: "#8b6245",
    bg: "#f5ede2",
    skills: ["HTML", "CSS"],
  },
  {
    category: "Core CS Concepts",
    color: "#4a8fa8",
    bg: "#e0eff5",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Networking & Security",
    color: "#7a6555",
    bg: "#f0ebe3",
    skills: ["CCNA", "Cybersecurity"],
  },
  {
    category: "Tools & Platforms",
    color: "#6b8a6b",
    bg: "#e8f0e8",
    skills: ["Streamlit", "Git", "AWS", "TensorFlow", "Scikit-Learn"],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" style={{ background: "#f5f0e8", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span style={{ color: "#5b9bb5", fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: 4, textTransform: "uppercase" }}>Tech Stack</span>
          <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(28px,5vw,42px)", color: "#3d2b1f" }}>
            Skills & <span style={{ background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Expertise</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {skillGroups.map(({ category, color, bg, skills }) => (
            <motion.div key={category} variants={item}
              whileHover={{ y: -5, boxShadow: `0 12px 32px ${color}20` }}
              style={{ background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 20, padding: 24, transition: "all 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0 }} />
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#3d2b1f", textTransform: "uppercase", letterSpacing: 0.5 }}>{category}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map(skill => (
                  <span key={skill}
                    style={{ background: bg, color, fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 20, border: `1px solid ${color}30` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
