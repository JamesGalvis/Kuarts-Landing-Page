import { testimonials } from "@/constants";
import { Carousel } from "../common/carousel";

export function Testimonials() {
  return (
    <section id="testimonials" className="pb-20 md:pb-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Opiniones de clientes
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          Las experiencias de nuestros clientes reflejan el compromiso y la
          calidad de nuestro servicio
        </p>
      </div>
      <div className="relative overflow-hidden w-full h-full py-20 [mask-image:linear-gradient(to_right,transparent,black,black_20%,black_80%,transparent)]">
        <Carousel slides={testimonials} />
      </div>
    </section>
  );
}
