// script.js
document.getElementById('year').textContent = new Date().getFullYear();

function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function openReservation(){ document.getElementById('modal').style.display = 'flex'; }
function closeReservation(){ document.getElementById('modal').style.display = 'none'; }

document.getElementById('resForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const msg = `Nama: ${data.get('name')}\nTanggal: ${data.get('date')} ${data.get('time')}\nCatatan: ${data.get('note')}`;
  const wa = 'https://wa.me/6281912356888?text=' + encodeURIComponent('Reservasi Meja - ' + msg);
  window.open(wa, '_blank');
  closeReservation();
});

function openWhatsApp(){ window.open('https://wa.me/6281912356888?text=Halo%20Warkop%20Meteora', '_blank'); }
function openMaps(){ window.open('https://maps.app.goo.gl/BfNgksJMvqS5uLNj7?g_st=ipc', '_blank'); }
function openInstagram(){ window.open('https://instagram.com/warkopmeteorabejidepok', '_blank'); }
function opentiktok(){ window.open('https://www.tiktok.com/@warkopmeteorabejidepok', '_blank'); }
