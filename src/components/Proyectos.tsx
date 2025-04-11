import { motion } from 'framer-motion';
import manitas from "../assets/manitaselpana.png"
import legionaries from "../assets/legionaries.png"

interface Proyecto {
  title: string;
  image: string;
  link: string;
  desc: string;
}

const proyectos: Proyecto[] = [
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
  return (
    <section id="proyectos" className="py-20 px-1 max-w-6xl mx-auto text-center align-items-center">
      <h2 className="text-3xl font-bold mb-12">Proyectos recientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">

        {proyectos.map((project: Proyecto, i: number) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
          >
            <div
              className="w-full h-70 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-slate-300 text-sm">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 inline-block"
              >
                Ver sitio web
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
