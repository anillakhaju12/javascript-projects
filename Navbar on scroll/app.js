
//dynamic date in footer
let year = new Date().getFullYear();
document.getElementById('year').innerHTML= year;

// dynamic hight setup of nav-header
let icon = document.querySelector('.bars-icon');
let list = document.querySelector('.list');
let navHeader = document.querySelector('.nav-header');

icon.addEventListener("click",function(){

    //getBoundingClientRect() method returns a DOMRect object,providing information
    //about the size and position of an element relative to the viewport 
    //top, leftm right, bottom width, height 
    const navHeaderHeight=navHeader.getBoundingClientRect().height;
    const listHeight = list.getBoundingClientRect().height;
    if(navHeaderHeight === 0){
        navHeader.style.height= `${listHeight}px`;
    }
    else{
        navHeader.style.height= 0;
    }
});

// making dynamic navbar fixed in top ally and  home redirector
const navbarContainer = document.querySelector('.navbar-container');
const homeRedirector = document.querySelector('.home-redirector');

window.addEventListener('scroll', function(){
    // pageYOffset property return the pixel scrolled vertically
    let windowPixel = window.pageYOffset;
    // offsetHeight property return the height of the element in js
    const navbarContainerHeight = navbarContainer.offsetHeight;
    if(navbarContainerHeight > windowPixel ){
        navbarContainer.classList.remove("nav-container-fixed");
    }else{

        navbarContainer.classList.add("nav-container-fixed");
    }

    if(windowPixel > 400 ){
        homeRedirector.classList.remove("home-redirector-hide");
    }else{
        homeRedirector.classList.add("home-redirector-hide");
    }
    

});

//smooth scroll

const navHeaderName = document.querySelectorAll('.nav-header-name');

navHeaderName.forEach(function(Name){
    
    Name.addEventListener('click', function(e){
        // preventDefault method prevents the default action of an event from happening
        e.preventDefault();
        
        // The e.currentTarget property refers to the element on which the event listener is currently attached
        const hrefName = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(hrefName);
        const navbarContainerHeight = navbarContainer.getBoundingClientRect().height;
        const navHeaderHeight = navHeader.getBoundingClientRect().height;
        const fixedNavBar = navbarContainer.classList.contains("nav-container-fixed");
        //window.innerWidth property returns width of the window and same for innerHeight
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

   

        let position = element.offsetTop - navbarContainerHeight;

        if (screenWidth > 650) {
            if(!fixedNavBar){
                // position -= navbarContainerHeight; , when i use this it was sill less 64px show i direct sum up the height of nav container ie.28 and add remainning 64 and minus with position   
                position -= 92;    
            }
        } else {
            if(!fixedNavBar){
                position -= navbarContainerHeight;
            }
               // check if the nav-header is openned. here 50 is to check if nav-header is open, you can put any number but don't put too big digit or small .  
            if(navHeaderHeight > 50){
                position += navHeaderHeight;
            }
        }
        //window.scrollTo() method helps to scroll or redirect to the any position as per wishes
        window.scrollTo({
            left:0,
            top: position,
        });
        
        navHeader.style.height= 0;
    });
    
});