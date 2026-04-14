import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "🧠 Clarity – Early Alzheimer Screener",
    desc: "Web-based cognitive risk assessment tool that combines ML-driven prediction on user-uploaded data with an AI chatbot for guided screening and real-time support.",
    ss: "/Clarity.png",
    tech: ["Tailwind CSS", "JavaScript", "Supabase", "Python"],
    live: " https://alzheimer-detection-so6u.onrender.com/",
    code: "https://github.com/swayam-sp/Alzheimer-Detection",
  },
  {
    title: "🏫 University ERP Management System",
    desc: "A full-stack university management platform currently under development. The frontend is fully built using React and Vite, featuring role-based dashboards for students and faculty. The system is designed to eventually support attendance tracking, assignment submission, grading, notifications, and secure authentication with a PostgreSQL + Node.js backend integration in progress.",
    ss: "/University.jpg",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL (Planned)",
      "JavaScript",
    ],
    live: "https://erp-frontend-yz4f.onrender.com",
    code: "https://github.com/swayam-sp/ERP-System",
  },
  {
    title: "🎓 University ERP ",
    desc: "A single-page web application built as a demonstration of frontend development skills using HTML5, CSS3, and Vanilla JavaScript. It showcases SPA routing, state management, mock data handling, and role-based UI dashboards (Student, Faculty, Admin) with Chart.js visualizations.",
    ss: "/university-erp.png",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Chart.js"],
    live: "https://static-university-erp-site.onrender.com/",
    code: "https://github.com/swayam-sp/Static-UNI-Site",
  },
  // {
  // title: '💼 Portfolio Website',
  // desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  // ss: '/portfolio.jpg',
  // tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  // live: '#',
  // code: ''
  // },
  // {
  //   title: '💬 DocuChat – Gemini AI Chatbot',
  //   desc: 'An intelligent document interaction app powered by Gemini API that understands and answers queries from uploaded PDFs.',
  //   ss: '/Docuchat.png',
  //   tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
  //   live: '#',
  //   code: ''
  // },
  // {
  //   title: '📊 ProfileX – Data Profiler',
  //   desc: 'Smart data profiling and preprocessing web app for CSV datasets — feature summary, missing value handling, and visualization.',
  //   ss: '/ProfileX.png',
  //   tech: ['Streamlit', 'Pandas', 'Plotly'],
  //   live: '#',
  //   code: ''
  // },
  // {
  //   title: '🧬 Breast Cancer Prediction',
  //   desc: 'ML pipeline using SVC, Random Forest, and XGBoost with SMOTE for imbalanced dataset handling and model optimization.',
  //   ss: '/breastpred.jpg',
  //   tech: ['scikit-learn', 'XGBoost', 'Pandas'],
  //   live: '#',
  //   code: ''
  //}
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: "#0ea5e9", marginBottom: 6 }}>
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
