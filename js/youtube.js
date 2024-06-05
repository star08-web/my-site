const videocontainer = document.getElementById('videocontainer');
let blockstatus = NaN;

function getVideosFromChannel(maxResults = 10) {
    return new Promise((resolve, reject) => {
        const apiUrl = `https://fetchyt.star08-web.workers.dev/?maxResults=${maxResults}`;
        const request = new XMLHttpRequest();
        request.open('GET', apiUrl, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                const data = JSON.parse(request.responseText);
                const videos = data.items.map(item => {
                    return {
                        title: item.snippet.title,
                        videoId: item.id.videoId,
                        thumbnail: item.snippet.thumbnails.high.url
                    };
                });
                resolve(videos);
            } else {
                console.error('Errore richiesta API:', request.status, request.statusText);
                reject(new Error(`Errore richiesta API ${request.status}`));
            }
        };

        request.onerror = function () {
            console.error('Si è verificato un errore:', request.statusText);
            reject(new Error('Si è verificato un errore'));
        };

        request.send();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    getVideosFromChannel(30)
        .then(videos => {
            let grid = undefined;
            videos.forEach(element => {
                if (blockstatus === 2 || isNaN(blockstatus)) {
                    if (!isNaN(blockstatus)) {
                        videocontainer.appendChild(document.createElement('br'));
                    }
                    grid = document.createElement('div');
                    grid.classList.add('grid');
                    videocontainer.appendChild(grid);
                    blockstatus = 0;
                }
                const video = document.createElement('div');
                const box = document.createElement('article');
                box.innerHTML = `
                <header>
                    <img src="${element.thumbnail}" alt="${element.title}" style="border-radius: 7px;">
                </header>
                <h2>${element.title}</h2>
                <button onclick="replaceURL('https://www.youtube.com/watch?v=${element.videoId}')"><i class="fa-regular fa-circle-play"></i> Guarda su YouTube</button>
                <button onclick="copyToClipboard('https://www.youtube.com/watch?v=${element.videoId}')"><i class="fa-solid fa-link"></i> Copia link</button>
                `;
                video.appendChild(box);
                grid.appendChild(video);
                blockstatus = blockstatus + 1;
            });
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
});
