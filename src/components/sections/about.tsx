import { cn } from "@/lib/utils";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const introductionText =
  "Somos BUGZERO, la base fundamental para construir soluciones digitales sólidas y escalables. Transformamos ideas en plataformas tecnológicas innovadoras con un enfoque en modularidad, rendimiento y seguridad.";

const words = introductionText.split(" ");

export function About() {
  const scrollTarget = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section ref={scrollTarget} className="py-20 md:py-24">
      <div className="container flex items-center justify-center h-[500px]">
        <div className="flex flex-col items-center justify-center gap-6">
          <AboutTab title="Un poco de nosotros" />
          <p className="relative lg:w-[90%] font-thin w-full text-[30px] xs:text-[32px] md:text-[45px] text-center tracking-tight leading-[1.3]">
            {words.map((word, i) => (
              <span
                key={i}
                className={cn(
                  "text-white/15 transition duration-500",
                  i < currentWord && "text-white"
                )}
              >{`${word} `}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutTab({ title }: { title: string }) {
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { width, height } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      repeat: Infinity,
      ease: "linear",
      duration: 4,
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [xPercentage, yPercentage]);

  return (
    <div
      ref={tabRef}
      id="about"
      className="relative lg:flex-1 flex items-center gap-2.5 p-2.5 rounded-xl border border-white/15 bg-gradient-to-r from-purple-400/30 to-black"
    >
      <motion.div
        style={{ maskImage }}
        className="absolute inset-0 -mx-px rounded-xl border border-[#a369ff]"
      />

      <p className="font-medium text-white/80">{title}</p>
    </div>
  );
}
