import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { href: "#sobremi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleMobileLinkClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 backdrop-blur border-b border-slate-800 transition-colors duration-300",
        scrolled ? "bg-slate-950/90 shadow-md" : "bg-slate-900/80"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        <a href="#" className="text-xl font-bold text-blue-400">
          GuilleLong Dev
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                "transition text-lg",
                activeSection === link.href
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleMobileLinkClick(link.href)}
                  className={clsx(
                    "transition text-lg text-white",
                    activeSection === link.href
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
