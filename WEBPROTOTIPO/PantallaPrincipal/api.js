'use strict'

const fotos = document.querySelector('.photo-grid');

const token = `IGQVJYT21ZAUm1Fd0YtdEQxRDdzOVhneWpRM3d1X2pOV1lXTjMxU2xYeEJUUkQ2WW10ano4YzhVU3ZA1Sk9RSVBkb0NCWTV6eTZAOVmtSLUpoUmI5SkVjeVczR1VTdE81NUtGX2plbTBjRk1YMWpCeHhncgZDZD`;

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=80&access_token=${token}`;

//<img src="photo1.jpg" alt="Foto 1"></img>

fetch(url)
.then(res => res.json())
.then(data => CrearHTML(data.data))

function CrearHTML(data){
    for (const img of data){
        fotos.innerHTML +=
        /*`<div class ="image overflow">
            <img loading="lazy" src="${img.media_url}" alt="">
        </div>`;*/
        `<img src="${img.media_url}" alt="Foto 1"></img>`
    }
}