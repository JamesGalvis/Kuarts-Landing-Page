import logo from "@/assets/images/logo.png";
import { ImgHTMLAttributes, MouseEvent } from "react";
import { Magnetic } from "./magnetic";

export function Logo(props: ImgHTMLAttributes<HTMLImageElement>) {
  const handleNavItemClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // const url = new URL(e.currentTarget.href);
    // const hash = url.hash;

    // console.log(hash)

    const target = document.querySelector("#home");

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Magnetic>
      <div className="cursor-pointer" onClick={handleNavItemClick}>
        <img src={logo} {...props} />
      </div>
    </Magnetic>
  );
}
