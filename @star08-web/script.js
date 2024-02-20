let yt_btn = document.getElementById('YouTube');
let ig_btn = document.getElementById('Instagram');
let tw_btn = document.getElementById('Twitter');
let gh_btn = document.getElementById('Github');
let twt_btn = document.getElementById('Twitch');
let web_btn = document.getElementById('Website');

yt_btn.addEventListener('click', function() {
    window.open('https://www.youtube.com/@star08-web');
});
ig_btn.addEventListener('click', function() {
    window.open('https://www.instagram.com/star08_web.official');
});
tw_btn.addEventListener('click', function() {
    window.open('https://twitter.com/star08_web');
});
gh_btn.addEventListener('click', function() {
    window.open('https://github.com/star08-web');
});
tw_btn.addEventListener('click', function() {
    window.open('https://www.twitch.tv/star08web');
});
web_btn.addEventListener('click', function() {
    window.open(document.location.origin);
});