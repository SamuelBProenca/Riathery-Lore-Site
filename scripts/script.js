const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    section.addEventListener('click', () => {
        section.style.backgroundColor = 'rgba(34, 34, 34, 0.774)'
        section.style.fontWeight = '800'

    });
});

const logoHome = document.getElementById('logo');

function backHome() {
    logoHome.addEventListener('click', () => {
        window.location = '../index.html';
    });
}

backHome();


const sobre = document.getElementById('sobre');

function goAbout() {
    sobre.addEventListener('click', () => {
        window.location = './html/about.html';
    });
}

goAbout();