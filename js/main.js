

const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active', 'nav') === -1) {
		menu.classList.add('active', 'nav');
  } else {
		menu.classList.remove('active', 'nav');
  }
})