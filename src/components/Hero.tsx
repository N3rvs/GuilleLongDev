import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center py-28 px-4 min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        Soluciones web modernas para impulsar tu presencia digital
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-slate-100 mb-4"
      >
        Desde portafolios creativos hasta blogs, landing pages y pequeñas aplicaciones.
      </motion.p>

      <p className="text-slate-300 text-xl max-w-xl mx-auto mb-8">
        Soy desarrollador freelance enfocado en diseño moderno, funcionalidad y rendimiento. Creo sitios y apps personalizadas que ayudan a destacar en el mundo digital, ya seas emprendedor, creador de contenido o empresa.
      </p>

      <motion.a
        href="#contacto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Empezar mi proyecto
      </motion.a>
    </section>
  );
};

export default Hero;
