// Base de datos completa de recetas peruanas
const recetas = {
    "ceviche": {
        nombre: "Ceviche Peruano",
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/38819/48000.jpg",
        region: "costa",
        tiempo: "30 min",
        dificultad: "Fácil",
        ingredientes: [
            "1 kg de filete de pescado blanco fresco (corvina, lenguado, etc.)",
            "2 cebollas rojas grandes",
            "1 ají limo fresco",
            "1 taza de jugo de limón verde recién exprimido",
            "Sal y pimienta al gusto",
            "1/2 taza de culantro picado finamente",
            "2 camotes medianos sancochados",
            "2 choclos sancochados",
            "Hojas de lechuga para decorar",
            "1 cucharadita de ají amarillo molido (opcional)",
            "Hielo para servir"
        ],
        preparacion: [
            "Cortar el pescado en cubos de 2-3 cm y colocar en un recipiente de vidrio o cerámica.",
            "Agregar sal, pimienta y el ají limo picado finamente (reservar un poco para decorar).",
            "Verter el jugo de limón sobre el pescado y mezclar suavemente con las manos limpias.",
            "Incorporar la cebolla cortada en juliana fina y la mayor parte del culantro picado.",
            "Dejar marinar por 10-15 minutos en refrigeración, revolviendo ocasionalmente.",
            "Mientras tanto, preparar los acompañamientos: cortar los camotes en rodajas y los choclos en trozos.",
            "Servir el ceviche en platos hondos, acompañado de camote, choclo y lechuga.",
            "Decorar con el culantro restante y unas gotas de ají amarillo si se desea más picante.",
            "Servir inmediatamente para disfrutar de su frescura."
        ]
    },
    "lomo-saltado": {
        nombre: "Lomo Saltado",
        imagen: "https://t1.uc.ltmcdn.com/es/posts/4/9/5/como_hacer_lomo_saltado_12594_600.jpg",
        region: "costa",
        tiempo: "40 min",
        dificultad: "Media",
        ingredientes: [
            "500 g de lomo de res cortado en tiras delgadas",
            "2 cebollas rojas grandes en gajos gruesos",
            "2 tomates maduros en gajos",
            "1 ají amarillo fresco en tiras (opcional)",
            "3 dientes de ajo picados finamente",
            "3 cucharadas de salsa de soja",
            "1 cucharada de vinagre tinto",
            "1 cucharada de aceite vegetal",
            "Perejil picado para decorar",
            "Papas fritas crujientes",
            "Arroz blanco cocido",
            "1 cucharadita de comino molido",
            "Sal y pimienta al gusto"
        ],
        preparacion: [
            "Sazonar la carne con sal, pimienta y comino. Reservar por 10 minutos.",
            "Calentar el aceite en un wok o sartén grande a fuego alto.",
            "Sellar la carne por tandas hasta que esté dorada por fuera pero jugosa por dentro.",
            "Agregar el ajo y saltear por 30 segundos hasta que libere su aroma.",
            "Incorporar la cebolla y cocinar por 2 minutos hasta que comience a ablandarse.",
            "Añadir el tomate y el ají amarillo, saltear por 1 minuto más.",
            "Verter la salsa de soja y el vinagre, mezclar bien todos los ingredientes.",
            "Cocinar por 3-4 minutos hasta que las verduras estén cocidas pero firmes.",
            "Rectificar la sazón si es necesario.",
            "Espolvorear con perejil picado y servir inmediatamente sobre arroz blanco con papas fritas."
        ]
    },
    "aji-gallina": {
        nombre: "Ají de Gallina",
        imagen: "https://www.eatperu.com/wp-content/uploads/2020/02/aji-de-gallina-peruvian-chicken-in-a-yellow-chili-sauce-1200-500x500.jpg",
        region: "costa",
        tiempo: "1 hora 30 min",
        dificultad: "Media",
        ingredientes: [
            "1 pechuga de gallina cocida y desmenuzada (aproximadamente 500g)",
            "4 panes de molleta remojados en 1 taza de leche evaporada",
            "1 cebolla grande picada finamente",
            "3 dientes de ajo picados",
            "4 cucharadas de ají amarillo molido",
            "1/2 taza de nueces molidas",
            "1/2 taza de queso parmesano rallado",
            "2 tazas de caldo de gallina",
            "3 cucharadas de aceite vegetal",
            "Arroz blanco cocido",
            "4 papas amarillas sancochadas",
            "4 huevos duros",
            "Aceitunas negras para decorar",
            "Sal, pimienta y nuez moscada al gusto"
        ],
        preparacion: [
            "En una olla grande, calentar el aceite y sofreír la cebolla y el ajo hasta que estén dorados.",
            "Agregar el ají amarillo molido y cocinar por 2 minutos revolviendo constantemente.",
            "Incorporar el pan remojado (exprimido previamente), las nueces molidas y el queso parmesano.",
            "Verter el caldo de gallina poco a poco, batiendo constantemente hasta obtener una crema espesa y homogénea.",
            "Sazonar con sal, pimienta y nuez moscada al gusto.",
            "Añadir la gallina desmenuzada y cocinar a fuego bajo por 10-15 minutos, revolviendo ocasionalmente.",
            "Si la crema está muy espesa, agregar más caldo o leche hasta obtener la consistencia deseada.",
            "Servir sobre papas sancochadas cortadas en rodajas, acompañado de arroz blanco.",
            "Decorar con huevo duro en rodajas y aceitunas negras."
        ]
    },
    "pachamanca": {
        nombre: "Pachamanca",
        imagen: "https://www.comedera.com/wp-content/uploads/2022/04/pachamanca-peruana.jpg",
        region: "sierra",
        tiempo: "4 horas",
        dificultad: "Difícil",
        ingredientes: [
            "1 kg de carne de cerdo en trozos",
            "1 kg de carne de cordero en trozos",
            "1 kg de pollo en presas",
            "2 kg de papas amarillas",
            "1 kg de camotes",
            "1 kg de habas frescas",
            "1 kg de choclos",
            "Hojas de plátano o bijao para cubrir",
            "Hierbas aromáticas: huacatay, chincho, culantro",
            "Ajíes mirasol y panca",
            "Comino, ajo molido, pimienta",
            "Sal marina al gusto",
            "Chicha de jora (opcional)"
        ],
        preparacion: [
            "Preparar un hoyo en la tierra de aproximadamente 1 metro de profundidad.",
            "Calentar piedras volcánicas en una fogata hasta que estén al rojo vivo (aproximadamente 2 horas).",
            "Sazonar todas las carnes con las hierbas, ajíes y especias. Dejar marinar por 1 hora.",
            "Colocar una base de piedras calientes en el fondo del hoyo.",
            "Cubrir las piedras con una capa de hierbas aromáticas frescas.",
            "Disponer las carnes sazonadas sobre las hierbas.",
            "Añadir las papas, camotes, habas y choclos alrededor de las carnes.",
            "Cubrir con más hierbas aromáticas y otra capa de piedras calientes.",
            "Tapar herméticamente con más hojas de plátano y luego con tierra.",
            "Cocinar por 2-3 horas, dependiendo del tamaño de las porciones.",
            "Destapar cuidadosamente, retirando la tierra y las hojas.",
            "Servir inmediatamente, tradicionalmente sobre las mismas hojas de plátano."
        ]
    },
    "cuy-chactado": {
        nombre: "Cuy Chactado",
        imagen: "https://www.cocina-abc.com/storage/2020/10/Shutterstock-338012929.jpg",
        region: "sierra",
        tiempo: "1 hora",
        dificultad: "Media",
        ingredientes: [
            "2 cuyes limpios y troceados (pueden ser mitades o cuartos)",
            "6 papas amarillas medianas",
            "1 lechuga fresca",
            "2 tomates maduros",
            "1 cebolla roja grande",
            "Aceite vegetal para freír",
            "Sal, pimienta y comino al gusto",
            "2 cucharadas de ají molido",
            "3 dientes de ajo machacados",
            "Ramitas de huacatay para decorar",
            "Maíz tostado (cancha serrana)"
        ],
        preparacion: [
            "Lavar y secar muy bien los cuyes. Sazonar con sal, pimienta, comino, ají molido y ajo machacado.",
            "Dejar marinar por al menos 30 minutos para que absorban los sabores.",
            "Mientras tanto, cocinar las papas en agua con sal hasta que estén tiernas.",
            "Pelar las papas y reservar calientes.",
            "Calentar abundante aceite en una sartén grande y pesada.",
            "Freír los cuyes a fuego medio-alto hasta que estén dorados y crujientes por ambos lados.",
            "Para el 'chactado', colocar una piedra limpia o un press sobre los cuyes mientras se fríen para aplanarlos.",
            "Escurrir sobre papel absorbente.",
            "Preparar la ensalada: cortar la lechuga, tomates en rodajas y cebolla en plumas.",
            "Servir los cuyes chactados con papas sancochadas, ensalada fresca y maíz tostado.",
            "Decorar con ramitas de huacatay."
        ]
    },
    "rocoto-relleno": {
        nombre: "Rocoto Relleno",
        imagen: "https://www.eatperu.com/wp-content/uploads/2020/03/stuffed-rocoto-peppers-rocoto-relleno-1200-500x500.jpg",
        region: "sierra",
        tiempo: "1 hora 15 min",
        dificultad: "Media",
        ingredientes: [
            "6 rocotos medianos (mientras más rojos, más picantes)",
            "500 g de carne molida de res",
            "1 cebolla grande picada finamente",
            "3 dientes de ajo picados",
            "1/2 taza de pasas rubias",
            "1/2 taza de aceitunas negras sin pepa",
            "2 huevos duros picados",
            "200 g de queso fresco desmenuzado",
            "1 taza de leche evaporada",
            "1/2 taza de pan molido",
            "2 cucharadas de aceite vegetal",
            "1 cucharadita de orégano seco",
            "Comino, sal y pimienta al gusto",
            "Mantequilla para engrasar"
        ],
        preparacion: [
            "Lavar los rocotos y hacer un corte en la parte superior para retirar las venas y semillas con cuidado.",
            "Hervir los rocotos en agua con sal por 10 minutos, cambiar el agua y repetir 2 veces más para reducir el picante.",
            "En un sartén, calentar el aceite y sofreír la cebolla y ajo hasta que estén transparentes.",
            "Agregar la carne molida y cocinar hasta que pierda el color rosado.",
            "Incorporar las pasas, aceitunas, orégano, comino, sal y pimienta. Cocinar por 5 minutos más.",
            "Retirar del fuego y mezclar con los huevos duros picados.",
            "Rellenar los rocotos con la mezcla de carne.",
            "Batir la leche con el queso fresco y verter sobre los rocotos rellenos.",
            "Espolvorear con pan molido y unos puntos de mantequilla.",
            "Hornear a 180°C por 20-25 minutos hasta que estén dorados y burbujeantes.",
            "Servir caliente con papas sancochadas."
        ]
    },
    "juane": {
        nombre: "Juane",
        imagen: "https://www.cocina-abc.com/storage/2020/10/Shutterstock-1725477936.jpg",
        region: "selva",
        tiempo: "2 horas",
        dificultad: "Media",
        ingredientes: [
            "2 tazas de arroz crudo",
            "500 g de gallina o pollo en trozos",
            "1 cebolla grande picada",
            "3 dientes de ajo picados",
            "Hojas de bijao (o en su defecto, hojas de plátano)",
            "2 cucharadas de achiote en pasta",
            "1 cucharadita de comino molido",
            "1/2 taza de aceitunas negras",
            "4 huevos duros",
            "Culantro picado",
            "Sal y pimienta al gusto",
            "Pabilo o hilo de cocina para amarrar"
        ],
        preparacion: [
            "Cocinar el arroz con el achiote hasta que esté medio cocido. Debe quedar con bastante humedad.",
            "En una sartén, sofreír la cebolla y ajo hasta que estén dorados.",
            "Agregar la gallina y dorar por todos lados.",
            "Sazonar con comino, sal, pimienta y culantro picado.",
            "Cocinar hasta que la gallina esté tierna, agregando un poco de agua si es necesario.",
            "Desmenuzar la gallina y mezclar con el arroz medio cocido y las aceitunas.",
            "Lavar las hojas de bijao y pasar por fuego para que sean flexibles.",
            "Colocar porciones generosas de la mezcla en cada hoja.",
            "Añadir un huevo duro en el centro de cada porción.",
            "Envolver formando una bola y amarrar firmemente con pabilo.",
            "Hervir en agua con sal por 45 minutos a 1 hora.",
            "Dejar reposar 10 minutos antes de servir.",
            "Se puede servir caliente o frío, tradicionalmente durante la Fiesta de San Juan."
        ]
    },
    "tacacho-cecina": {
        nombre: "Tacacho con Cecina",
        imagen: "https://www.eatperu.com/wp-content/uploads/2020/03/tacacho-con-cecina-fried-green-plantain-pork-1200-500x500.jpg",
        region: "selva",
        tiempo: "50 min",
        dificultad: "Fácil",
        ingredientes: [
            "6 plátanos verdes grandes",
            "200 g de manteca de cerdo (o aceite vegetal)",
            "300 g de cecina (carne de cerdo seca)",
            "200 g de chorizo fresco",
            "Aceite vegetal para freír",
            "Sal al gusto",
            "Salsa de ají charapita (opcional)"
        ],
        preparacion: [
            "Asar los plátanos verdes con cáscara en una parrilla o comal hasta que estén cocidos por dentro.",
            "Pelar los plátanos calientes y colocar en un mortero grande.",
            "Agregar la manteca de cerdo caliente y sal al gusto.",
            "Machacar hasta obtener una masa homogénea pero con algunos grumos.",
            "Formar bolitas con la masa de plátano (tacachos) del tamaño de una pelota de tenis.",
            "En un sartén aparte, freír la cecina y el chorizo en aceite caliente hasta que estén dorados.",
            "Escurrir el exceso de grasa en papel absorbente.",
            "Servir los tacachos acompañados de cecina y chorizo fritos.",
            "Acompañar con salsa de ají charapita para los que gustan del picante."
        ]
    },
    "inchicapi": {
        nombre: "Inchicapi",
        imagen: "https://img-global.cpcdn.com/recipes/6e1d3e8d8d0d3c6a/1200x630cq70/photo.jpg",
        region: "selva",
        tiempo: "1 hora 30 min",
        dificultad: "Media",
        ingredientes: [
            "1 gallina de corral cortada en presas",
            "2 tazas de maní tostado y molido",
            "2 yucas peladas y cortadas en trozos",
            "2 choclos cortados en rodajas",
            "1 cebolla grande picada",
            "3 dientes de ajo picados",
            "1/2 taza de culantro picado",
            "2 hojas de bijao",
            "1 cucharada de achiote en pasta",
            "Sal y pimienta al gusto",
            "Aceite vegetal",
            "8 tazas de agua aproximadamente"
        ],
        preparacion: [
            "En una olla grande, cocinar la gallina en agua con sal hasta que esté tierna (aproximadamente 45 minutos).",
            "Retirar la gallina y desmenuzar, reservar el caldo.",
            "En una olla aparte, calentar un poco de aceite y sofreír la cebolla y ajo hasta que estén dorados.",
            "Agregar el achiote y cocinar por 1 minuto.",
            "Incorporar el maní molido y cocinar revolviendo constantemente por 5 minutos.",
            "Verter el caldo de gallina poco a poco, batiendo para evitar grumos.",
            "Añadir la gallina desmenuzada, la yuca y el choclo.",
            "Incorporar las hojas de bijao.",
            "Cocinar a fuego medio por 20-25 minutos hasta que la yuca esté tierna y la sopa espese.",
            "Rectificar la sazón y agregar el culantro picado justo antes de servir.",
            "Servir caliente en platos hondos."
        ]
    }
};

