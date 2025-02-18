import { useState } from "react";
import { Logo } from "../common/logo";
import { NavItems } from "../common/nav-items";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 0) {
        setHidden(true);
      } else if (latest < previous && latest < 150) {
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full h-[85px] flex items-center z-10 px-4"
    >
      <div className="container">
        <div className="flex items-center justify-center md:justify-between">
          <Logo className="h-9 w-auto" />
          <NavItems />
        </div>
      </div>
    </motion.header>
  );
}
