import { codeToHtml } from 'https://esm.sh/shiki@3.0.0'
import shikijsthems from 'https://cdn.jsdelivr.net/npm/@shikijs/themes@3.5.0/+esm'

const notiForm = document.getElementById('notiForm');
const notiText = document.getElementById('notiText');
const notiType = document.getElementById('notiType');
const notiTime = document.getElementById('notiTime');
const notiResponse = document.getElementById('notiResponse');


notiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = notiType.value;
    const text = notiText.value;
    const time = notiTime.value;

    const rn = spawnnotify(text, type, parseInt(time));
    codeToHtml(JSON.stringify(rn, null, 2), { lang: 'json', theme: 'catppuccin-mocha' }).then((html) => {
        notiResponse.innerHTML = html;
    }).catch((err) => {
        notiResponse.textContent = err.message;
    });
});