// Clase para manejar el reproductor de música
class ReproductorMusica {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentPlaylistItem = null;
        this.volume = 0.7;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupPlaylist();
        this.audio.volume = this.volume;
    }

    setupEventListeners() {
        // Controles básicos
        document.getElementById('play-btn').addEventListener('click', () => this.play());
        document.getElementById('pause-btn').addEventListener('click', () => this.pause());
        document.getElementById('stop-btn').addEventListener('click', () => this.stop());
        
        // Carga de archivos
        document.getElementById('file-input').addEventListener('change', (e) => this.loadLocalFile(e));
        document.getElementById('load-github-btn').addEventListener('click', () => this.loadFromGitHub());
        document.getElementById('github-btn').addEventListener('click', () => this.toggleGitHubInput());
        
        // Eventos del audio
        this.audio.addEventListener('timeupdate', () => this.updateProgressBar());
        this.audio.addEventListener('ended', () => this.onAudioEnded());
        this.audio.addEventListener('loadedmetadata', () => this.onAudioLoaded());
        this.audio.addEventListener('error', (e) => this.onAudioError(e));
    }

    setupPlaylist() {
        const playlist = document.getElementById('playlist');
        playlist.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                this.playFromPlaylist(e.target);
            }
        });
    }

    play() {
        if (this.audio.src) {
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.updatePlayButton(true);
            }).catch(error => {
                console.error('Error al reproducir:', error);
                this.showMessage('Error al reproducir el audio. Verifica que el archivo sea válido.', 'error');
            });
        } else {
            this.showMessage('Primero carga un archivo de audio', 'warning');
        }
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayButton(false);
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.updatePlayButton(false);
        this.updateProgressBar();
    }

    loadLocalFile(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('audio/')) {
            const objectURL = URL.createObjectURL(file);
            this.loadAudio(objectURL, file.name);
        } else {
            this.showMessage('Por favor, selecciona un archivo de audio válido', 'error');
        }
    }

    loadFromGitHub() {
        const url = document.getElementById('github-url').value.trim();
        if (url) {
            if (this.isValidGitHubUrl(url)) {
                this.loadAudio(url, this.extractFileName(url));
            } else {
                this.showMessage('Por favor, ingresa una URL válida de GitHub Raw', 'error');
            }
        } else {
            this.showMessage('Por favor, ingresa una URL', 'warning');
        }
    }

    isValidGitHubUrl(url) {
        return url.startsWith('https://raw.githubusercontent.com/') && 
               (url.endsWith('.mp3') || url.endsWith('.wav') || url.endsWith('.ogg'));
    }

    extractFileName(url) {
        return url.split('/').pop() || 'Audio de GitHub';
    }

    loadAudio(src, trackName) {
        this.showLoadingState(true);
        
        this.audio.src = src;
        this.audio.load();
        
        this.audio.oncanplaythrough = () => {
            this.showLoadingState(false);
            document.getElementById('current-track').textContent = `Reproduciendo: ${trackName}`;
            this.enableControls(true);
            this.play();
        };

        this.audio.onerror = () => {
            this.showLoadingState(false);
            this.showMessage('Error al cargar el archivo de audio', 'error');
        };
    }

    playFromPlaylist(listItem) {
        if (this.currentPlaylistItem) {
            this.currentPlaylistItem.classList.remove('playing');
        }
        
        listItem.classList.add('playing');
        this.currentPlaylistItem = listItem;
        
        const url = listItem.getAttribute('data-url');
        const trackName = listItem.textContent;
        
        this.loadAudio(url, trackName);
    }

    updateProgressBar() {
        if (this.audio.duration) {
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            document.querySelector('.progress').style.width = `${progress}%`;
            
            // Actualizar tiempo transcurrido
            const currentTime = this.formatTime(this.audio.currentTime);
            const duration = this.formatTime(this.audio.duration);
            document.getElementById('current-track').textContent = 
                `Reproduciendo: ${this.getCurrentTrackName()} (${currentTime} / ${duration})`;
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    getCurrentTrackName() {
        const currentTrack = document.getElementById('current-track').textContent;
        return currentTrack.split(' (')[0].replace('Reproduciendo: ', '');
    }

    updatePlayButton(playing) {
        const playBtn = document.getElementById('play-btn');
        playBtn.textContent = playing ? "Reproduciendo..." : "Reproducir";
    }

    enableControls(enabled) {
        const controls = ['play-btn', 'pause-btn', 'stop-btn'];
        controls.forEach(controlId => {
            document.getElementById(controlId).disabled = !enabled;
        });
    }

    showLoadingState(show) {
        const reproductor = document.querySelector('.reproductor');
        if (show) {
            reproductor.classList.add('loading');
        } else {
            reproductor.classList.remove('loading');
        }
    }

    toggleGitHubInput() {
        const cargaGithub = document.querySelector('.carga-github');
        const isHidden = cargaGithub.style.display === 'none';
        cargaGithub.style.display = isHidden ? 'block' : 'none';
    }

    onAudioEnded() {
        this.isPlaying = false;
        this.updatePlayButton(false);
        document.querySelector('.progress').style.width = '0%';
        this.showMessage('Canción finalizada', 'info');
    }

    onAudioLoaded() {
        console.log('Duración del audio:', this.formatTime(this.audio.duration));
    }

    onAudioError(error) {
        console.error('Error de audio:', error);
        this.showMessage('Error en el archivo de audio. Verifica que sea compatible.', 'error');
    }

    showMessage(message, type) {
        // Crear elemento de mensaje temporal
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 3000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        // Colores según el tipo de mensaje
        const colors = {
            error: '#c8102e',
            warning: '#ffcd00',
            info: '#0033a0',
            success: '#28a745'
        };
        
        messageEl.style.background = colors[type] || colors.info;
        
        document.body.appendChild(messageEl);
        
        // Remover después de 4 segundos
        setTimeout(() => {
            messageEl.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 4000);
    }
}

// Clase para manejar el sistema de recetas
class SistemaRecetas {
    constructor() {
        this.recetas = recetas;
        this.init();
    }

    init() {
        this.setupSearch();
        this.setupRecipeButtons();
        this.setupModal();
        this.setupSmoothScroll();
        this.setupHoverEffects();
    }

    setupSearch() {
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        
        searchBtn.addEventListener('click', () => this.buscarReceta());
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.buscarReceta();
            }
        });
        
        // Búsqueda en tiempo real
        searchInput.addEventListener('input', () => {
            if (searchInput.value.length >= 2) {
                this.buscarReceta();
            } else {
                this.hideSearchResults();
            }
        });
    }

    setupRecipeButtons() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('receta-btn')) {
                const plato = e.target.closest('.plato');
                const recetaKey = plato.getAttribute('data-receta');
                this.mostrarReceta(recetaKey);
            }
        });
    }

    setupModal() {
        const modal = document.getElementById('receta-modal');
        const closeBtn = document.querySelector('.close-modal');
        
        closeBtn.addEventListener('click', () => this.cerrarModal());
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.cerrarModal();
            }
        });
        
        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.cerrarModal();
            }
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.plato').forEach(plato => {
            plato.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            plato.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    buscarReceta() {
        const query = document.getElementById('search-input').value.trim().toLowerCase();
        const resultadosBusqueda = document.getElementById('resultados-busqueda');
        
        resultadosBusqueda.innerHTML = '';
        
        if (query === '') {
            this.hideSearchResults();
            return;
        }
        
        const recetasEncontradas = Object.keys(this.recetas).filter(key => {
            const receta = this.recetas[key];
            return receta.nombre.toLowerCase().includes(query) ||
                   receta.ingredientes.some(ing => ing.toLowerCase().includes(query)) ||
                   receta.region.toLowerCase().includes(query);
        });
        
        if (recetasEncontradas.length === 0) {
            resultadosBusqueda.innerHTML = `
                <div class="receta-encontrada">
                    <h3>No se encontraron recetas</h3>
                    <p>Intenta con otro nombre o ingrediente.</p>
                </div>
            `;
            resultadosBusqueda.style.display = 'block';
            return;
        }
        
        recetasEncontradas.forEach(key => {
            const receta = this.recetas[key];
            const recetaElement = document.createElement('div');
            recetaElement.className = 'receta-encontrada';
            recetaElement.innerHTML = `
                <h3>${receta.nombre}</h3>
                <p><strong>Región:</strong> ${this.capitalizeFirstLetter(receta.region)}</p>
                <p><strong>Tiempo:</strong> ${receta.tiempo} | <strong>Dificultad:</strong> ${receta.dificultad}</p>
                <p>${receta.ingredientes.slice(0, 3).join(', ')}...</p>
                <button class="receta-btn" data-receta="${key}">Ver Receta Completa</button>
            `;
            resultadosBusqueda.appendChild(recetaElement);
        });
        
        resultadosBusqueda.style.display = 'block';
        
        // Agregar event listeners a los nuevos botones
        document.querySelectorAll('.receta-encontrada .receta-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const recetaKey = e.target.getAttribute('data-receta');
                this.mostrarReceta(recetaKey);
            });
        });
    }

    hideSearchResults() {
        document.getElementById('resultados-busqueda').style.display = 'none';
    }

    mostrarReceta(recetaKey) {
        const receta = this.recetas[recetaKey];
        const modal = document.getElementById('receta-modal');
        
        if (!receta) {
            console.error('Receta no encontrada:', recetaKey);
            return;
        }
        
        // Actualizar contenido del modal
        document.getElementById('modal-titulo').textContent = receta.nombre;
        document.getElementById('modal-imagen').src = receta.imagen;
        document.getElementById('modal-imagen').alt = receta.nombre;
        
        // Limpiar y cargar ingredientes
        const ingredientesList = document.getElementById('modal-ingredientes');
        ingredientesList.innerHTML = '';
        receta.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientesList.appendChild(li);
        });
        
        // Limpiar y cargar preparación
        const preparacionList = document.getElementById('modal-preparacion');
        preparacionList.innerHTML = '';
        receta.preparacion.forEach((paso, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>Paso ${index + 1}:</strong> ${paso}`;
            preparacionList.appendChild(li);
        });
        
        // Mostrar información adicional
        const modalHeader = document.querySelector('.modal-header');
        const existingInfo = modalHeader.querySelector('.receta-info');
        if (existingInfo) {
            existingInfo.remove();
        }
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'receta-info';
        infoDiv.innerHTML = `
            <p style="margin-top: 10px; color: #666;">
                <strong>Región:</strong> ${this.capitalizeFirstLetter(receta.region)} | 
                <strong>Tiempo:</strong> ${receta.tiempo} | 
                <strong>Dificultad:</strong> ${receta.dificultad}
            </p>
        `;
        modalHeader.appendChild(infoDiv);
        
        // Mostrar modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    cerrarModal() {
        const modal = document.getElementById('receta-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sistemas
    const sistemaRecetas = new SistemaRecetas();
    const reproductorMusica = new ReproductorMusica();
    
    // Efectos de animación adicionales
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    document.querySelectorAll('.region, .plato, .reproductor').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    console.log('🚀 Página de Gastronomía Peruana cargada correctamente');
    console.log('📚 Recetas disponibles:', Object.keys(recetas).length);
    console.log('🎵 Reproductor de música inicializado');
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        reproductorMusica.showMessage('¡Bienvenido a la Gastronomía Peruana! Explora nuestras deliciosas recetas.', 'success');
    }, 1000);
});

// Añadir estilos CSS para animaciones adicionales
const additionalStyles = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .receta-info {
        margin-top: 10px;
        padding: 10px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #ffcd00;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
