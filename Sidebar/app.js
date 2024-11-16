const iconBar =document.querySelector('.icon-bar');
const list = document.querySelector('.list');
const closeBar = document.querySelector('.close-bar');


iconBar.addEventListener("click",function(){
    list.classList.toggle('hideList');
});


closeBar.addEventListener("click",function(){
    list.classList.toggle('hideList');
});