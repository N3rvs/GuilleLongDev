import { motion } from "framer-motion";

const testimonios = [
  {
    nombre: "Juan, Manitas El Pana",
    texto: "Rápido, claro y cumplió con todo lo prometido. ¡Volvería a contratarlo sin duda!",
  },
  {
    nombre: "Lucas, Legionaries Esports",
    texto: "Nos hizo una web para el equipo que se ve pro y carga rapidísimo. ¡Un lujo!",
  },
  {
    nombre: "Ana, Freelance Coach",
    texto: "Me ayudó a lanzar mi web personal, súper atento y profesional en todo momento.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { scale: 1.03, y: -5, transition: { type: "spring", stiffness: 150 } },
};

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-20 px-4 bg-slate-900 text-center">
      <h2 className="text-3xl font-bold text-white mb-12">Lo que dicen mis clientes</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center">
        {testimonios.map((testi, index) => (
          <motion.blockquote
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-slate-800 p-6 rounded-2xl text-left border border-slate-700 shadow-md transition-all"
          >
            <p className="text-slate-300 italic mb-4">“{testi.texto}”</p>
            <footer className="text-blue-400 font-medium">– {testi.nombre}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
