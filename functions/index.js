const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.enviarCorreoContacto = functions.firestore
  .document('contactos/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

   
    const mailToClient = {
      from: `"Guillermo Dev" <${gmailEmail}>`,
      to: data.email,
      subject: `¡Hola ${data.nombre}, gracias por tu mensaje!`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; color: #111;">
          <h2 style="display: flex; align-items: center; font-size: 20px; margin-bottom: 12px;">
            <svg style="width: 20px; height: 20px; margin-right: 8px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2l4 -4" />
              <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
            </svg>
            ¡Gracias por tu mensaje!
          </h2>

          <p>Hola ${data.nombre}, gracias por escribirme. He recibido tu mensaje:</p>

          <div style="background: #f1f1f1; padding: 12px; border-radius: 6px; margin: 20px 0;">
            ${data.mensaje}
          </div>

          <p>En breve me pondré en contacto contigo.</p>
          <p>Podés ver mis proyectos en <a href="https://guillermodev.com" style="color: #3b82f6;">guillermodev.com</a></p>

          <p style="margin-top: 30px;">Un saludo,<br><strong>Guillermo</strong></p>
        </div>
      `,
    };

  
    const mailToDev = {
      from: `"Guillermo Dev" <${gmailEmail}>`,
      to: gmailEmail,
      subject: `Nuevo mensaje de ${data.nombre}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; color: #111;">
          <h2 style="display: flex; align-items: center; font-size: 20px; margin-bottom: 12px;">
            <svg style="width: 20px; height: 20px; margin-right: 8px;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Nuevo mensaje recibido
          </h2>

          <p style="display: flex; align-items: center; margin-bottom: 8px;">
            <svg style="width: 18px; height: 18px; margin-right: 6px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M4 21v-2a4 4 0 0 1 3-3.87"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <strong>Nombre:</strong> ${data.nombre}
          </p>

          <p style="display: flex; align-items: center; margin-bottom: 8px;">
            <svg style="width: 18px; height: 18px; margin-right: 6px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <strong>Email:</strong> ${data.email}
          </p>

          <p style="margin-bottom: 8px;"><strong>Mensaje:</strong></p>
          <div style="background: #f1f1f1; padding: 12px; border-radius: 6px;">
            ${data.mensaje}
          </div>

          <p style="font-size: 12px; color: #888; margin-top: 20px;">
            Recibido: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailToClient);
      await transporter.sendMail(mailToDev);
      console.log('✅ Correos enviados al cliente y al desarrollador');
    } catch (error) {
      console.error('❌ Error al enviar correos:', error);
    }
  });
