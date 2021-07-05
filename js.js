var btn_minsize = document.getElementById('btn_minsize');
var container = document.getElementById('container');
var ul_menubar = document.querySelector('.ul_menubar');
var menubar = document.getElementById('menubar');







btn_minsize.addEventListener('click', function() {

    container.classList.toggle('container_minisize');
    ul_menubar.classList.toggle('ul_menubar_minsize');
    menubar.classList.toggle('menubar_misiz');


})