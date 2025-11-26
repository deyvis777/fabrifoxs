// Elementos del reproductor de música
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const fileInput = document.getElementById('file-input');
const githubUrlInput = document.getElementById('github-url');
const loadGithubBtn = document.getElementById('load-github-btn');
const playlist = document.getElementById('playlist');
const currentTrack = document.getElementById('current-track');
const progressBar = document.querySelector('.progress');
const githubBtn = document.getElementById('github-btn');

let audio = new Audio();
let isPlaying = false;
let currentPlaylistItem = null;

// Función para actualizar la barra de progreso
function updateProgressBar() {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// Función para cargar y reproducir archivo de audio
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const objectURL = URL.createObjectURL(file);
        audio.src = objectURL;
        audio.load();
        currentTrack.textContent = `Reproduciendo: ${file.name}`;
        
        // Actualizar estado de los botones
        playBtn.disabled = false;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        
        // Reproducir automáticamente al cargar
        audio.play().then(() => {
            isPlaying = true;
            playBtn.textContent = "Reproduciendo...";
        }).catch(error => {
            console.log('Reproducción automática bloqueada:', error);
        });
        
        // Actualizar la barra de progreso
        audio.addEventListener('timeupdate', updateProgressBar);
    }
});

// Cargar desde GitHub
loadGithubBtn.addEventListener('click', function() {
    const url = githubUrlInput.value.trim();
    if (url) {
        cargarDesdeGitHub(url);
    } else {
        alert('Por favor, ingresa una URL válida de GitHub');
    }
});

// Alternar entre carga local y GitHub
githubBtn.addEventListener('click', function() {
    document.querySelector('.carga-github').style.display = 
        document.querySelector('.carga-github').style.display === 'none' ? 'block' : 'none';
});

// Función para cargar música desde GitHub
function cargarDesdeGitHub(url) {
    audio.src = url;
    audio.load();
    
    // Extraer nombre del archivo de la URL
    const fileName = url.split('/').pop();
    currentTrack.textContent = `Reproduciendo: ${fileName}`;
    
    // Actualizar estado de los botones
    playBtn.disabled = false;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
    
    audio.play().then(() => {
        isPlaying = true;
        playBtn.textContent = "Reproduciendo...";
    }).catch(error => {
        console.log('Error al reproducir:', error);
        alert('Error al cargar el archivo. Verifica que la URL sea correcta y el archivo sea de audio.');
    });
    
    // Actualizar la barra de progreso
    audio.addEventListener('timeupdate', updateProgressBar);
}

// Controles del reproductor
playBtn.addEventListener('click', function() {
    if (audio.src) {
        audio.play();
        isPlaying = true;
        playBtn.textContent = "Reproduciendo...";
    } else {
        alert('Primero carga un archivo de audio');
    }
});

pauseBtn.addEventListener('click', function() {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "Reproducir";
});

stopBtn.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playBtn.textContent = "Reproducir";
    progressBar.style.width = '0%';
});

// Playlist functionality
playlist.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const url = e.target.getAttribute('data-url');
        
        // Resaltar elemento actual
        if (currentPlaylistItem) {
            currentPlaylistItem.classList.remove('playing');
        }
        e.target.classList.add('playing');
        currentPlaylistItem = e.target;
        
        // Cargar y reproducir
        cargarDesdeGitHub(url);
    }
});

// Eventos del audio
audio.addEventListener('ended', function() {
    isPlaying = false;
    playBtn.textContent = "Reproducir";
    progressBar.style.width = '0%';
});

audio.addEventListener('loadedmetadata', function() {
    console.log('Duración del audio:', audio.duration, 'segundos');
});

// Smooth scroll para la navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Inicializar estado de botones
playBtn.disabled = true;
pauseBtn.disabled = true;
stopBtn.disabled = true;

// Efectos de hover en platos
document.querySelectorAll('.plato').forEach(plato => {
    plato.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    });
    
    plato.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Ejemplo de cómo cargar música desde GitHub automáticamente
// Descomenta la siguiente línea y reemplaza con tu URL real
// cargarDesdeGitHub('https://raw.githubusercontent.com/tuusuario/peru-music/main/musica1.mp3');
