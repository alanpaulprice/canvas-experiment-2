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

// ===== CREATE RECTANGLES ===== \\

const rectArray = [];

for (let i = 0; i < 100; i++){
  let rect = {};
  rect.width = rect.height = rnd() * 20;
  rect.x = rnd() * innerWidth - rect.width;
  rect.y = rnd() * innerHeight - rect.height;
  rect.dx = (rnd() - 0.5) * 5;
  rect.dy = (rnd() - 0.5) * 5;
  rectArray.push(rect);
}

function draw(){
  c.clearRect(0, 0, innerWidth, innerHeight);
  rectArray.forEach((r)=>{

    // ===== DRAW RECT ===== \\
    c.fillStyle = '#fff';
    c.fill();
    c.fillRect(r.x, r.y, r.width, r.height);

    // ===== COLLISION ===== \\
    if (r.x > innerWidth - r.width || r.x < 0){
      r.dx = -r.dx;
    }
    if (r.y > innerHeight - r.height || r.y < 0){
      r.dy = -r.dy;
    }

    // ===== VELOCITY ===== \\
    r.x += r.dx;
    r.y += r.dy;
  });
}

function animate(){
  draw();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
