document.querySelector('.background-video').playbackRate = 0.25;
const switchbtn = document.querySelector(".switch-btn");
const slider = document.querySelector(".switch");
const backgroundVideo = document.querySelector('.background-video');

switchbtn.addEventListener('click', function(){
    if(!slider.classList.contains("slide")){
          slider.classList.add('slide');
          backgroundVideo.pause();
    }else{
        slider.classList.remove('slide');
        backgroundVideo.play();
    }

});