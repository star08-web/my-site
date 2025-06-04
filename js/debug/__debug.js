const primarySel = document.getElementById('primary');
const primaryHoverSel = document.getElementById('primary-hover');
const primaryFocusSel = document.getElementById('primary-focus');
const primaryInverseSel = document.getElementById('primary-inverse');
const linkColorSel = document.getElementById('link-color');
const saveTheme = document.getElementById('saveTheme');

const colorsDefaults = {
    primary: '#300479',
    primaryHover: '#2a007a',
    primaryFocus: '#1a0030',
    primaryInverse: '#ffffff',
    linkColor: '#4052f8'
}

const colors = localStorage.getItem('colors') ? JSON.parse(localStorage.getItem('colors')) : {};
const current = {
    primary: colors.primary || colorsDefaults.primary,
    primaryHover: colors.primaryHover || colorsDefaults.primaryHover,
    primaryFocus: colors.primaryFocus || colorsDefaults.primaryFocus,
    primaryInverse: colors.primaryInverse || colorsDefaults.primaryInverse,
    linkColor: colors.linkColor || colorsDefaults.linkColor
}

primarySel.value = current.primary;
primaryHoverSel.value = current.primaryHover;
primaryFocusSel.value = current.primaryFocus;
primaryInverseSel.value = current.primaryInverse;   
linkColorSel.value = current.linkColor;

saveTheme.addEventListener('click', () => {
    const acc = {
        primary: primarySel.value,
        primaryHover: primaryHoverSel.value,
        primaryFocus: primaryFocusSel.value,
        primaryInverse: primaryInverseSel.value,
        linkColor: linkColorSel.value
    }
    localStorage.setItem('colors', JSON.stringify(acc));
    localStorage.setItem('accentColor', true);
    const rn = spawnnotify('Tema modificato', 'debug');
    setTimeout(() => {
        window.location.reload();
    }, rn.duration + 300);
});

function __BGReset() {
  localStorage.removeItem('gridColors');
  spawnnotify('Background ripristinato ai valori di default', 'debug');
}

function __TReset(){
    localStorage.removeItem('colors');
    localStorage.removeItem('accentColor');
    const rn = spawnnotify('Tema ripristinato ai valori di default', 'debug');
    setTimeout(() => {
        window.location.reload();
    }, rn.duration + 300);
}

function __DReset(){
    deleteCookie('d-enabled');
    spawnnotify('Modalità dislessia ripristinata ai valori di default', 'debug');
}

