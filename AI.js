//variables
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('ul')
const reveals = document.querySelectorAll('.reveal')


//navigation bar
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

window.addEventListener('scroll', reveal)

function reveal(){
    for(var i = 0; i < reveals.length; i++){
       var windowHeight = window.innerHeight;
       var revealtop = reveals[i].getBoundingClientRect().top;
       var revealpoint = 150;
       
       if (revealtop < windowHeight - revealpoint) {
           reveals[i].classList.add('active');
       }
       else{
           reveals[i].classList.remove('active');
       }
    }
}

