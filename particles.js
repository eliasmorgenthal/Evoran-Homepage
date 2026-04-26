const c = document.getElementById('particles');
const ctx = c.getContext('2d');

function resize() {
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();
window.addEventListener('resize', resize);

let pts = Array.from({ length: 50 }, () => ({
  x: Math.random() * c.width,
  y: Math.random() * c.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.6,
  dy: (Math.random() - 0.5) * 0.6
}));

function animate() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "rgba(0,120,212,0.5)";

  pts.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > c.width) p.dx *= -1;
    if (p.y < 0 || p.y > c.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
