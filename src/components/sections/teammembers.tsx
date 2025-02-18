"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { teamMembers } from "@/constants"



export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="team" className="py-20 md:py-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Nuestro Equipo</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
            Un equipo apasionado y dedicado, impulsando la innovación y el crecimiento de nuestra empresa
          </p>
        </div>
        <div
          ref={containerRef}
          className="flex max-md:flex-col overflow-x-auto pb-8 gap-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamMembers.map(({ name, role, description, background, borderColor, color }, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 md:w-[350px] snap-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -3 : 3 }}
                className={cn(
                  "flex flex-col items-center justify-center gap-4 h-[200px] md:h-[400px] bg-black rounded-2xl border p-6",
                  background,
                  borderColor,
                )}
              >
                <h3 className="text-xl md:text-2xl text-center tracking-tight uppercase font-bold" style={{ color }}>
                  {role}
                </h3>
                <h2
                  className="text-3xl md:text-4xl text-center tracking-tighter uppercase font-extrabold leading-[90%]"
                  style={{ color }}
                >
                  {name}
                </h2>
                <p className="text-sm sm:text-base w-[90%] text-center opacity-70" style={{ color }}>
                  {description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

