let apiKey = '';
let videocontainer = document.getElementById('videocontainer');

if (window.envtype === 'dev') {
    apiKey = window.yt_api_key;
} else {
    apiKey = window.env.YT_API_KEY;
}

const channelId = 'UCSi17CVmpt6HZCOfwg7g3_w';

async function getVideosFromChannel(channelId, apiKey, maxResults = 10) {
    try {
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Errore nella richiesta API');
        }
        
        const data = await response.json();
        
        const videos = data.items.map(item => {
            return {
                title: item.snippet.title,
                videoId: item.id.videoId,
                thumbnail: item.snippet.thumbnails.default.url
            };
        });
        
        return videos;
    } catch (error) {
        spawnnotify(`Si è verificato un errore: ${error}`, 'error');
        console.error('Si è verificato un errore:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const videos = await getVideosFromChannel(channelId, apiKey, 10);
    videos.forEach(element => {
        const video = document.createElement('article');
        video.innerHTML = `
        <header>
            <img src="${element.thumbnail}" alt="${element.title}">
        </header>
        <h2>${element.title}</h2>
        <button onclick="replaceURL('https://www.youtube.com/watch?v=${element.videoId}')"><i class="fa-regular fa-circle-play"></i> Guarda su YouTube</button>
        <button onclick="copyToClipboard('https://www.youtube.com/watch?v=${element.videoId}')"><i class="fa-solid fa-link"></i> Copia link</button>
        `;
        videocontainer.appendChild(video);
        for (let i = 0; i < 8; i++) {videocontainer.appendChild(document.createElement('br'));}
    });
});
