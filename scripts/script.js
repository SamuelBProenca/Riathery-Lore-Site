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


// const sobre = document.getElementById('sobre');

// function goAbout() {
//     sobre.addEventListener('click', () => {
//         window.location = './html/about.html';
//     });
// }

// goAbout();

// function showMore(){
//     document.getElementById("gg").style.backgroundColor = "red"
// }

// showMore();

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu); 
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animatedLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "") 
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`);
            
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();