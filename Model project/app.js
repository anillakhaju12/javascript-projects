


const clickBtn = document.querySelector('.click-btn');
const showContainer = document.querySelector('.show-container');
const closeIcon =  document.querySelector('.close-icon');

clickBtn.addEventListener("click", function(){
    showContainer.classList.toggle("hidden-container")
});

closeIcon.addEventListener("click", function(){
    showContainer.classList.toggle("hidden-container")
});