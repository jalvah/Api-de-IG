'use strict'

const fotos = document.querySelector('.row');
const usuario = document.querySelector('.user-info');

const token1 = `IGQVJXNlJROGJVbEw4dVVnUjQtbzNiZA0pYZ`

const token2 = `A3FndWdmRi1ZAVVhEdkdQYXJ2QlVQZAG9tTk`;

const token3 = `tQQmcxSXNSLVBPTUV2YmJydEFqUlQ3YzZATO`;

const token4 = `XJ0c3R0c3ZAfd3g3cWVUNm9GR09QUEE4M1hBX3llUEVjdlBobgZDZD`;

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,username,permalink&limit=80&access_token=${token1}${token2}${token3}${token4}`;

//<img src="photo1.jpg" alt="Foto 1"></img>

fetch(url)
.then(res => res.json())
.then(data => CrearHTML(data.data))

function CrearHTML(data){
    for (const img of data){
        fotos.innerHTML +=
        `
        <div class="col-md-4">
            <img src="${img.media_url}" class="img-fluid mb-4">
        </div>
        `;
    }
    }

