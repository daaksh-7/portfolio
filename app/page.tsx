"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* Glow Effect */}
<div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-60 blur-3xl"></div>


      {/* Content */}
      <div className="relative z-10 p-6">

        {/* Hero */}
        <section className="text-center py-24">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            Daksh Jangir
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl mt-4 text-gray-300"
          >
            AI Driven DevOps Engineer 🚀
          </motion.p>
        </section>

        {/* Skills */}
        <section className="py-16">
          <h2 className="text-3xl text-center mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Python", "Java", "Git", "Docker"].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-110 transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* DevOps */}
<section className="py-16">
  <h2 className="text-3xl text-center mb-10">DevOps Stack</h2>

  <div className="flex flex-wrap justify-center gap-4">
    {["Docker", "CI/CD", "Linux", "GitHub Actions"].map((tool) => (
      <div className="bg-blue-500/20 px-6 py-3 rounded-full">
        {tool}
      </div>
    ))}
  </div>
</section>

{/* Learning Tracker */}
<section className="py-16 text-center">
  <h2 className="text-3xl mb-6">Learning Journey</h2>

  <div className="space-y-3 text-gray-300">
    <p>📅 Week 1: Started Next.js & Portfolio</p>
    <p>📅 Week 2: Learning Python & Git</p>
    <p>📅 Week 3: Exploring AI + DevOps</p>
  </div>
</section>

{/* Projects */}
<section className="py-16">
  <h2 className="text-3xl text-center mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6">
    
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold">Portfolio Website</h3>
      <p className="text-gray-300 mt-2">
        Built using Next.js, Tailwind CSS and animations.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
      <h3 className="text-xl font-bold">Coming Soon</h3>
      <p className="text-gray-300 mt-2">
        AI and DevOps based projects will be added.
      </p>
    </div>

  </div>
</section>
        {/* Contact */}
<section className="py-16 text-center">
  <h2 className="text-3xl mb-4">Connect With Me</h2>

  <div className="flex justify-center gap-6">
    <a href="https://github.com/daaksh-7" target="_blank">
      GitHub
    </a>

    <a href="https://linkedin.com/in/yourprofile" target="_blank">
      LinkedIn
    </a>
  </div>
</section>

      </div>
    </div>
    
  );
}