"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";

function FloatingSphere() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#3b82f6"
        emissiveIntensity={2}
        wireframe
      />
    </mesh>
  );
}

function FloatingCubes() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.3;
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={ref}>
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#6366f1" />
        </mesh>
      ))}
    </group>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />

          <FloatingSphere />
          <FloatingCubes />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16">

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center py-32">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            Daksh Jangir
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl text-gray-200"
          >
            AI Driven DevOps Engineer
          </motion.p>

          <p className="mt-6 max-w-2xl text-gray-300">
            Building futuristic AI systems and automating the world with DevOps.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg"
          >
            Explore My Work
          </motion.button>
        </section>

        {/* GLASS CARDS */}
        <section className="py-20 text-center">
          <h2 className="text-3xl mb-12 text-gray-100">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["AI Systems", "DevOps Automation", "Full Stack Apps"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl text-gray-100"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-12 text-gray-100">Technical Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Python", "Java", "Git", "Docker"].map((skill, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition text-gray-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="text-center mt-20">
          <h2 className="text-4xl font-semibold mb-12 text-gray-100">Tech Stack</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Languages", "Python, Java, C"],
              ["AI / ML", "NumPy, Pandas, Scikit-learn"],
              ["DevOps", "Docker, GitHub Actions, Linux"],
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-gray-200">
                <h3 className="font-bold text-lg text-gray-100">{item[0]}</h3>
                <p className="text-gray-400 mt-2">{item[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 text-center">
          <h2 className="text-3xl mb-10 text-gray-100">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition text-gray-200">
              <h3 className="text-xl font-bold text-gray-100">Portfolio Website</h3>
              <p className="text-gray-400 mt-2">
                Built using Next.js, Tailwind CSS and animations.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition text-gray-200">
              <h3 className="text-xl font-bold text-gray-100">AI DevOps Project</h3>
              <p className="text-gray-400 mt-2">
                Upcoming project integrating AI with CI/CD pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 text-center">
          <h2 className="text-3xl mb-6 text-gray-100">Connect</h2>

          <div className="flex justify-center gap-6 text-gray-300">
            <a href="https://github.com/daaksh-7" target="_blank" className="hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/daksh-jangir-6a7047382/" target="_blank" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}