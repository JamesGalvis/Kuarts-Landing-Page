import { partnerships } from "@/constants";
import { Magnetic } from "../common/magnetic";

export function Partnerships() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl text-white/70">Partnerships</h2>
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-wrap justify-center items-center w-full gap-14 mt-8">
              {partnerships.map((logo, i) => (
                <Magnetic key={i}>
                  <img src={logo} alt={logo} className="h-14 w-auto" />
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
