/* Author: 

*/

var 
hamburger = document.querySelector('.hamburger'),
close = document.querySelector('nav ul li:last-child'),
nav = document.querySelector('nav ul');

hamburger.onclick = function() {
    nav.style.transform = 'translateX(0)';
}

close.onclick = function() {
    nav.style.transform = 'translateX(100%)';
}





















