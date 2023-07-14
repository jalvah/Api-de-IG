// Código para el gráfico de Likes por Mes
var likesChart = new Chart(document.getElementById("likesChart"), {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
      label: 'Likes',
      data: [100, 200, 150, 300, 250],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Código para el gráfico de Tipo de Contenido
var contentChart = new Chart(document.getElementById("contentChart"), {
  type: 'pie',
  data: {
    labels: ['Fotos', 'Videos', 'Historias'],
    datasets: [{
      label: 'Tipo de Contenido',
      data: [60, 30, 10],
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 205, 86, 0.5)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
      borderWidth: 1
    }]
  }
});

// Código para el gráfico de Crecimiento de Seguidores
var followersChart = new Chart(document.getElementById("followersChart"), {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
      label: 'Seguidores',
      data: [1000, 1200, 1500, 1800, 2000],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Código para el gráfico 4: Actividad de Publicaciones por Día de la Semana
var chart4Data = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [{
    label: 'Cantidad de Publicaciones',
    data: [10, 8, 5, 12, 7, 6, 9],
    backgroundColor: 'rgba(75, 192, 192, 0.5)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

var chart4 = new Chart(document.getElementById("chart4"), {
  type: 'bar',
  data: chart4Data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Código para el gráfico 5: Participación por Hora del Día
var chart5Data = {
  labels: ['12am', '4am', '8am', '12pm', '4pm', '8pm'],
  datasets: [{
    label: 'Participación',
    data: [100, 80, 120, 200, 150, 180],
    fill: false,
    borderColor: 'rgba(54, 162, 235, 1)',
    tension: 0.2
  }]
};

var chart5 = new Chart(document.getElementById("chart5"), {
  type: 'line',
  data: chart5Data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
