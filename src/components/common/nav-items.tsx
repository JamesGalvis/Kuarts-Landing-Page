import { navLinks } from "@/constants";
import { MouseEvent } from "react";

export function NavItems() {
  const handleNavItemClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <nav className="max-md:hidden flex items-center gap-6">
      {navLinks.map(({ label, href }, i) => (
        <a
          key={i}
          href={href}
          onClick={handleNavItemClick}
          className="relative group/button text-[18px] text-white hover:text-white/90 transition duration-300 font-medium after:content-[''] after:h-px after:w-0 after:left-0 after:absolute after:top-full after:bg-white/90 hover:after:w-full after:transition-all after:duration-500"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
