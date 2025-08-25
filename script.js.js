const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
if (form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Reserva enviada');
  });
}