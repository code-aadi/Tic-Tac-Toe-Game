let boxes = document.querySelectorAll(".btn")
let reset = document.querySelector(".reset")
let p = document.querySelector("p")
let guide = document.querySelector(".guide")
let turn = "X"
guide.innerText = "X turn"
const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
]
function winnerCheck(){
    for(let pattern of winningPatterns){
        let [a,b,c] = pattern;
       if(boxes[a].innerText!=="" && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText){
            winner(boxes[a].innerText)
          line()
          boxes[a].style.background = "limegreen";
boxes[b].style.background = "limegreen";
boxes[c].style.background = "limegreen";
       
            return true;
        }
      }
     
       
   return false 
}




function winner(winner){
    for(let box of boxes){
       // box.disabled = true;
        gameOver = true;
       box.classList.add("locked")
       p.innerText = `🥳The WINNER is ${winner}`
        guide.innerText = ""
        winSound.currentTime = 0;
    winSound.play();
        
      
       
    }
}
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turn === "X"){
            box.innerText = "X"
            turn = "O"
            guide.innerText = "O turn"
            box.classList.add("locked")
            winnerCheck()
             clickSound.currentTime = 0; 
        clickSound.play();
          
            
          
        }
        else{
            box.innerText = "O"
            turn = "X"
            guide.innerText = "X turn"
            box.classList.add("locked")
            winnerCheck()
                clickSound.currentTime = 0; 
        clickSound.play();
          
         
        }
        if(!gameOver && isBoardFull()){
          guide.innerText = "Match Draw 🤝"
          drawSound.currentTime = 0;
   drawSound.play();
     gameOver = true;
        }
    })
   

});
reset.addEventListener("click",()=>{
    resetGame()
      resetSound.currentTime = 0;
    resetSound.play();
})
function resetGame(){
    for(let box of boxes){
        box.innerText = ""
        box.classList.remove("locked")
      //  box.disabled = false;
       gameOver = false;
     box.style.background = "";
        turn = "X"
        p.innerText = ""
        guide.innerText = "X turn"
        const line = document.querySelector(".row1, .row2, .row3, .col1, .col2, .col3, .digonal1, .digonal2");
  if (line) {
    line.className = "line"; 
  }

    }
}
const patternsForLine = [[boxes[0], boxes[1], boxes[2]],
  [boxes[3], boxes[4], boxes[5]],
  [boxes[6], boxes[7], boxes[8]],
  [boxes[0], boxes[3], boxes[6]],
  [boxes[1], boxes[4], boxes[7]],
  [boxes[2], boxes[5], boxes[8]],
  [boxes[0], boxes[4], boxes[8]],
  [boxes[2], boxes[4], boxes[6]]]

function line(){
if(patternsForLine[0][0].innerText !== "" && patternsForLine[0][0].innerText ===patternsForLine[0][1].innerText && patternsForLine[0][0].innerText === patternsForLine[0][2].innerText){
  row1 = document.querySelector(".line")
   row1.classList.remove("line")
   row1.classList.add("row1")
}
else if(patternsForLine[1][0].innerText !== "" && patternsForLine[1][0].innerText === patternsForLine[1][1].innerText && patternsForLine[1][0].innerText === patternsForLine[1][2].innerText){
row2 = document.querySelector(".line")
row2.classList.remove("line")
row2.classList.add("row2")
}
else if(patternsForLine[2][0].innerText !== "" && patternsForLine[2][0].innerText === patternsForLine[2][1].innerText && patternsForLine[2][0].innerText === patternsForLine[2][2].innerText){
row3 = document.querySelector(".line")
row3.classList.remove("line")
row3.classList.add("row3")
}
else if(patternsForLine[3][0].innerText !== "" && patternsForLine[3][0].innerText === patternsForLine[3][1].innerText && patternsForLine[3][0].innerText === patternsForLine[3][2].innerText){
col1 = document.querySelector(".line")
col1.classList.remove("line")
col1.classList.add("col1")
}
else if(patternsForLine[4][0].innerText !== "" && patternsForLine[4][0].innerText === patternsForLine[4][1].innerText && patternsForLine[4][0].innerText === patternsForLine[4][2].innerText){
col2 = document.querySelector(".line")
col2.classList.remove("line")
col2.classList.add("col2")
}
else if(patternsForLine[5][0].innerText !== "" && patternsForLine[5][0].innerText === patternsForLine[5][1].innerText && patternsForLine[5][0].innerText === patternsForLine[5][2].innerText){
col3 = document.querySelector(".line")
col3.classList.remove("line")
col3.classList.add("col3")
}
else if(patternsForLine[6][0].innerText !== "" && patternsForLine[6][0].innerText === patternsForLine[6][1].innerText && patternsForLine[6][0].innerText === patternsForLine[6][2].innerText){
digonal1 = document.querySelector(".line")
digonal1.classList.remove("line")
digonal1.classList.add("digonal1")
}
else if(patternsForLine[7][0].innerText !== "" && patternsForLine[7][0].innerText === patternsForLine[7][1].innerText && patternsForLine[7][0].innerText === patternsForLine[7][2].innerText){
digonal2 = document.querySelector(".line")
digonal2.classList.remove("line")
digonal2.classList.add("digonal2")
}
}

function isBoardFull() {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; 
        }
    }
    return true; 
}

let winSound = document.getElementById("win")
let clickSound = document.getElementById("click")
let resetSound = document.getElementById("reset")
let drawSound = document.getElementById("draw")