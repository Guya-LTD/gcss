window.toggleNavItems = function toggleNavItems(nList) {
    var faciliter  = nList.parentNode.getElementsByClassName('nav__faciliter')[0];
    var submenuOpen = faciliter.parentNode.getElementsByClassName('nav__faciliter__icon--open')[0];
    var submenuClose = faciliter.parentNode.getElementsByClassName('nav__faciliter__icon--close')[0];
    nList.classList.toggle("nav__item--collapse--open");
    //submenuOpen.classList.toggle("list__collapse--close");
    //submenuClose.classList.toggle("list__collapse--open");
}
