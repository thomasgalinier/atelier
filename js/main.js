//toggleMenu 
const navBar = document.querySelector ('.navbar')
const burger = document.querySelector('.burger');
burger.addEventListener ('click', function(){
    navBar.classList.toggle('show-nav')
});

//