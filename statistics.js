const token1 = `IGQVJWYjd5b2hFaXRpTkF4a0p3NHRkNzZA0dFVLbjRmYWZAGaDFS`;
const token2 = `UGV1TXdUcWdwQ3lJYjhOeGo5VC1FdmhHR1JjZ`;
const token3 = `AHFSLWVoQ05sMnBuczd6el96cnJ2RW9FNG0`;
const token4 = `3eks3dTJjXzJ2S1JVbzJVTXRxbTNFcgZDZD`;
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,timestamp&limit=80&access_token=${token1}${token2}${token3}${token4}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const mediaTypes = data.data.map((item) => {
      item.likes = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100 como cantidad de likes
      item.month = new Date(item.timestamp).getMonth() + 1; // Obtiene el mes (1-12) de la fecha de publicación
      return item;
    });
    const hashtagsCount = countHashtags(data.data);
    createLikesChart(mediaTypes);
    generateLikesTable(mediaTypes);
    
    createContentChart(mediaTypes);
    createHashtagsChart(hashtagsCount);
  });

function createLikesChart(mediaTypes) {
  const likes = mediaTypes.map((item) => item.likes);
  const months = mediaTypes.map((item) => getMonthName(item.month)); // Obtener los nombres de los meses

  const ctx = document.getElementById("likesChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: months, // Usar los nombres de los meses como etiquetas
      datasets: [
        {
          label: "Likes",
          data: likes,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 10,
        },
      },
    },
  });
}

function getMonthName(month) {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return monthNames[month - 1];
}
function generateLikesTable(mediaTypes) {
  const tableBody = document.getElementById("likesTableBody");

  // Ordenar las publicaciones por mes de forma ascendente
  const sortedMediaTypes = mediaTypes.sort((a, b) => a.month - b.month);

  for (let i = 1; i < sortedMediaTypes.length; i++) {
    const currentPost = sortedMediaTypes[i];
    const previousPost = sortedMediaTypes[i - 1];
    const difference = currentPost.likes - previousPost.likes;
    const trend = difference > 0 ? "Sube" : difference < 0 ? "Baja" : "Sin cambios";

    const row = document.createElement("tr");
    const monthCell = document.createElement("td");
    const currentPostCell = document.createElement("td");
    const previousPostCell = document.createElement("td");
    const differenceCell = document.createElement("td");
    const trendCell = document.createElement("td");

    monthCell.textContent = getMonthName(currentPost.month);
    currentPostCell.textContent = currentPost.likes;
    previousPostCell.textContent = previousPost.likes;
    differenceCell.textContent = difference;
    trendCell.textContent = trend;

    row.appendChild(monthCell);
    row.appendChild(currentPostCell);
    row.appendChild(previousPostCell);
    row.appendChild(differenceCell);
    row.appendChild(trendCell);

    tableBody.appendChild(row);
  }
}

function createContentChart(mediaTypes) {
  const fotoCount = mediaTypes.filter(
    (item) => item.media_type === "IMAGE"
  ).length;
  const videoCount = mediaTypes.filter(
    (item) => item.media_type === "VIDEO" || item.media_type === 2
  ).length;

  const ctx = document.getElementById("contentChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Fotos", "Videos"],
      datasets: [
        {
          label: "Cantidad",
          data: [fotoCount, videoCount],
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    },
  });
}

function countHashtags(posts) {
const hashtagsCount = {};

for (const post of posts) {
const caption = post.caption;

if (caption) {
const regex = /#\w+/g;
const hashtags = caption.match(regex);

if (hashtags) {
  for (const hashtag of hashtags) {
    if (hashtagsCount[hashtag]) {
      hashtagsCount[hashtag]++;
    } else {
      hashtagsCount[hashtag] = 1;
    }
  }
}
}
}

return hashtagsCount;
}

function createHashtagsChart(hashtagsCount) {
  const labels = Object.keys(hashtagsCount);
  const data = Object.values(hashtagsCount);

  const ctx = document.getElementById("hashtagsChart").getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 205, 86, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}