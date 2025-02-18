import { services } from "@/constants";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="pt-20 md:pt-24">
      <div className="container flex flex-col gap-32">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Nuestros servicios
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
            Servicios personalizados para satisfacer tus necesidades, con
            atención profesional y soluciones de calidad
          </p>
        </div>
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          {services.map(
            ({ title, description, background, borderColor, color }, i) => (
              <div key={i} className="sticky top-[20%] h-[100vh] max-w-[650px] w-full mx-auto">
                <div
                  style={{
                    transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                  }}
                  className={cn(
                    "relative flex flex-col items-center justify-center gap-4 h-[400px] bg-black rounded-2xl border",
                    background,
                    borderColor
                  )}
                >
                  <h2
                    className="text-5xl md:text-[75px] text-center tracking-tighter uppercase font-extrabold leading-[90%]"
                    style={{ color }}
                  >
                    {title}
                  </h2>
                  <p
                    className="sm:text-xl w-[80%] text-center opacity-70"
                    style={{ color }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
