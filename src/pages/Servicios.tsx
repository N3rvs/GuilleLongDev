import { motion } from 'framer-motion';
import { Laptop, MessageSquareText, Rocket } from 'lucide-react'; // 👈 Lucide icons

const servicios = [
  {
    titulo: 'Diseño y desarrollo de páginas web modernas',
    descripcion: 'Webs rápidas, adaptables a móviles, con diseño limpio y enfoque en resultados.',
    icon: <Laptop className="w-8 h-8 text-blue-400" />, // 💻
  },
  {
    titulo: 'Integración de WhatsApp y formularios de contacto',
    descripcion: 'Conecta con tus clientes directamente y sin complicaciones.',
    icon: <MessageSquareText className="w-8 h-8 text-blue-400" />, // 📲
  },
  {
    titulo: 'Optimización SEO básica',
    descripcion: 'Tu web lista para aparecer en Google y atraer más visitas.',
    icon: <Rocket className="w-8 h-8 text-blue-400" />, // 🚀
  },
];

const Servicios = () => {
  return (
    <section className="py-20 px-4 text-center max-w-6xl mx-auto" id="servicios">
      <h2 className="text-3xl font-bold mb-12">¿Qué puedo hacer por tu negocio?</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 p-6 rounded-xl shadow text-left"
          >
            <div className="mb-4">{servicio.icon}</div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{servicio.titulo}</h3>
            <p className="text-slate-300 text-sm">{servicio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
