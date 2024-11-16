const menu = [
{
    id : 1,
    name : "caramelized plantains",
    catagory : "breakfast",
    price : "Rs.500",
    image: "image/breakfast/caramelized-plantains-with-beans-scallion.jpg",
    description:"Caramelized plantains are sweet, rich, with a buttery caramel flavor and a slightly crispy, soft texture.",

},
{
    id: 2,
    name : "cucumber avocado salad",
    catagory : "breakfast",
    price : "Rs.350",
    image: "image/breakfast/cucumber-avocado-salad.jpg",
    description:"Cucumber avocado salad is cool, refreshing, creamy, with a mild, crisp taste and a hint of tang.",
},
{
    id: 3,
    name : "green peach salad",
    catagory : "breakfast",
    price : "Rs.175",
    image: "image/breakfast/green-peach-salad.jpg",
    description:"Green peach salad is bright, tangy, slightly sweet, with crisp greens, juicy peaches, and a refreshing bite.",
},
{
    id: 4,
    name : "black forest sheet cake",
    catagory : "desert",
    price : "Rs.450",
    image: "image/desert/black-forest-sheet-cake.jpg",
    description:"Black Forest sheet cake is rich, chocolaty, with layers of tart cherries, fluffy whipped cream, and decadent sweetness.",
},
{
    id: 5,
    name : "Gulab Jamun",
    catagory : "desert",
    price : "Rs.250",
    image: "image/desert/Gulab-Jamun.jpg",
    description:"Gulab jamun is soft, spongy, soaked in fragrant sugar syrup, with a rich, sweet, and slightly floral taste.",
},
{
    id: 6,
    name : "lemon bars",
    catagory : "desert",
    price : "Rs.350",
    image: "image/desert/lemon-bars-pecan-crust.jpg",
    description:"Lemon bar with pecan crust is tangy, zesty, with a buttery citrus filling and a nutty, crunchy base.",
},
{
    id: 7,
    name : "Straberry pretzel bar",
    catagory : "desert",
    price : "Rs.325",
    image: "image/desert/Straberry-pretzel-bar.jpg",
    description:"Strawberry pretzel bar is a sweet and salty treat with tangy strawberry, creamy filling, and crunchy pretzel base.",
},
{
    id: 8,
    name : "thai tea leaches cake",
    catagory : "desert",
    price : "Rs.225",
    image: "image/desert/thai-tea-tres-leches-cake.jpg",
    description:"Thai tea tres leches cake is rich, creamy, with a unique spiced tea flavor and a moist, decadent texture.",
},
{
    id: 9,
    name : "Aloo gobi",
    catagory : "dinner",
    price : "Rs.355",
    image: "image/dinner/Aloo-gobi.jpg",
    description:"Aloo gobi is a flavorful dish with tender potatoes and cauliflower, seasoned with warm spices and earthy turmeric.",
},
{
    id: 10,
    name : "Fried rice",
    catagory : "dinner",
    price : "Rs.155",
    image: "image/dinner/bail-and-tomato-fried-rice.jpg",
    description:"Basil and tomato fried rice is savory, fragrant, with a balance of fresh herbs, sweet tomatoes, and savory umami.",
},
{
    id: 11,
    name : "baked tofu mafe",
    catagory : "dinner",
    price : "Rs.555",
    image: "image/dinner/baked-tofu-mafe.jpg",
    description:"Baked tofu mafé is a rich, savory stew with tender tofu, peanut sauce, and aromatic spices.",
},
{
    id: 12,
    name : "Chilled gochujang tofu",
    catagory : "lunch",
    price : "Rs.565",
    image: "image/lunch/Chilled-Gochujang-Tofu.jpg",
    description:"Chilled gochujang tofu is savory, slightly spicy, with a sweet umami flavor and a cool, firm texture.",
},
{
    id: 13,
    name : "Coconut caramel tofu",
    catagory : "lunch",
    price : "Rs.655",
    image: "image/lunch/coconut-caramel-braised-tofu.jpg",
    description:"Coconut caramel braised tofu is sweet, savory, with a rich, creamy coconut flavor and a subtle caramelized finish.",
},
{
    id: 14,
    name : "Tofu stew",
    catagory : "lunch",
    price : "Rs.355",
    image: "image/lunch/Sweet-potato-tofu-stew.jpg",
    description:"Sweet potato tofu stew is hearty, comforting, with creamy tofu, tender sweet potatoes, and savory broth flavors.",
},
{
    id: 15,
    name : "tomato curry",
    catagory : "lunch",
    price : "Rs.155",
    image: "image/lunch/tomato-curry.jpg",
    description:"Tomato curry is tangy, rich, with a mildly spicy kick, and a smooth, comforting, savory sauce.",
}
];

const menuList = document.querySelector('.menu-list');
const foodFilterBtn = document.querySelector('.food-filter-btn');


window.addEventListener("DOMContentLoaded", function(){
   displayMenuItem(menu);
    displayFilterBtn();
    const foodSelection = document.querySelectorAll('.food-selection');
    foodFilterSelection(foodSelection);


});

function foodFilterSelection(foodSelection){
    foodSelection.forEach( function(btn){
        btn.addEventListener("click", function(e){
            const selectedFoodCatagory = e.currentTarget.dataset.food;
            console.log(selectedFoodCatagory);
            const menuFoodCatagory = menu.filter(function(menuFoodItem){
                if( menuFoodItem.catagory === selectedFoodCatagory){
                    return menuFoodItem;
                }
            });
            if(selectedFoodCatagory === "allFood"){
                displayMenuItem(menu);
           }
           else{
               displayMenuItem(menuFoodCatagory);
              
           }
            
        });   
    });

}



function displayFilterBtn(){
     //reduce method consist 2 argumentts in which (accumulator = values, current item = item) 
    // and array=[] in which serves as the initial value of the accumulator  we can add ["all food"] to make all food initial value
    const filterBtn = menu.reduce(function(values, items){
        //check if the current item is in the values(accumulator) if yes then it ignore it and move to next if not then it store in it
        if(!values.includes(items.catagory)){
            values.push(items.catagory);
        }
        return values;
    },[]);
    // unshift will add the all food in filterBtn at first
    filterBtn.unshift('allFood');

    const displayBtn = filterBtn.map(function(btn){

        let displayCatagory = btn ==="allFood" ? "All food" : btn ; 
        return ` <button class="food-selection" data-food="${btn}">${displayCatagory}</button>`
    }).join("");
    
    foodFilterBtn.innerHTML = displayBtn;
    

}


function displayMenuItem(menuItem){
    const displayMenu = menuItem.map(function (item){

        
        return ` <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="food-image">
                    <div class="food-header">
                        <b class="food-name">${item.name}</b>
                        <strong class="food-price"> ${item.price}</strong>
                    </div>
                    <div class="about-food">
                        <p class="food-desc">${item.description}</p>
                    </div>
                </div>`;

    }).join("");
  menuList.innerHTML = displayMenu;

}