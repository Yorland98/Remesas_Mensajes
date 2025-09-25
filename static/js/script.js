const navigateTo = url => {
    window.location.hash = url.startsWith('#') ? url : '#' + url;
};
const initializeAccordion = () => {
    const acordeones = document.querySelectorAll('.acordeon');
    const tituloCajas = document.querySelectorAll('.titulo-caja');

    if (acordeones.length === 0) return;

    tituloCajas.forEach((titulo) => {
        titulo.addEventListener('click', () => {
            const acordeonCaja = titulo.parentElement;
            acordeonCaja.classList.toggle('active');
        });
    });
    acordeones.forEach((section) => {
        const video = section.querySelector('.video-fondo');
        const acordeonCaja = section.querySelector('.acordeon-caja');
        if (video) {
            video.muted = true;
            video.loop = true;
            video.preload = 'auto';
            section.addEventListener('mouseenter', function() {
                section.style.flex = '3';
                video.play().catch(error => {
                    console.error('Error al intentar reproducir el video:', error);
                });
                video.style.opacity = '1';
            });
            section.addEventListener('mouseleave', function() {
                section.style.flex = '1';
                video.pause();
                video.currentTime = 0;
                video.style.opacity = '1';
                if (acordeonCaja) acordeonCaja.classList.remove('active');
            });
        }
    });
};
let currentContactContent = null;
const renderContent = () => {
    const appDiv = document.getElementById('app');
    const path = window.location.hash.slice(1) || '/';
    const route = routes[path] || routes['/404'];
    const body = document.body;
    document.title = `Remesas y Mensajes LTDA | ${route.title}`;
    appDiv.innerHTML = route.content;
    body.style.backgroundImage = route.backgroundImage || 'none';
    const logoElement = document.querySelector('.logo');
    if (logoElement && route.logo) {
        logoElement.src = route.logo;
    }
    if (path === '/') initializeAccordion();
    else {
        const videos = document.querySelectorAll('.video-fondo');
        videos.forEach(video => {
            if (!video.paused) video.pause();
            video.currentTime = 0;
        });
    }
    if (path === '/Contactos') initializeContactos();
};
let currentContentButton = { 'g': null, 's': null, 'w': null };
let currentSubcontentButton = { 'g': null, 's': null };
function mostrarContenido(id, event, type) {
    event.stopPropagation();
    let selector = type === 'g' ? '.contenido-g' : type === 's' ? '.contenido-s' : '.contenido-w';
    let buttonClass = type === 'g' ? '.opcion-g' : type === 's' ? '.opcion-s' : '.opcion-w';
    const contenido = document.getElementById(id);
    const todos = document.querySelectorAll(selector);
    const botones = document.querySelectorAll(buttonClass);
    todos.forEach(el => { 
        if (el !== contenido) el.style.display = 'none'; 
    });
    botones.forEach(btn => btn.classList.remove('activo'));
    if (type === 'g' || type === 's') {
        const subSelector = type === 'g' ? '.subcontenido-g' : '.subcontenido-s';
        const subBotones = document.querySelectorAll(type === 'g' ? '.opcion-g' : '.opcion-s');
        document.querySelectorAll(subSelector).forEach(el => el.style.display = 'none');
        subBotones.forEach(btn => btn.classList.remove('activo-sub'));
        currentSubcontentButton[type] = null;
    }
    if (contenido) {
        contenido.style.display = 'block';
        if (event.target) {
            event.target.classList.add('activo');
            currentContentButton[type] = event.target;
        }
    }
}
function mostrarSubcontenido(id, event, type) {
    event.stopPropagation();
    let selector = type === 'g' ? '.subcontenido-g' : '.subcontenido-s';
    let buttonClass = type === 'g' ? '.opcion-g' : '.opcion-s';
    const subcontenido = document.getElementById(id);
    const todos = document.querySelectorAll(selector);
    const botones = document.querySelectorAll(buttonClass);
    todos.forEach(el => { 
        if (el !== subcontenido) el.style.display = 'none'; 
    });
    botones.forEach(btn => btn.classList.remove('activo-sub'));
    if (subcontenido) {
        subcontenido.style.display = 'block';
        if (event.target) {
            event.target.classList.add('activo-sub');
            currentSubcontentButton[type] = event.target;
        }
    }
}
function cerrarContenido(event, type) {
    const cajaSelector = type === 'g' ? '.caja-g' : type === 's' ? '.caja-s' : '.caja-w';
    const opcionesSelector = type === 'g' ? '.contenido-g' : type === 's' ? '.contenido-s' : '.contenido-w';
    const buttonClass = type === 'g' ? '.opcion-g' : type === 's' ? '.opcion-s' : '.opcion-w';
    const caja = document.querySelector(cajaSelector);
    if (caja && !caja.contains(event.target)) {
        document.querySelectorAll(opcionesSelector).forEach(opcion => opcion.style.display = 'none');
        document.querySelectorAll(buttonClass).forEach(btn => {
            btn.classList.remove('activo');
            btn.classList.remove('activo-sub');
        });
        if (type === 'g' || type === 's') {
            const subSelector = type === 'g' ? '.subcontenido-g' : '.subcontenido-s';
            document.querySelectorAll(subSelector).forEach(sub => sub.style.display = 'none');
        }
        currentContentButton[type] = null;
        if (currentSubcontentButton[type]) {
            currentSubcontentButton[type] = null;
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const targetHref = e.target.getAttribute('href');
            navigateTo(targetHref);
        }
    });
    window.addEventListener('hashchange', renderContent);
    renderContent();
    const mobileMenu = document.getElementById('mobile-menu');
    const allMenuLinks = document.querySelectorAll(".mobile-menu a");
    function toggleMenu() {
        if (mobileMenu) mobileMenu.classList.toggle('active');
    }
    function closeMenu() {
        if (mobileMenu) mobileMenu.classList.remove('active');
    }
    document.body.addEventListener('click', e => {
        const toggle = e.target.closest('.menu-toggle');
        if (toggle) {
            e.preventDefault();
            toggleMenu();
        }
    });
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (event) => {
            const rect = mobileMenu.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;
            const isCloseButtonArea = clickX > (rect.width - 60) && clickY < 60;
            if (isCloseButtonArea) {
                closeMenu();
                event.stopPropagation();
            }
        });
    }
