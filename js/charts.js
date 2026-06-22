/* ══════════════════════════════════════
   charts.js — Inisialisasi Chart.js
   (Donut market + Bar revenue)
   Cafe & Resto EY
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Donut: Komposisi Target Pasar ── */
  const ctxMarket = document.getElementById('marketChart');
  if (ctxMarket) {
    new Chart(ctxMarket, {
      type: 'doughnut',
      data: {
        labels: ['Mahasiswa', 'Masyarakat Umum', 'Keluarga'],
        datasets: [{
          data: [50, 30, 20],
          backgroundColor: ['#D4A853', '#7A8C6E', '#2C1810'],
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              font: { family: 'Inter', size: 13 }
            }
          }
        },
        cutout: '62%'
      }
    });
  }

  /* ── Bar: Proyeksi Pendapatan 6 Bulan ── */
  const ctxRevenue = document.getElementById('revenueChart');
  if (ctxRevenue) {
    new Chart(ctxRevenue, {
      type: 'bar',
      data: {
        labels: ['Bln 1', 'Bln 2', 'Bln 3', 'Bln 4', 'Bln 5', 'Bln 6'],
        datasets: [
          {
            label: 'Pendapatan (Rp Juta)',
            data: [2, 0, 0, 0, 0, 0],
            backgroundColor: '#D4A853',
            borderRadius: 8,
            borderSkipped: false
          },
          {
            label: 'Biaya Operasional (Rp Juta)',
            data: [37, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(44,24,16,.15)',
            borderRadius: 8,
            borderSkipped: false
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              font: { family: 'Inter', size: 13 }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,.05)' }
          },
          x: { grid: { display: false } }
        }
      }
    });
  }

}); 