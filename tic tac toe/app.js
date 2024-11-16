let WinningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6]   
  ];
  let currentPlayer = 'x';
const cells = document.querySelectorAll('.cell');
let board = ["", "", "", "", "", "", "", "", ""];

cells.forEach(function(cell){
    cell.addEventListener("click", e => {
        let index = e.currentTarget.dataset.id;
        
        if(board[index] === ""){
            board[index] = currentPlayer;
            e.target.innerHTML= currentPlayer;
            if(checkWin()){
                alert(`${currentPlayer} wins`);
                restart();
            }
            else if (board.every(cell => cell !== '') ){
                alert(`Match is draw`);
                restart();
            }
            else{
                currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

            }
            
        }
        
    })
});

function checkWin() {
    return WinningCombo.some(combination => {
      const [a, b, c] = combination;
      return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
    });
  }

  function restart(){
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent ="");
    currentPlayer = 'x';
  }