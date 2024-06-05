const videocontainer = document.getElementById('videocontainer');
let blockstatus = NaN;

async function getVideosFromChannel(maxResults = 10) {
    try {
        apiUrl = `https://fetchyt.star08-web.workers.dev/?maxResults=${maxResults}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            console.error('Errore richiesta API:', response.status, response.statusText);
            throw new spawnnotify(`Errore richiesta API ${response.status}`, 'error');
        }
        
        const data = await response.json();
        
        const videos = data.items.map(item => {
            return {
                title: item.snippet.title,
                videoId: item.id.videoId,
                thumbnail: item.snippet.thumbnails.high.url
            };
        });
        
        return videos;
    } catch (error) {
        spawnnotify(`Si è verificato un errore: ${error}`, 'error');
        console.error('Si è verificato un errore:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const videos = await getVideosFromChannel(30);
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
});
