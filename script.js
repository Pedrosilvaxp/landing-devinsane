// Controlando navbar ao scrollar
const header = document.querySelector('header');
let ultimoScr = 0;

window.addEventListener('scroll', function() {
    let scrollUser = document.documentElement.scrollTop;

    if (scrollUser > ultimoScr) {
        header.style.top = '-140px';
    } else {
        header.style.top = '0px';
    }

    ultimoScr = scrollUser <= 0 ? 0 : scrollUser;
})

// Scroll automático
const cursoArea = document.querySelector('.cursos');
const vagaArea = document.querySelector('.vagas');
const sobreArea = document.querySelector('.sobre');
const contatoArea = document.querySelector('.contato');

function autoScroll(chamada) {
    event.preventDefault();
    chamada.scrollIntoView({behavior:'smooth'});
}
function cursScroll() {
    autoScroll(cursoArea);
}
function vagaScroll() {
    autoScroll(vagaArea);
}
function sobreScroll() {
    autoScroll(sobreArea);
}
function contScroll() {
    autoScroll(contatoArea);
}

// Exibindo botão de voltar 
const backButton = document.querySelector('#back-btn');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 600 || document.body.scrollTop > 600) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
}
function voltarScroll() {
    event.preventDefault();
    scrollTo({top: 0, behavior:'smooth'});
}


// Menu mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
        this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    handleNavLinkClick() {
        this.navList.classList.remove(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavLinkClick);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        };
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    '.mobile-btn',
    '.container-mob',
    '.link-mob'
);
mobileNavbar.init();