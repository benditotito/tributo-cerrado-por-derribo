// Navegación móvil
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// Año en footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// --- FORMULARIO: Versión MAILTO (sin backend) ---
const form = document.getElementById('bookingForm');
const formMsg = document.getElementById('formMsg');

if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot antispam
    if (form.website && form.website.value){
      if (formMsg) formMsg.textContent = 'Error al enviar. Vuelve a intentarlo.';
      return;
    }

    const f = new FormData(form);
    const nombre = encodeURIComponent(f.get('nombre')||'');
    const email  = encodeURIComponent(f.get('email')||'');
    const fecha  = encodeURIComponent(f.get('fecha')||'');
    const ciudad = encodeURIComponent(f.get('ciudad')||'');
    const mensaje= encodeURIComponent(f.get('mensaje')||'');

    const subject = 'Reserva: Tributo Cerrado por Derribo';
    const body = `Nombre: ${nombre}%0AEmail: ${email}%0AFecha: ${fecha}%0ACiudad: ${ciudad}%0A%0AMensaje:%0A${mensaje}`;
    window.location.href = `mailto:u6930393584@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    if (formMsg) formMsg.textContent = 'Abriendo tu gestor de correo…';
  });
}

/* 
// --- OPCIÓN ALTERNATIVA: Formspree (con backend) ---
// Descomenta esto y comenta el bloque de arriba si prefieres usar Formspree.io

if (form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.website && form.website.value){ if (formMsg) formMsg.textContent = 'Error al enviar.'; return; }
    const action = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
    const data = new FormData(form);
    try{
      const res = await fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
      if (res.ok){
        form.reset();
        if (formMsg) formMsg.textContent = '¡Gracias! Te escribiremos por email.';
      } else {
        if (formMsg) formMsg.textContent = 'No se pudo enviar. Inténtalo más tarde.';
      }
    }catch(err){
      if (formMsg) formMsg.textContent = 'Error de conexión.';
    }
  });
}
*/
