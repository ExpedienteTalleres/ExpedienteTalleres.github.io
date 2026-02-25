
// ===== NAVBAR SCROLL =====
(function () {
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});
})();

// ===== FADE-UP INTERSECTION OBSERVER =====
(function () {
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('animate-in');
}
});
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(function (el) {
observer.observe(el);
});
})();

// ===== TIMELINE RENDERING =====
(function () {
var eventos = [
{ fecha: '11/10/1931', titulo: 'Primer partido', descripcion: 'Talleres 0 - 0 Rampla Juniors. Fue un amistoso.' },
{ fecha: '12/10/1931', titulo: 'Amistoso: La Liga Córdoba', descripcion: 'La Liga Cordoba (que jugo con los colores de Talleres) perdio 2 tantos contra 3 vs Ramplas Juniors.' },
{ fecha: '13/10/1931', titulo: 'Debut contra un club de la provincia', descripcion: 'Talleres 4 - 0 Sarmiento de Villa Maria.' },
{ fecha: '06/12/1931', titulo: 'Primer partido oficial', descripcion: 'Talleres 3 - 2 Instituto, por la primera fecha del Sidral.' },
{ fecha: '26/06/1932', titulo: 'Primera victoria en un clasico', descripcion: 'Talleres 2 - 0 Belgrano.' },
{ fecha: '13/11/1932', titulo: 'Primera vuelta olimpica', descripcion: 'Talleres 3 - 0 Huracan. Campeon del torneo Sidral.' },
{ fecha: '17/03/1946', titulo: 'Se inauguraron los codos Jese Lean Chercoles y las populares', descripcion: 'Fue en un partido contra River Plate.' },
{ fecha: '23/01/1961', titulo: 'Se inauguro el sistema luminico', descripcion: 'Talleres 0 - 5 Flamengo.' },
{ fecha: '08/03/1964', titulo: 'La primera visita de Pelé en Cordoba', descripcion: 'Talleres 1 - 2 Santos.' },
{ fecha: '13/04/1975', titulo: 'La Boutique', descripcion: 'Despues de casi dos años se hace la reapertura con un triunfo ante Belgrano. Alli nacio el apodo de La Boutique.' },
];

var container = document.getElementById('timeline-items');

eventos.forEach(function (evt, i) {
var item = document.createElement('div');
item.className = 'fade-up timeline-item';
item.style.transitionDelay = (i * 100) + 'ms';

var contentDiv = document.createElement('div');
contentDiv.className = 'timeline-content';

var card = document.createElement('div');
card.className = 'timeline-card';
card.innerHTML =
'<span class="timeline-date">' + evt.fecha + '</span>' +
'<h3 class="timeline-title">' + evt.titulo + '</h3>' +
'<p class="timeline-desc">' + evt.descripcion + '</p>';

contentDiv.appendChild(card);

var dot = document.createElement('div');
dot.className = 'timeline-dot';
dot.innerHTML = '<div class="timeline-dot-inner"></div>';

var spacer = document.createElement('div');
spacer.className = 'timeline-spacer';

if (i % 2 === 0) {
item.appendChild(contentDiv);
item.appendChild(dot);
item.appendChild(spacer);
} else {
item.appendChild(spacer);
item.appendChild(dot);
item.appendChild(contentDiv);
}

container.appendChild(item);
});

// Observe newly created timeline items
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('animate-in');
}
});
}, { threshold: 0.1 });

container.querySelectorAll('.fade-up').forEach(function (el) {
observer.observe(el);
});
})();

