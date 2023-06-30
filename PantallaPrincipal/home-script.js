// Datos para el gráfico de distribución de likes por tipo de contenido
const likesData = {
  labels: ['Foto', 'Video', 'Historia'],
  datasets: [
    {
      label: 'Likes',
      data: [500, 300, 200],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

// Configuración del gráfico de distribución de likes por tipo de contenido
const likesChartConfig = {
  type: 'doughnut',
  data: likesData,
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  }
};

// Crear el gráfico de distribución de likes por tipo de contenido
const likesChartCanvas = document.getElementById('likesChart').getContext('2d');
new Chart(likesChartCanvas, likesChartConfig);

// Datos para el gráfico de distribución de seguidores por ubicación
const followersData = {
  labels: ['Ciudad A', 'Ciudad B', 'Ciudad C'],
  datasets: [
    {
      label: 'Seguidores',
      data: [2000, 1500, 1000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

// Configuración del gráfico de distribución de seguidores por ubicación
const followersChartConfig = {
  type: 'bar',
  data: followersData,
  options: {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

// Crear el gráfico de distribución de seguidores por ubicación
const followersChartCanvas = document.getElementById('followersChart').getContext('2d');
new Chart(followersChartCanvas, followersChartConfig);
