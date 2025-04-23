import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import manitas from "../assets/manitaselpana.png";
import legionaries from "../assets/legionaries.png";
import kim from "../assets/kimlongueira.png";

interface Proyecto {
  title: string;
  image: string;
  link: string;
  desc: string;
}

const proyectos: Proyecto[] = [
  {
    title: 'Portafolio de Kim Longueira',
    image: kim,
    link: 'https://kimportafolio.web.app/',
    desc: 'Portafolio profesional creativo',
  },
  {
    title: 'Manitas El Pana',
    image: manitas,
    link: 'https://manitaselpana.web.app/',
    desc: 'Landing moderna con presupuesto, galería y contacto WhatsApp.',
  },
  {
    title: 'Legionaries Esports',
    image: legionaries,
    link: 'https://legionaries-152eb.web.app/',
    desc: 'Página con login, formulario y componentes suaves y modernos.',
  },
];

const Proyectos = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % proyectos.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  return (
    <section id="proyectos" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Proyectos recientes</h2>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-xl p-4"
          >
            <div
              className="w-full h-64 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${proyectos[index].image})` }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{proyectos[index].title}</h3>
              <p className="text-slate-300 text-sm">{proyectos[index].desc}</p>
              <a
                href={proyectos[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 inline-block"
              >
                Ver sitio web
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flechas */}
        <div className="absolute inset-y-1/2 w-full flex justify-between items-center px-4">
          <button onClick={handlePrev}>
            <ChevronLeft className="text-blue-400 w-8 h-8 hover:scale-110 transition" />
          </button>
          <button onClick={handleNext}>
            <ChevronRight className="text-blue-400 w-8 h-8 hover:scale-110 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
