console.clear();
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const rnd = Math.random;

// ===== CANVAS SIZING ===== \\
function setCanvasSize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', setCanvasSize);
setCanvasSize();

// ===== SQUARES ===== \\
