const button = document.querySelectorAll(".button");
const restart = document.getElementById("restartButton");
const gameDraw = document.getElementById("draw");
const gameWin = document.getElementById("win");
let player1Name;
let player2Name;
//player 'X' plays first
let turnX = true;
let count = 0;


//display X/O  //eventlistener example from wackamole. with if else for alternating X and O
button.forEach((element) =>{
    element.addEventListener("click", (clickEvent) => {  
        //disables button push until name is entered
        if(!player1Name || !player2Name){ 
            element.disabled()
        }
        //starts X and swaps with O w not double click
        if (turnX){  
            turnX = false;   
            if(!element.innerText){
                element.innerText = '❌'
                 count += 1
            }
            element.disabled = true;  
        } else{  
            turnX = true;
            if(!element.innerText){
                element.innerText = '🔵'
                count += 1
            }
            element.disabled = true;
        }
        //win condition check
        if(count == 9){
            draw() 
        }
        winCheck() 
    })
})

//winning array and win check
const winnings = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

const winCheck = () =>{
    //loop through winnings with a for loop/potential for of...
    for (let i of winnings){  //used for of because it is an array of objects, upon search it appeared to be the best approach
        console.log(i)
        let [button1, button2, button3] = [
        button[i[0]].innerText,   // looks through array of winnings everytime a button is pressed. runs values
        button[i[1]].innerText, /// then the next runs values of array at button
        button[i[2]].innerText,
        ]
        console.log(`button1 = ${button1}`)
        console.log(`button2 = ${button2}`)
        console.log(`button3 = ${button3}`)
        if (button1 != "" && (button2 !="") && (button3 != "")){ //reviwing ove buttons to see if  are void 
            if (button1 == button2 && button2 == button3){  //reviewing over buttons to see if annyone matches the other & declaring a win if so
                if(button1 == '❌'){
                    win(player1Name)
                } else{
                    win(player2Name)
                }
            }
        }
    }
}

//if game equals to all 9 boxes being filled
function draw(){
    console.log('its a draw')
    let playerDraw = document.getElementById("draw"); //pulling element in
    if(playerDraw.style.display = 'none'){ // letting syste know if they read none on css
        playerDraw.innerHTML = 'Its a Draw!'
        playerDraw.style.display ='block' //then push as dislay once this function is used.
    }else{
        playerDraw.style.display = 'none'; //otherwise dont display
    }
}

// if player x wins display X if player 0 wins display 0  //win will spit out in winCheck function, ths will be end return
function win (winner){
    console.log("its a win!")
    let playerWin = document.getElementById("win"); //pulling element in
    let playerDraw = document.getElementById("draw"); //pulling element in
    if(playerWin.style.display = 'none'){ // letting syste know if they read none on css
        playerWin.innerHTML = `${winner} Wins!!!`
        playerWin.style.display ='block' //then push as dislay once this function is used.
    }else{
        playerWin.style.display = 'none'; //otherwise dont display
    }
    if(playerDraw.style.display = 'block'){ // letting syste know if they read none on css
        playerDraw.style.display ='none'
    }
}


//clearing the board  
restart.addEventListener("click", (clickEvent) => {
    console.log("click")
    document.location.reload(true); //resets the entire page after button is pressed.
})

// input names
player1.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter' && player1.value.length > 0){
        player1Name = player1.value;
        player1.style.display = "none";
        divPlayer1.innerHTML ='Player ❌ : ' + player1.value
        divPlayer1.style.color = "white";
        divPlayer1.style.fontSize = "40px";
        divPlayer1.style.border = "5px solid white";
    }
})
player2.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter' && player2.value.length > 0){
        player2Name = player2.value;
        player2.style.display = "none";
        divPlayer2.innerHTML ='Player 🔵 : ' + player2.value
        divPlayer2.style.color = "white";
        divPlayer2.style.fontSize = "40px";
        divPlayer2.style.border = "5px solid white";
    }
})



//playing vs computer
// const playVSComp = document.getElementById = ("playVSComp")

// playVSComp.addEventListener("click", () => {
//     console.log("click")
//     let player2title = document.getElementById("player2")
//     if(player2title.style.display = 'block'){
//         player2title.style.visibility = 'hidden'
//     }
// })
