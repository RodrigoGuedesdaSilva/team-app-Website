const btnMobile = document.getElementById('btnmobile');
const nav = document.getElementById('menu');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    btnMobile.classList.toggle('active');
}

document.onclick = function(e) {
    if(e.target.id !== 'btnmobile' && e.target.id !== 'menu') {
        nav.classList.remove('active');
        btnMobile.classList.remove('active');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);