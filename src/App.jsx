import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <AnimatePresence>
      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen font-body"
          style={{ background: "#f5f0e8" }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certificates />
            <Contact />
          </main>
          <ScrollToTop />
          <footer className="text-center py-6 text-sm border-t" style={{ borderColor: "#ddd5c8", background: "#ede8df", color: "#7a6555" }}>
            Crafted with care by <span style={{ color: "#5b9bb5", fontWeight: 600 }}>Shiva Spandana</span> · {new Date().getFullYear()}
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
