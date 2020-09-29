//style({display: 'block'})
window.openNavbar = function openNavbar(navBtn) {    
    /*var navbar = navBtn.parentElement
    navbar = navbar.parentElement
    var navbarBrand = navbar.parentNode.getElementsByClassName('navbar__brand')[0];
    console.log(navbarBrand)*/

    var navbar = document.getElementById('navbar')
    navbar.classList.add('navbar--show')
    //navbarBrand.classList.add('navbar__brand--remove')
    //navbarMenu.classList.add('navbar--show')

    /*navbarClose = document.getElementById('navbar-close')
    navCollapse = document.getElementById('navbar-collapse')
    navCollapse.classList.add('navbar--show')
    navbarClose.classList.add('navbar--show')*/
}


window.closeNavbar = function closeNavbar(navBtn) {    
    /*var navbar = navBtn.parentElement
    var navbarBrand = navbar.parentNode.getElementsByClassName('navbar__brand')[0];*/

    var navbar = document.getElementById('navbar')
    navbar.classList.remove('navbar--show')
    navbarBrand.classList.remove('navbar__brand--remove')

    /*navbarClose = document.getElementById('navbar-close')
    navCollapse = document.getElementById('navbar-collapse')
    navCollapse.classList.remove('navbar--show')
    navbarClose.classList.remove('navbar--show')*/
}
