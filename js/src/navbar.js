//style({display: 'block'})
window.openNavbar = function openNavbar(navBtn) {    
    var navbar = navBtn.parentElement
    navbar = navbar.parentElement
    var navbarBrand = navbar.parentNode.getElementsByClassName('navbar__brand')[0];
    console.log(navbarBrand)
    navbar.classList.add('navbar--show')
    navbarBrand.classList.add('navbar__brand--remove')
    //navbarMenu.classList.add('navbar--show')
}


window.closeNavbar = function closeNavbar(navBtn) {    
    var navbar = navBtn.parentElement
    var navbarBrand = navbar.parentNode.getElementsByClassName('navbar__brand')[0];
    navbar.classList.remove('navbar--show')
    navbarBrand.classList.remove('navbar__brand--remove')
}
