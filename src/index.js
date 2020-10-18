import '../css/style.css';
import { nav } from './nav';
import { pageLoad } from './home.js';
import { menu } from './menu';
import { contact } from './contact';

nav();
let activeMenu = JSON.parse(localStorage.getItem('menu'))
if (!activeMenu){
    pageLoad();
}else if(activeMenu === 'Home'){
    pageLoad();
}else if(activeMenu === 'Menu'){
    menu();
}else{
    contact();
}
var id;
var homeMenu = document.getElementById('Home');
homeMenu.addEventListener('click', function() {
    id = this.getAttribute("id");
    localStorage.setItem('menu', JSON.stringify(id));
    window.location.reload();
});

homeMenu = document.getElementById('Menu');
homeMenu.addEventListener('click', function() {
    id = this.getAttribute("id");
    localStorage.setItem('menu', JSON.stringify(id));
    window.location.reload();
});

homeMenu = document.getElementById('Contact');
homeMenu.addEventListener('click', function() {
    id = this.getAttribute("id");
    localStorage.setItem('menu', JSON.stringify(id));
    window.location.reload();
});
