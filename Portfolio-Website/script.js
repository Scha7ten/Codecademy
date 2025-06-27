// --- Farb-Disco (Color Shuffler) ---
function getComplementaryColor(h, s, l) {
    let compH = (h + 180) % 360;
    return `hsl(${compH}, ${s}%, ${l}%)`;
}

function getRandomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = 100;
    const l = 50;
    return { h, s, l };
}

let discoActive = false;
let discoInterval = null;

const discoButton = document.getElementById('disco-btn');
const fontButton = document.getElementById('font-btn');
const body = document.body;
const notifyRegion = document.getElementById('notify-region');

// Übergang für Hintergrund und Textfarbe
body.style.transition = 'background-color 0.5s, color 0.5s';

function announce(message) {
    // Für Screenreader in aria-live Region
    notifyRegion.textContent = message;
}

function startDisco() {
    discoInterval = setInterval(() => {
        const { h, s, l } = getRandomHSL();
        const bgColor = `hsl(${h}, ${s}%, ${l}%)`;
        const fgColor = getComplementaryColor(h, s, l);
        body.style.backgroundColor = bgColor;
        body.style.color = fgColor;
    }, 500);

    discoActive = true;
    discoButton.textContent = 'End Disco Mode';
    discoButton.setAttribute('aria-pressed', 'true');
    announce('Disco Mode gestartet');
}

function stopDisco() {
    clearInterval(discoInterval);
    body.style.backgroundColor = '';
    body.style.color = '';
    discoActive = false;
    discoButton.textContent = 'Start Disco Mode';
    discoButton.setAttribute('aria-pressed', 'false');
    announce('Disco Mode beendet');
}

discoButton.addEventListener('click', () => {
    if (!discoActive) {
        startDisco();
    } else {
        stopDisco();
    }
});

// --- Zufällige Schriftart (Font Shuffler) ---
const fonts = [
    'Arial, sans-serif',
    '"Helvetica Neue", Helvetica, Arial, sans-serif',
    '"Courier New", Courier, monospace',
    '"Comic Sans MS", cursive, sans-serif',
    '"Lucida Console", Monaco, monospace',
    '"Times New Roman", Times, serif',
    'Georgia, serif',
    '"Trebuchet MS", sans-serif',
    '"Impact", sans-serif'
];

function getRandomFont() {
    const idx = Math.floor(Math.random() * fonts.length);
    return fonts[idx];
}

let currentFont = '';

function applyRandomFont() {
    const randomFont = getRandomFont();
    currentFont = randomFont;
    document.body.style.fontFamily = randomFont;
    fontButton.setAttribute('aria-pressed', 'true');
    announce(`Schriftart geändert zu ${randomFont}`);
}

fontButton.addEventListener('click', applyRandomFont);
