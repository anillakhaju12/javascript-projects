const icon = document.getElementById('icon');
const list = document.querySelector('.list');

icon.addEventListener("click", function(){

    // if(list.classList.contains('hideList')){
    //     list.classList.remove('hideList');
    // }
    // else{
    //     list.classList.add('hideList');
    // }

    list.classList.toggle("hideList");

});

