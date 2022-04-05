const addHeaderBackground = () => {
    const header = document.querySelector('.header');
    
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header-active')
        } else {
            header.classList.remove('header-active')
        }
    }
}

const addBurgerMenu = () => {
    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header-nav');
    const close = document.querySelector('.header-nav-close-btn');

    burger.addEventListener('click', () => {
        headerNav.classList.add('header-nav-active')
    });
    close.addEventListener('click', () => {
        headerNav.classList.remove('header-nav-active')
    });
}



addHeaderBackground()
addBurgerMenu()