const submenuItemsLinks = document.querySelectorAll(".mobile-menu .submenu-items a");
submenuItemsLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});
    document.addEventListener('click', event => {
        if (mobileMenu &&
            mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(event.target) &&
            !event.target.closest('.menu-toggle')) {
            closeMenu();
        }
    });
    function handleHoverFunctionality() {
        const submenuItems = document.querySelectorAll('.mobile-menu .submenu');
        let hoverTimeout;
        if (window.innerWidth > 620) {
            submenuItems.forEach(submenu => {
                submenu.addEventListener('mouseover', () => {
                    clearTimeout(hoverTimeout);
                    document.querySelectorAll('.mobile-menu .submenu-items.active').forEach(otherSubmenu => {
                        if (otherSubmenu.parentElement !== submenu) otherSubmenu.classList.remove('active');
                    });
                    const submenuList = submenu.querySelector('.submenu-items');
                    if (submenuList) submenuList.classList.add('active');
                });
                submenu.addEventListener('mouseleave', () => {
                    hoverTimeout = setTimeout(() => {
                        const submenuList = submenu.querySelector('.submenu-items');
                        if (submenuList) submenuList.classList.remove('active');
                    }, 3000);
                });
            });
            if (mobileMenu) {
                mobileMenu.addEventListener('mouseleave', () => {
                    hoverTimeout = setTimeout(() => {
                        submenuItems.forEach(submenu => {
                            const submenuList = submenu.querySelector('.submenu-items');
                            if (submenuList) submenuList.classList.remove('active');
                        });
                        closeMenu();
                    }, 3000);
                });
                mobileMenu.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
            }
        }
    }
    handleHoverFunctionality();
    window.addEventListener('resize', () => {
        if (window.innerWidth > 620) {
            closeMenu();
        }
        handleHoverFunctionality();
    });
});