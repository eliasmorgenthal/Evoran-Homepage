const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('.nav-links button');

window.go = function(id) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  navBtns.forEach(b => b.classList.remove('active'));
  document.querySelector(`[onclick="go('${id}')"]`)?.classList.add('active');
}

window.toggleSettings = function() {
  document.getElementById('settings').classList.toggle('open');
}

window.toggleDark = function() {
  document.body.classList.toggle('dark');
  document.getElementById('darkSwitch').classList.toggle('active');

  // persist theme
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// load saved theme
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  document.getElementById('darkSwitch')?.classList.add('active');
}
