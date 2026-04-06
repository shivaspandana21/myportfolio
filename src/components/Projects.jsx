import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FiCode, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    emoji: "🎯",
    title: "Career Guidance System",
    tagline: "AI-powered career recommendation platform",
    description: "Built an AI-powered career recommendation system using Python and Streamlit. Applied machine learning models to analyze user data and generate personalized career paths. Designed interactive dashboards for real-time insights and improved decision-making using data-driven recommendations.",
    stack: ["Python", "Streamlit", "Machine Learning", "Data Visualization"],
    github: "https://github.com/shivaspandana21/CareerIQ",
    demo: "https://careeriq-spandana.streamlit.app/",
    color: "#5b9bb5",
    stripColor: "linear-gradient(90deg, #5b9bb5, #7ab8ce)",
    topBg: "linear-gradient(135deg, rgba(91,155,181,0.08), rgba(122,184,206,0.04))",
    tagBg: "rgba(91,155,181,0.12)",
    tagColor: "#4a8fa8",
  },
  {
    id: 2,
    emoji: "🎤",
    title: "Role Based Mock Interview",
    tagline: "Dynamic interview simulator with feedback",
    description: "Developed a role-based mock interview system with dynamic question generation. Implemented scoring algorithms to evaluate performance and provide feedback. Built responsive frontend using HTML, CSS, and JavaScript with personalized interview flows.",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Scoring Algorithms"],
    github: "https://github.com/shivaspandana21/ai-mock-interview",
    demo: "https://shivaspandana21.github.io/ai-mock-interview/",
    color: "#8b6245",
    stripColor: "linear-gradient(90deg, #8b6245, #c4a882)",
    topBg: "linear-gradient(135deg, rgba(139,98,69,0.08), rgba(196,168,130,0.04))",
    tagBg: "rgba(139,98,69,0.12)",
    tagColor: "#8b6245",
  },
  {
    id: 3,
    emoji: "📄",
    title: "ResumeMatch AI",
    tagline: "AI-powered resume analysis and job matching",
    description: "Developed an AI-powered Resume Analysis and Job Matching application using Streamlit. Implemented TF-IDF vectorization and cosine similarity to match resumes with job descriptions. Enabled users to upload resumes and receive ranked job recommendations based on relevance. Applied NLP techniques for text preprocessing and accurate matching.",
    stack: ["Python", "Streamlit", "Scikit-learn", "NLP", "TF-IDF"],
    github: "https://github.com/shivaspandana21/Resume_Matcher",
    demo: "https://resumeai-job-matcher.streamlit.app/",
    color: "#6b5b95",
    stripColor: "linear-gradient(90deg, #6b5b95, #9b8bbf)",
    topBg: "linear-gradient(135deg, rgba(107,91,149,0.08), rgba(155,139,191,0.04))",
    tagBg: "rgba(107,91,149,0.12)",
    tagColor: "#6b5b95",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const card = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Projects() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" style={{ background: "#fdfaf5", padding: "96px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span style={{ color: "#5b9bb5", fontSize: 12, fontFamily: "JetBrains Mono, monospace", letterSpacing: 4, textTransform: "uppercase" }}>Portfolio</span>
          <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(28px,5vw,42px)", color: "#3d2b1f" }}>
            Featured <span style={{ background: "linear-gradient(135deg,#4a8fa8,#7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {projects.map(p => (
            <motion.div key={p.id} variants={card}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${p.color}18` }}
              style={{ background: "#fdfaf5", border: "1px solid #ddd5c8", borderRadius: 24, overflow: "hidden", transition: "all 0.3s" }}>
              <div style={{ height: 4, background: p.stripColor }} />
              <div style={{ padding: 24, background: p.topBg }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 36 }}>{p.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold" style={{ fontSize: 17, color: "#3d2b1f", lineHeight: 1.2 }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "#7a6555", marginTop: 2 }}>{p.tagline}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#7a6555", lineHeight: 1.7, marginBottom: 16 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ background: p.tagBg, color: p.tagColor, fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 20 }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <motion.a href={p.github} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "#3d2b1f", border: "1px solid #ddd5c8", background: "#fdfaf5", padding: "8px 16px", borderRadius: 10, textDecoration: "none" }}>
                    <FiCode size={14} /> Source Code
                  </motion.a>
                  {p.demo && (
                    <motion.a href={p.demo} target="_blank" rel="noreferrer"
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                      style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#fff", background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, padding: "8px 16px", borderRadius: 10, textDecoration: "none", border: "none" }}>
                      <FiExternalLink size={14} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
