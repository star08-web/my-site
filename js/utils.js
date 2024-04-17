function checkCookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
            return true;
        }
    }
    return false;
}

function createCookie(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function setStyleTag(cssCode, id="") {
    var styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(styleTag);
    styleTag.id = id
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function replaceURL(uri){
    window.location.href = uri
}

function copyToClipboard(content, type="link") {
    var tempInput = document.createElement("input");
    tempInput.value = content;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    spawnnotify(`${type} copiato negli appunti`, 'success')
}

function calcAge(birth) {
    var td = new Date();
    var bdate = new Date(birth);
    var yr = td.getFullYear() - bdate.getFullYear();
    var tm = td.getMonth();
    var bmonth = bdate.getMonth();

    if (tm < bmonth || (tm === bmonth && td.getDate() < bdate.getDate())) {
        yr--;
    }

    return yr;
}

// Preload Images Self Invoking Function
document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        const preload = new Image();
        preload.src = images[i].src;
    }
});