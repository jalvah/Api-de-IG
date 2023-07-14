'use strict'

const fotos = document.querySelector('.row');
const usuario = document.querySelector('.user-info');

const token1 = `IGQVJWYjd5b2hFaXRpTkF4a0p3NHRkNzZA0dFVLbjRmYWZAGaDFS`

const token2 = `UGV1TXdUcWdwQ3lJYjhOeGo5VC1FdmhHR1JjZ`;

const token3 = `AHFSLWVoQ05sMnBuczd6el96cnJ2RW9FNG0`;

const token4 = `3eks3dTJjXzJ2S1JVbzJVTXRxbTNFcgZDZD`;

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

