"use client";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideData {
  text: string;
  name: string;
  title: string;
  avatarImg: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  active: boolean;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, active, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { avatarImg, name, text, title } = slide;

  return (
    <>
      <div className="[perspective:1200px] [transform-style:preserve-3d]">
        <motion.div
          ref={slideRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleSlideClick(index)}
          style={{
            transform:
              current !== index
                ? "scale(0.98) rotateX(8deg)"
                : "scale(1) rotateX(0deg)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transformOrigin: "bottom",
          }}
          className={cn("border border-white/15 flex flex-col justify-between p-6 md:p-10 max-w-xs md:max-w-md rounded-xl flex-none ease-in-out w-[70vmin] h-full mx-[4vmin] z-10 hover:bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] transition-colors duration-300  cursor-pointer", active
            ? "bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]"
            : "bg-[linear-gradient(to_top_right,rgb(255,255,255,.08),rgb(0,0,0,.2))]")}
        >
          <p className="xs:text-lg md:text-2xl tracking-tight">{text}</p>
          <div className="flex items-center gap-3 mt-5">
            <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
              <img
                src={avatarImg}
                alt={`Avatar for ${name}`}
                className="size-11 rounded-lg grayscale"
              />
            </div>
            <div>
              <span>{name}</span>
              <p className="text-sm text-white/50">{title}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[250px] md:h-[300px] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            active={current === index}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
