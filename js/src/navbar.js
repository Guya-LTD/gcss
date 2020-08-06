//style({display: 'block'})
window.openNavbar = function openNavbar(navBtn) {    
    var navbar = navBtn.parentElement
    var navbarMenu = document.getElementById('navbar-menu')
    navbar.classList.add('navbar--show')
    //navbarMenu.classList.add('navbar--show')
}


window.closeNavbar = function closeNavbar(navBtn) {    
    var navbar = navBtn.parentElement
    var navbarMenu = document.getElementById('navbar-menu')
    navbar.classList.remove('navbar--show')
}
