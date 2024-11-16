

const reviews = [
{
    id : 1,
    name :"Anil",
    image : "image/person1.jpg",
    opinion : "Wow, i just love it the way you represent the things in this lovely and work hard",
    profession : "Software Enginner",
},
{
    id : 2,
    name :"Akash",
    image : "image/person2.jpg",
    opinion : "The wonderful work of art where you present you view by creating somthing intresting and make them realize",
    profession : "Full stack Developer",
},
{
    id : 3,
    name : "Sweety",
    image : "image/person3.jpg",
    opinion :"Just looking like a wow ! so beautiful , so eligent, just looking like a wow!",
    profession : "Data Scientist",
},
{
    id : 4,
    name : "Rohan",
    image : "image/person4.jpg",
    opinion : "People are using their time in other things which are very useless and you are working for your self-improvement!",
    profession :"Backend Developer",
},
{
    id : 5,
    name :"Saral",
    image : "image/person5.jpg",
    opinion : "Managing the thing is preety hard in life . We should be careful while making somethings decision",
    profession :"Frontend Developer",
},
{
    id : 6,
    name :"Laxman",
    image : "image/person6.jpg",
    opinion : "I am wonder that how did you do that working hard and self improvement and just going crazy",
    profession : "WebDev"
},
];


const image = document.getElementById('image');
const names = document.getElementById('name');
const profession = document.getElementById('profession');
const opinion = document.getElementById('opinion');

// const randomReview = document.querySelector('.randomReview');

let reviewNum = 0;

// initial page 


window.addEventListener("DOMContentLoaded", function(){
  showPerson(reviewNum);

});


function showPerson(Num){
    let person = reviews[Num];
    image.src = person.image;
    names.textContent = person.name;
    profession.textContent = person.profession;
    opinion.textContent = person.opinion;
}



function leftSwip(){
    reviewNum--;
    if(reviewNum < 0){
        reviewNum = reviews.length - 1;

    }
    showPerson(reviewNum);
 

}

function rightSwip(){
    reviewNum++;
    if(reviewNum >= reviews.length){
        reviewNum =0;

    }
    showPerson(reviewNum);

}

// randomReview.addEventListener("Click", function(){
//     let randomNum = Math.floor(Math.random() * (reviews.length-1) );
//     console.log(randomNum);
// });


function randomReview(){
    let randomNum = Math.floor(Math.random() * reviews.length );
    showPerson(randomNum);
}



