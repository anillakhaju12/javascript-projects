let count = 0;


function increase(){
 
    count++;
    document.getElementById('num').textContent  = count;

}

function decrease(){

    count--;
    document.getElementById('num').textContent  = count;
}

function reset(){
    count = 0;
    document.getElementById('num').textContent  = count;
}