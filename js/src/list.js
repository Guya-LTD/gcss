window.toggleCollapseListItems = function toggleCollapseListItems(clist) {
    /** disable child click */
    //.stopPropagation();
    

    var submenu = clist.nextElementSibling;
    var faciliter  = clist.parentNode.getElementsByClassName('list__collapse__faciliter')[0];
    var submenuOpen = faciliter.parentNode.getElementsByClassName('list__collapse__faciliter__icon--open')[0];
    var submenuClose = faciliter.parentNode.getElementsByClassName('list__collapse__faciliter__icon--close')[0];
    clist.classList.toggle("list__collapse--open");
    clist.classList.toggle("active");
    submenu.classList.toggle("list__collapse--open");
    submenu.classList.toggle("active");
    submenuOpen.classList.toggle("list__collapse--close");
    submenuClose.classList.toggle("list__collapse--open");
};