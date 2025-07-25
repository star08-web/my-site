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

function setStyleTag(cssCode, id = "") {
    var styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(styleTag);
    styleTag.id = id
}

function deleteCookie(cookieName) {
    const date = new Date('Thu, 22 Sept 1999 00:00:00 UTC'); // haha little easter egg
    document.cookie = cookieName + "=; expires=" + date.toUTCString() + "; path=/;";
}

function replaceURL(uri) {
    window.location.href = uri
}

function copyToClipboard(content, type = "link") {
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
    try {
        if (!birth || typeof birth !== 'string') {
            spawnnotify('Data di nascita non valida', 'error');
            return 15;
        }

        const today = new Date();

        const parts = birth.split('-');
        if (parts.length !== 3) {
            spawnnotify('Formato data non valido. Usa DD-MM-YYYY', 'error');
            return 15;
        }
        
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            spawnnotify('Data di nascita contiene valori non numerici', 'error');
            return 15;
        }
        
        const birthDate = new Date(year, month, day);

        if (isNaN(birthDate.getTime()) || 
            birthDate.getDate() !== day || 
            birthDate.getMonth() !== month || 
            birthDate.getFullYear() !== year) {
            spawnnotify('Data di nascita non valida', 'error');
            return 15;
        }

        if (birthDate > today) {
            spawnnotify('La data di nascita non può essere nel futuro', 'error');
            return 15;
        }

        let years = today.getFullYear() - birthDate.getFullYear();
        
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            years -= 1;
        }
    
        if (years < 0 || years > 150) {
            spawnnotify('Età calcolata non valida', 'error');
            return 15;
        }
        
        return years;
        
    } catch (error) {
        spawnnotify(`Errore durante il calcolo dell'età: ${error.message}`, 'error');
        return 15;
    }
}

function isMobile() {
    let mobile = false;
    let userAgent = navigator.userAgent;
    let mobileAgents = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    for (let i = 0; i < mobileAgents.length; i++) {
        if (userAgent.indexOf(mobileAgents[i]) > -1) {
            mobile = true;
            break;
        }
    }
    return mobile;
}

// Preload Images Self Invoking Function
document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        const preload = new Image();
        preload.src = images[i].src;
    }
});