let audio = new Audio("Bell-dull-01.wav");
let reset = document.querySelector(".reset")

let gameOver = false;
let turn = "X";

//Funtion Turn Change
const changeTurn = () =>{
    return turn === "X"?"0" : "X";
}

//Funtion Check Win
const checkWin = () =>{
    let boxTexts = document.getElementsByClassName("boxText");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    win.forEach(e =>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText)
        &&(boxTexts[e[2]].innerText === boxTexts[e[1]].innerText)
        &&(boxTexts[e[0]].innerText !== "")){
            document.querySelector(".Info").innerText = boxTexts[e[0]].innerText + " Won"
            gameOver = true;
        }
    })
}


//Funtion Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxText")
    element.addEventListener("click", ()=>{
        if(boxText.innerText = " "){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn
            }
            
        }
    })
})


//Funtion reset button
reset.addEventListener("click", ()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element =>{
        element.innerText = ''
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn
})



