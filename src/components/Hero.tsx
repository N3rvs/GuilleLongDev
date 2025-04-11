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
        Diseño web moderno para negocios locales
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-slate-300 mb-4"
      >
        Páginas rápidas, profesionales y optimizadas para captar clientes.
      </motion.p>

      <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
       Desarrollador freelance con enfoque en diseño moderno y
        rendimiento. Ayudo a negocios locales a destacar online con sitios que
        ayuden mejorar potencialmente sus negocios dentro del mundo digital.
      </p>

      <motion.a
        href="#contacto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Quiero mi web
      </motion.a>
    </section>
  );
};

export default Hero;
