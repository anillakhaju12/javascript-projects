const questionSection = document.querySelectorAll('.question-section');

questionSection.forEach(function(section){
    const add = section.querySelector('.add');
    const minus = section.querySelector('.subtract');
    const answer = section.querySelector('.answer');


    add.addEventListener("click", () => {

        CloseOtherAnswer();
        answer.classList.add("show-answer");
        add.style.display = 'none';
        minus.style.display = "inline";
    });

    minus.addEventListener("click", () => {
        answer.classList.remove("show-answer");
        minus.style.display = 'none';
        add.style.display = "inline";
    });
});


function CloseOtherAnswer() {

    questionSection.forEach(function(section){
        const add = section.querySelector('.add');
        const minus = section.querySelector('.subtract');
        const answer = section.querySelector('.answer');

      
            answer.classList.remove("show-answer");
            minus.style.display='none';
            add.style.display='inline';
            
       


    });
}