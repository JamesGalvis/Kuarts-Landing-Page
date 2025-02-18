import loducode from "@/assets/images/loducode.png";
import charito from "@/assets/images/charito.png";
import co from "@/assets/images/co.png";
import hato from "@/assets/images/hato.png";
import specialized from "@/assets/images/specialized.png";

import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";

import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const navLinks = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Sobre Nosotros",
    href: "#about",
  },
  {
    label: "Servicios",
    href: "#services",
  },
  {
    label: "Testimonios",
    href: "#testimonials",
  },
];

export const partnerships = [loducode, charito, hato, specialized, co];

export const services = [
  {
    title: " Desarrollo Movil",
    description:
      "Creamos apps nativas e híbridas con  React Native, optimizadas para iOS y Android. Implementamos funciones avanzadas como notificaciones push, integración con APIs y geolocalización, garantizando una experiencia fluida y eficiente",
    background: "bg-gradient-to-r from-purple-400/30 to-black",
    borderColor: "border-[rgba(102,77,127,0.35)]",
    color: "#b582eb",
  },
  {
    title: "Desarrollo Web ",
    description:
      "Diseñamos y desarrollamos aplicaciones web dinámicas y escalables con React, Next.js y TypeScript. Nos enfocamos en rendimiento, accesibilidad y diseño responsive, además de crear CMS personalizados para una gestión eficiente del contenido.",
    background:
      "bg-[linear-gradient(to_top_right,rgb(125,216,205,0.35),rgb(0,0,0,.2))]",
    borderColor: "border-[rgba(125,216,205,0.35)]",
    color: "#7dd8cd",
  },
  {
    title: "Backends Solidos",
    description:
      "Desarrollamos APIs robustas y seguras con Django, Node.js y Express, utilizando bases de datos como PostgreSQL y Prisma. Aplicamos buenas prácticas en autenticación y seguridad, integrando sistemas como Clerk y Auth.js para proteger la información.",
    background:
      "bg-[linear-gradient(to_bottom_left,rgb(224,255,87,0.35),black)]",
    borderColor: "border-[rgba(224,255,87,0.35)]",
    color: "",
  },
  {
    title: "Optimización y Seguridad",
    description:
      "Garantizamos sitios web rápidos y seguros con pruebas de rendimiento, optimización SEO y estrategias de ciberseguridad. Protegemos los datos y fortalecemos la infraestructura tecnológica de cada proyecto.",
    background:
      "bg-[linear-gradient(to_top_right,rgb(125,216,205,0.35),rgb(0,0,0,.2))]",
    borderColor: "border-[rgba(125,216,205,0.35)]",
    color: "#7dd8cd",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Optimizamos procesos con inteligencia artificial y automatización, implementando modelos de análisis de datos y algoritmos personalizados. Ayudamos a las empresas a mejorar la eficiencia con soluciones inteligentes y adaptadas a sus necesidades.",
    background: "bg-gradient-to-r from-[#f8b5d0]/30 to-black",
    borderColor: "border-[rgba(248,181,208,0.35)]",
    color: "#f8b5d0",
  },
];

export const testimonials = [
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“El equipo de BUGZERO nos brindó soluciones a medida que mejoraron nuestra plataforma. Son profesionales, rápidos y siempre disponibles. ¡Altamente recomendados!”",
    name: "Charon Landinez",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Trabajar con BUGZERO fue un placer. Cumplieron con todas nuestras expectativas y la calidad del producto final fue excelente. ¡Muy satisfechos con su trabajo!”",
    name: "Tatiana",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];
export const socialLinks = [
  {
    Icon: FaBehance,
    href: "https://www.behance.net/studiogarabatos",
  },
  {
    Icon: FaWhatsapp,
    href: "https://wa.link/pzfz8i",
  },
  {
    Icon: RiInstagramFill,
    href: "https://www.instagram.com/garabatoslab/",
  },
  {
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@studiogarabatos",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/studiogarabatos",
  },
];


export const teamMembers = [
  {
    name: "Sara Sofía Alzate",
    role: "CEO & Fundadora",
    description: "Líder de la visión estratégica y la dirección general de la empresa.",
    background: "bg-gradient-to-r from-purple-400/30 to-black",
    borderColor: "border-[rgba(102,77,127,0.35)]",
    color: "#b582eb",
  },
  {
    name: "James Fernando Galvis",
    role: "CTO (Director de Tecnología)",
    description: "Responsable del desarrollo e innovación tecnológica.",
    background: "bg-[linear-gradient(to_top_right,rgb(125,216,205,0.35),rgb(0,0,0,.2))]",
    borderColor: "border-[rgba(125,216,205,0.35)]",
    color: "#7dd8cd",
  },
  {
    name: "Santiago Suescun",
    role: "Desarrollador Full Stack",
    description: "Encargado de la creación de aplicaciones móviles y web.",
    background: "bg-[linear-gradient(to_bottom_left,rgb(224,255,87,0.35),black)]",
    borderColor: "border-[rgba(224,255,87,0.35)]",
    color: "#e0ff57",
  },
  
]