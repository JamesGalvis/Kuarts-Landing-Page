"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, Rocket, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const glowVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const BentoGrid = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Misión Card */}
        <motion.div
          className="lg:col-span-2 relative group"
          variants={cardVariants}
          custom={0}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[#0f0f1f] border border-purple-500/20">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 rounded-3xl blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-md opacity-50" />
                  <div className="relative bg-black p-3 rounded-xl border border-purple-500/20">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Misión
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                En <span className="font-bold text-purple-400">BUGZERO</span>,
                transformamos ideas en soluciones digitales innovadoras,
                desarrollando software de alta calidad que potencia el
                crecimiento de empresas y emprendedores.
              </p>
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Visión Card */}
        <motion.div
          className="relative group"
          variants={cardVariants}
          custom={1}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[#0f0f1f] border border-blue-500/20 h-full">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-600/20 rounded-3xl blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-md opacity-50" />
                  <div className="relative bg-black p-3 rounded-xl border border-blue-500/20">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Visión
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ser la empresa de referencia en desarrollo de software en
                América Latina, reconocida por nuestra innovación y excelencia
                técnica.
              </p>
              <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Valores Cards */}
        {[
          {
            icon: Rocket,
            title: "Valores",
            desc: "Respeto, responsabilidad, honestidad, integridad y compromiso social generan convivencia, confianza y impacto positivo",
            gradient: "from-cyan-600 to-emerald-600",
            textGradient: "from-cyan-400 to-emerald-400",
            glow: "from-cyan-600/20 via-transparent to-emerald-600/20",
          },
          {
            icon: Users,
            title: "Público",
            desc: "Apoyamos a startups, pymes y empresas en transformación digital con soluciones de software a medida para optimizar sus operaciones",
            gradient: "from-blue-600 to-cyan-600",
            textGradient: "from-blue-400 to-cyan-400",
            glow: "from-blue-600/20 via-transparent to-cyan-600/20",
          },
          {
            icon: Cpu,
            title: "Innovación",
            desc: "Innovamos constantemente para ofrecer soluciones tecnológicas de vanguardia y transformar el futuro.",
            gradient: "from-purple-600 to-blue-600",
            textGradient: "from-purple-400 to-blue-400",
            glow: "from-purple-600/20 via-transparent to-blue-600/20",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={cardVariants}
            custom={index + 2}
          >
            <div
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-[#0f0f1f] border border-blue-500/20 `}
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${item.glow} rounded-3xl blur-xl`}
                variants={glowVariants}
                initial="initial"
                animate="animate"
              />
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-xl blur-md opacity-50`}
                    />
                    <div
                      className={`relative bg-black p-3 rounded-xl border border-${
                        item.gradient.split(" ")[1]
                      }/20`}
                    >
                      <item.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.desc}
                </p>
                <div
                  className={`absolute -right-20 -bottom-20 w-60 h-60 bg-${
                    item.gradient.split(" ")[1]
                  }/10 rounded-full blur-3xl`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BentoGrid;
