import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const education = [
  {
    degree: "Bachelor of Technology — Computer Science",
    institution: "SR University, Warangal",
    period: "2023 – 2027",
    icon: "🎓",
    bg: "#e8f4f8",
    border: "rgba(91,155,181,0.25)",
    accent: "#5b9bb5",
    highlights: ["Data Structures & Algorithms", "Machine Learning", "Computer Networks", "Operating Systems"],
  },
  {
    degree: "Class XII — MPC",
    institution: "Sri Chaitanya Junior College, Kondpur",
    period: "2020 – 2022",
    scoreColor: "#8b6245",
    icon: "📚",
    bg: "#f5ede2",
    border: "rgba(139,98,69,0.25)",
    accent: "#8b6245",
    highlights: ["Mathematics", "Physics", "Chemistry"],
  },
];

const item = { hidden: { opacity: 0, x: -24 }, visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.15 } }) };

export default function Education() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="education" style={{ background: "#f5f0e8", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span style={{ color: "#5b9bb5", fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: 4, textTransform: "uppercase" }}>Academic Background</span>
          <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(28px,5vw,42px)", color: "#3d2b1f" }}>
            My <span style={{ background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Education</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ position: "absolute", left: 28, top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #b8d4de, #c4a882)", borderRadius: 2 }} />

          {education.map((edu, i) => (
            <motion.div key={edu.degree} variants={item} custom={i} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ display: "flex", gap: 24, marginBottom: i < education.length - 1 ? 40 : 0 }}>
              <div style={{ flexShrink: 0, width: 58, display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: 58, height: 58, borderRadius: "50%",
                  background: edu.bg, border: `2px solid ${edu.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, boxShadow: "0 2px 8px rgba(61,43,31,0.08)", zIndex: 1, position: "relative"
                }}>
                  {edu.icon}
                </div>
              </div>

              <motion.div whileHover={{ y: -4, boxShadow: `0 12px 32px ${edu.accent}18` }}
                style={{ flex: 1, background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 20, padding: 24, transition: "all 0.3s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                  <h3 className="font-display font-bold" style={{ fontSize: 16, color: "#3d2b1f" }}>{edu.degree}</h3>
                  {edu.score && (
                    <span style={{ background: edu.bg, color: edu.scoreColor, fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: `1px solid ${edu.border}`, whiteSpace: "nowrap" }}>{edu.score}</span>
                  )}
                </div>
                <p style={{ fontSize: 14, color: edu.accent, fontWeight: 500, marginBottom: 4 }}>{edu.institution}</p>
                <p style={{ fontSize: 12, color: "#a89880", marginBottom: 14 }}>{edu.period}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {edu.highlights.map(h => (
                    <span key={h} style={{ background: "#f5f0e8", color: "#7a6555", fontSize: 11, padding: "4px 10px", borderRadius: 20, border: "1px solid #ddd5c8" }}>{h}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience box */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ maxWidth: 760, margin: "40px auto 0", background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 20, padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#e8f4f8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>💼</div>
            <div>
              <h3 className="font-display font-bold" style={{ fontSize: 16, color: "#3d2b1f" }}>AIML Intern — AICTE Eduskills</h3>
              <p style={{ fontSize: 12, color: "#5b9bb5", fontWeight: 500 }}>Internship Experience</p>
            </div>
          </div>
          <ul style={{ paddingLeft: 16, margin: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Developed and deployed 5+ machine learning models using Python, TensorFlow, and Scikit-Learn",
              "Preprocessed datasets of 500,000+ entries, improving model accuracy by 15%",
              "Optimized feature engineering and hyperparameter tuning, reducing training time by 30%",
            ].map(point => (
              <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#7a6555", lineHeight: 1.6 }}>
                <span style={{ color: "#5b9bb5", marginTop: 2, flexShrink: 0 }}>▸</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
