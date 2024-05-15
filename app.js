// JavaScript Dice Task

var image = document.getElementById("img")

function rollDice(){
var random = Math.round(Math.random()*5+1)
var num = document.getElementById("numbers").innerText = ": "+random

if(random == 1){
   img.src="diceimg/diceimg1.png"
}
else if(random == 2){
    img.src="diceimg/diceimg2.png"
}
else if(random == 3){
    img.src="diceimg/diceimg3.png"
}
else if(random == 4){
    img.src="diceimg/diceimg4.png"
}
else if(random == 5){
    img.src="diceimg/diceimg5.png"
}
else if(random == 6){
    img.src="diceimg/diceimg6.png"
}
}




