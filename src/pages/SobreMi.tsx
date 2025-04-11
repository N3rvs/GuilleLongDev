import { motion } from "framer-motion";
import avatar from "../assets/avatar.png"

const SobreMi = () => {
  return (
    <section id="sobremi" className="py-20 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <motion.img
          src={avatar}
          alt="Avatar de Guillermo"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-500 shadow-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-slate-300 text-xl">
          Soy Guillermo, desarrollador con  experiencia trabajando en el sector IT. He formado parte de empresas como <strong>Ilunion</strong> y <strong>SADE Consultoría</strong>, donde participé en proyectos reales aplicando tecnologías modernas como <strong>React</strong>, <strong>Blazor</strong>, <strong>.NET</strong> y <strong>Python</strong>.
        </p>

        <p className="text-slate-300 mt-4 text-xl">
          Durante este tiempo, me especialicé en la creación de APIs, interfaces de usuario, integración de sistemas y despliegues completos, desarrollando así un perfil <strong>fullstack</strong> sólido. Gracias a todo ese camino recorrido, hoy me dedico al desarrollo web freelance con las habilidades necesarias para ofrecer soluciones completas, rápidas y profesionales.
        </p>

        <p className="text-slate-300 mt-4 text-xl">
          Mi objetivo es ayudar a negocios locales, emprendedores y profesionales a tener presencia online con páginas que no solo se ven bien, sino que venden.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
