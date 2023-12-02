
const navbar = document.querySelector('.navbar');
const headerContectSpan = document.querySelector('.header .header-content span')
const loading = document.querySelector('.loading');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const aboutSection = document.querySelector('.about');
const navLinks = document.querySelectorAll('.nav-link');


    window.addEventListener('scroll',function() {
    if(window.scrollY > headerContectSpan.offsetTop) {
        navbar.style.cssText =`
        background-color: #fff;
    `;
    }
    else{
        navbar.style.cssText =`
        background-color: transparent;
    `;
    }
    if(window.scrollY > aboutSection.offsetTop){
        scrollToTopBtn.classList.remove('opacity-0','invisible');
    }
    else{
        scrollToTopBtn.classList.add('opacity-1','invisible');
    }
});

window.addEventListener('load',function() {
    setTimeout(function() {
        loading.classList.add('opacity-0','invisible');
        document.body.style.overflow = 'auto';
    },2000);
});

scrollToTopBtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:'smooth'
    }); 
});

for(let i  = 0; i < navLinks.length ; i++){
    navLinks[i].addEventListener('click',function(e){
        e.preventDefault();
        //document.querySelector('.nav-link.active').classList.remove('active');
        for(let j = 0; j < navLinks.length; j++){
            navLinks[j].classList.remove('active');
        }
        navLinks[i].classList.add('active');
        let currentId = this.getAttribute('href');
        let targetSection = document.querySelector(currentId);
        console.log(targetSection.offsetTop);
        window.scroll({
            top: targetSection.offsetTop,
            behavior:'smooth'
        });
    })
}