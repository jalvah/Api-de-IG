const likesChart = document.getElementById('likesChart').getContext('2d');

new Chart(likesChart, {
  type: 'bar',
  data: {
    labels: ['Publicación 1', 'Publicación 2', 'Publicación 3', 'Publicación 4', 'Publicación 5'],
    datasets: [{
      label: 'Likes',
      data: [120, 150, 100, 180, 200],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
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

const postTypesChart = document.getElementById('postTypesChart').getContext('2d');

new Chart(postTypesChart, {
  type: 'pie',
  data: {
    labels: ['Fotos', 'Videos', 'Historias'],
    datasets: [{
      data: [60, 30, 10],
      backgroundColor: ['#1a0a5c', '#a70566', '#08b0ff'],
      borderColor: '#fff',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});