var el = document.getElementById('navbar-close');

function openNav() {

}

function closeNav() {
    alert('Hello');
}

if(el){
    el.addEventListener('click', closeNav, false);
}


document.getElementById('navbar-open').addEventListener('click', function() {
    document.getElementByClass('navbar__menu').style({display: 'block'})
} ,false);