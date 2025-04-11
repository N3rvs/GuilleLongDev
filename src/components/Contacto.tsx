import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [errorNombre, setErrorNombre] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const validarFormulario = () => {
    let valid = true;

    if (!nombre.trim()) {
      setErrorNombre('Por favor, introduce tu nombre.');
      valid = false;
    } else {
      setErrorNombre('');
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('Introduce un email válido.');
      valid = false;
    } else {
      setErrorEmail('');
    }

    if (!mensaje.trim()) {
      setErrorMensaje('Cuéntame un poco qué necesitas.');
      valid = false;
    } else {
      setErrorMensaje('');
    }

    return valid;
  };

  const enviarFormulario = async () => {
    if (enviando) return;
    if (!validarFormulario()) return;

    setEnviando(true);

    const templateParams = {
      name: nombre,
      email,
      message: mensaje,
      time: new Date().toLocaleString(),
    };

    try {
      // 1️⃣ Guardar en Firestore
      await addDoc(collection(db, 'contactos'), {
        nombre,
        email,
        mensaje,
        fecha: new Date(),
        leido: false,
      });

      // 2️⃣ Email a vos
      await emailjs.send(
        'service_8q7o7tb',
        'template_03ghjq8',
        templateParams,
        'm70BI5ECRkObfYcB2'
      );

      // 3️⃣ Respuesta automática al cliente
      await emailjs.send(
        'service_8q7o7tb',
        'template_t77vm09',
        templateParams,
        'm70BI5ECRkObfYcB2'
      );

      setEnviado(true);
      setNombre('');
      setEmail('');
      setMensaje('');

      setTimeout(() => setEnviado(false), 4000);
    } catch (error) {
      alert('Hubo un error al enviar el mensaje.');
      console.error(error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 px-4 bg-slate-900 text-white text-center scroll-mt-24"
    >
      <h2 className="text-3xl font-bold mb-8">Hablemos de tu proyecto</h2>

      <div className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <input
            type="text"
            placeholder="Tu nombre"
            className={`w-full p-3 rounded-lg bg-slate-800 border ${
              errorNombre ? 'border-red-500' : 'border-slate-700'
            } focus:outline-none focus:ring-2 ${
              errorNombre ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errorNombre && (
            <p className="text-red-500 text-sm mt-1">{errorNombre}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className={`w-full p-3 rounded-lg bg-slate-800 border ${
              errorEmail ? 'border-red-500' : 'border-slate-700'
            } focus:outline-none focus:ring-2 ${
              errorEmail ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Hola! ¿En qué te puedo ayudar?"
            rows={4}
            className={`w-full p-3 rounded-lg bg-slate-800 border ${
              errorMensaje ? 'border-red-500' : 'border-slate-700'
            } focus:outline-none focus:ring-2 ${
              errorMensaje ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          {errorMensaje && (
            <p className="text-red-500 text-sm mt-1">{errorMensaje}</p>
          )}
        </div>

        <motion.button
          type="button"
          aria-label="Enviar formulario de contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={enviarFormulario}
          disabled={enviando}
          className={`bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold shadow-lg w-full text-center ${
            enviando ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {enviando ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 100 24v-4l-5 5 5 5v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              Enviando...
            </div>
          ) : (
            'Enviar mensaje'
          )}
        </motion.button>

        {enviado && (
          <motion.p
            className="text-green-400 text-sm text-center mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            ¡Mensaje enviado con éxito!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Contacto;
