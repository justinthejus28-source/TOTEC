// Pequeñas interacciones: menu móvil, año dinámico, y preparar mensaje para WhatsApp desde formulario.

document.addEventListener('DOMContentLoaded', function(){
    // año en footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // menu toggle móvil
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    menuToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'flex'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.right = '20px';
        nav.style.top = '64px';
        nav.style.background = 'white';
        nav.style.padding = '10px';
        nav.style.borderRadius = '10px';
        nav.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
      }
    });
  
    // cerrar menu al hacer click en enlace (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if(window.innerWidth <= 980) {
        nav.style.display = '';
        menuToggle.setAttribute('aria-expanded','false');
      }
    }));
  
    // Preparar mensaje para WhatsApp desde formulario
    const btnSend = document.getElementById('btn-send');
    btnSend.addEventListener('click', function(){
      const name = encodeURIComponent(document.getElementById('name').value.trim());
      const company = encodeURIComponent(document.getElementById('company').value.trim());
      const email = encodeURIComponent(document.getElementById('email').value.trim());
      const message = encodeURIComponent(document.getElementById('message').value.trim());
  
      if(!name || !email || !message){
        alert('Por favor completa tu Nombre, Correo y Mensaje.');
        return;
      }
  
      // Texto prellenado para WhatsApp
      let text = `Hola TOTEC, mi nombre es ${decodeURIComponent(name)}.%0A`;
      if(company) text += `Empresa: ${decodeURIComponent(company)}.%0A`;
      text += `Correo: ${decodeURIComponent(email)}.%0A%0A`;
      text += `Mensaje: ${decodeURIComponent(message)}`;
  
      const phone = '50251636890';
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  
      // Abrir WhatsApp en nueva pestaña
      window.open(waUrl, '_blank', 'noopener');
    });
  
  });