// ===== IMAGE REVEAL (CANVAS) =====
(function () {
var canvas = document.getElementById('reveal-canvas');
var wrapper = document.getElementById('canvas-wrapper');
var resetBtn = document.getElementById('reset-btn');

var maskCanvas = document.createElement('canvas');
var newImg = new Image();
var oldImg = new Image();
var isDrawing = false;
var imagesLoaded = 0;

newImg.crossOrigin = 'anonymous';
newImg.src = './nuevo.png';

oldImg.crossOrigin = 'anonymous';
oldImg.src = './antiguo.png';

function onImageLoad() {
imagesLoaded++;
if (imagesLoaded === 2) {
resizeCanvas();
}
}

newImg.onload = onImageLoad;
oldImg.onload = onImageLoad;

function resizeCanvas() {
var rect = wrapper.getBoundingClientRect();
var w = rect.width;
var aspectRatio = newImg.naturalHeight / newImg.naturalWidth;
var h = w * aspectRatio;

canvas.width = w;
canvas.height = h;
canvas.style.height = h + 'px';

maskCanvas.width = w;
maskCanvas.height = h;

var maskCtx = maskCanvas.getContext('2d');
if (maskCtx) maskCtx.clearRect(0, 0, w, h);

var ctx = canvas.getContext('2d');
if (ctx) ctx.drawImage(newImg, 0, 0, w, h);
}

function renderComposite(ctx, w, h) {
ctx.globalCompositeOperation = 'source-over';
ctx.drawImage(newImg, 0, 0, w, h);

var tempCanvas = document.createElement('canvas');
tempCanvas.width = w;
tempCanvas.height = h;
var tempCtx = tempCanvas.getContext('2d');
if (!tempCtx) return;

tempCtx.drawImage(oldImg, 0, 0, w, h);
tempCtx.globalCompositeOperation = 'destination-in';
tempCtx.drawImage(maskCanvas, 0, 0);

ctx.drawImage(tempCanvas, 0, 0);
}

function draw(x, y) {
var maskCtx = maskCanvas.getContext('2d');
var ctx = canvas.getContext('2d');
if (!maskCtx || !ctx) return;

var radius = 40;
var gradient = maskCtx.createRadialGradient(x, y, 0, x, y, radius);
gradient.addColorStop(0, 'rgba(255,255,255,1)');
gradient.addColorStop(0.7, 'rgba(255,255,255,0.6)');
gradient.addColorStop(1, 'rgba(255,255,255,0)');

maskCtx.fillStyle = gradient;
maskCtx.beginPath();
maskCtx.arc(x, y, radius, 0, Math.PI * 2);
maskCtx.fill();

renderComposite(ctx, canvas.width, canvas.height);
}

function getCanvasPos(e) {
var rect = canvas.getBoundingClientRect();
var clientX, clientY;
if (e.touches) {
clientX = e.touches[0].clientX;
clientY = e.touches[0].clientY;
} else {
clientX = e.clientX;
clientY = e.clientY;
}
return {
x: ((clientX - rect.left) / rect.width) * canvas.width,
y: ((clientY - rect.top) / rect.height) * canvas.height
};
}

canvas.addEventListener('mousedown', function (e) {
isDrawing = true;
var pos = getCanvasPos(e);
draw(pos.x, pos.y);
});

canvas.addEventListener('mousemove', function (e) {
if (!isDrawing) return;
var pos = getCanvasPos(e);
draw(pos.x, pos.y);
});

canvas.addEventListener('mouseup', function () { isDrawing = false; });
canvas.addEventListener('mouseleave', function () { isDrawing = false; });

canvas.addEventListener('touchstart', function (e) {
e.preventDefault();
isDrawing = true;
var pos = getCanvasPos(e);
draw(pos.x, pos.y);
}, { passive: false });

canvas.addEventListener('touchmove', function (e) {
e.preventDefault();
if (!isDrawing) return;
var pos = getCanvasPos(e);
draw(pos.x, pos.y);
}, { passive: false });

canvas.addEventListener('touchend', function () { isDrawing = false; });

window.addEventListener('resize', function () {
if (imagesLoaded === 2) resizeCanvas();
});

resetBtn.addEventListener('click', function () {
var maskCtx = maskCanvas.getContext('2d');
if (maskCtx) maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);

var ctx = canvas.getContext('2d');
if (ctx) ctx.drawImage(newImg, 0, 0, canvas.width, canvas.height);
});
})();
