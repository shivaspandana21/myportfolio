import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TYPING_STRINGS = [
  "Aspiring Software Engineer",
  "ML Enthusiast",
  "Data Analytics Explorer",
  "Web Developer",
  "DSA Problem Solver",
];

function TypingText() {
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = TYPING_STRINGS[strIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setDeleting(false);
          setStrIndex(s => (s + 1) % TYPING_STRINGS.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex]);

  return (
    <span style={{ color: "#5b9bb5", fontWeight: 500 }}>
      {displayed}
      <span style={{ display: "inline-block", width: "2px", height: "1.1em", background: "#5b9bb5", marginLeft: "2px", verticalAlign: "text-bottom" }} className="animate-pulse" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #e8f4f8 0%, #f5f0e8 45%, #ede0d0 100%)" }}>

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            animate={{ y: [-20, 20, -20], x: [0, i % 2 === 0 ? 10 : -10, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
            style={{
              position: "absolute", borderRadius: "50%",
              background: i % 2 === 0
                ? "radial-gradient(circle, rgba(91,155,181,0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(139,98,69,0.1) 0%, transparent 70%)",
              width: 100 + i * 60, height: 100 + i * 60,
              left: `${10 + i * 15}%`, top: `${5 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-medium"
          style={{ background: "rgba(91,155,181,0.1)", border: "1px solid rgba(91,155,181,0.3)", color: "#4a8fa8" }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5b9bb5", display: "inline-block" }} className="animate-pulse" />
          Open to Internship Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(42px, 8vw, 72px)", color: "#3d2b1f" }}
        >
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(135deg, #4a8fa8, #7ab8ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Shiva Spandana
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 20, color: "#7a6555", marginBottom: 40, minHeight: 32 }}
        >
          <TypingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ color: "#a89880", fontSize: 13, marginBottom: 20 }}
        >
          Connect with me
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          style={{ display: "flex", justifyContent: "center", gap: 16 }}
        >
          <motion.a href="https://github.com/shivaspandana21" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.94 }}
            style={{ width: 52, height: 52, borderRadius: 14, background: "#fdfaf5", border: "1px solid #ddd5c8", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(61,43,31,0.07)", textDecoration: "none" }}
            title="GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#3d2b1f">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/shivaspandana-avula-141129346" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.94 }}
            style={{ width: 52, height: 52, borderRadius: 14, background: "#fdfaf5", border: "1px solid #ddd5c8", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(61,43,31,0.07)", textDecoration: "none" }}
            title="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a66c2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          <motion.a href="https://leetcode.com/u/Spandana_21/" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.94 }}
            style={{ width: 52, height: 52, borderRadius: 14, background: "#fdfaf5", border: "1px solid #ddd5c8", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(61,43,31,0.07)", textDecoration: "none" }}
            title="LeetCode"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFA116">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
