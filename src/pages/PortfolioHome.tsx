import { useEffect, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Navbar from "../components/Navbar";
import Particles from "react-tsparticles";
import Hero from "../components/Hero";
import Proyectos from "../components/Proyectos";
import Servicios from "./Servicios";
import Testimonios from "../components/Testimonios";
import SobreMi from "./SobreMi";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const PortafolioHome = () => {
  useEffect(() => {
    document.title = "Guillermo Dev | Desarrollo Web Freelance";
  }, []);

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  
  return (
    <>
      {/* Fondo animado */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: { value: "#0f172a" },
          },
          particles: {
            number: { value: 60 },
            color: { value: "#38bdf8" },
            links: {
              enable: true,
              distance: 120,
              color: "#38bdf8",
              opacity: 0.5,
            },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <Navbar />
      <a
        href="https://wa.me/+34645337076"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 animate-bounce"
        title="Escríbeme por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.555 4.118 1.519 5.865L0 24l6.341-1.638A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.836 17.074l-1.227.858a.747.747 0 01-.734.113c-.682-.215-1.966-.766-3.193-2.123-1.2-1.326-1.719-2.326-1.91-3.031a.749.749 0 01.111-.691l.856-1.396a.747.747 0 00-.154-1.273l-1.274-1.273a.747.747 0 00-1.273-.155l-1.41.864a.75.75 0 00-.526.946c0 1.138.462 3.266 2.689 5.709 2.344 2.574 4.79 3.273 6.201 3.273a.75.75 0 00.95-.531l.852-1.411a.75.75 0 00-.154-1.273l-1.273-1.273a.747.747 0 00-1.273-.154z" />
        </svg>
      </a>

      <main className="relative z-10 text-white">
        <Hero />
        <SobreMi />
        <Servicios />
        <Proyectos />
        <Testimonios />
        <Contacto />
        <Footer />
      </main>
    </>
  );
};

export default PortafolioHome;
