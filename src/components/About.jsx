import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" style={{ background: "#fdfaf5", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-14">
          <span style={{ color: "#5b9bb5", fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: 4, textTransform: "uppercase" }}>About Me</span>
          <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(28px,5vw,42px)", color: "#3d2b1f" }}>
            About <span style={{ background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Shiva Spandana</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56, alignItems: "start" }}>
          {/* Photo + resume */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            {/* Real photo */}
            <div style={{ position: "relative", width: 220, height: 220 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  border: "2px dashed rgba(91,155,181,0.35)",
                }}
              />
              <div style={{
                position: "absolute", inset: 10, borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(91,155,181,0.2)",
                boxShadow: "0 8px 32px rgba(91,155,181,0.15)",
              }}>
                <img
                  src="/portfolio_pic.jpeg"
                  alt="Shiva Spandana"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* Resume button only */}
            <motion.a
              href="https://drive.google.com/file/d/1XbGhuPhDPYwXa6Ahbi5YBOh_bSzxWmTZ/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(91,155,181,0.25)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #5b9bb5, #7ab8ce)",
                color: "#fff", fontWeight: 600, fontSize: 14,
                padding: "12px 28px", borderRadius: 14, textDecoration: "none",
                boxShadow: "0 4px 14px rgba(91,155,181,0.3)"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </motion.a>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.p variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={2}
              style={{ fontSize: 15, color: "#7a6555", lineHeight: 1.85, marginBottom: 28 }}>
              Hi, I'm Shiva Spandana, a B.Tech Computer Science and Engineering undergraduate with a strong interest in <strong style={{ color: "#3d2b1f" }}>Web Development</strong> and <strong style={{ color: "#3d2b1f" }}>Data-Driven Technologies</strong>. I enjoy building responsive and user-friendly web applications while exploring how data can be collected, analyzed, and transformed into meaningful insights that support better decision-making.
              <br /><br />
              I have hands-on experience with <strong style={{ color: "#3d2b1f" }}>HTML, CSS, JavaScript, and Python</strong>, and I am currently expanding my knowledge in backend development, data analytics, and data science concepts. I am particularly interested in combining development and data to create efficient, scalable, and impactful solutions for real-world problems.
              <br /><br />
              Alongside technical skills, I focus on improving my problem-solving ability and strengthening my foundation in core computer science concepts. I actively build projects to apply what I learn and continuously explore new tools and technologies. My goal is to grow as a <strong style={{ color: "#3d2b1f" }}>Software Engineer or Data-focused professional</strong>, contributing to innovative projects and gaining valuable industry experience through internships and entry-level opportunities.
            </motion.p>

            {/* Objective */}
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} custom={3}
              style={{ background: "rgba(91,155,181,0.08)", border: "1px solid rgba(91,155,181,0.2)", borderLeft: "3px solid #5b9bb5", borderRadius: "0 12px 12px 0", padding: "14px 18px" }}>
              <p style={{ fontSize: 13, color: "#4a8fa8", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                "Seeking an internship opportunity to contribute to high-impact technology solutions and apply my skills in building scalable, data-driven applications."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
