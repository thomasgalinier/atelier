const navBar = document.querySelector ('.navbar');
const burger = document.querySelector('.burger');
burger.addEventListener ('click', function(){
    navBar.classList.toggle('show-nav')
});

//slider

const slider = document.querySelectorAll('.slider');
let etape = 0;
const nombreSlider = slider.length;

function enleverActiveSlide (){
    for(let i = 0; i < nombreSlider; i++){
        slider[i].classList.remove('active');
    }
}

const suivant =  document.querySelector('.suivant')
const precedent = document.querySelector('.precedent')

suivant.addEventListener('click', function(){
    etape++;
    if(etape >= nombreSlider){
        etape = 0
    }
    enleverActiveSlide();
    slider[etape].classList.add('active');
})

precedent.addEventListener('click', function(){
    etape--;
    if(etape < 0){
        etape = 2;
    }
    enleverActiveSlide()
    slider[etape].classList.add('active')
})