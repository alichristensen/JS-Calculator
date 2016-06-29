var numBtns = [];
var opBtns = [];

var display = document.querySelector("#displayBox");

numBtns[0] = document.getElementById("btn1");
numBtns[1] = document.getElementById("btn2");
numBtns[2] = document.getElementById("btn3");
numBtns[3] = document.getElementById("btn4");
numBtns[4] = document.getElementById("btn5");
numBtns[5] = document.getElementById("btn6");
numBtns[6] = document.getElementById("btn7");
numBtns[7] = document.getElementById("btn8");
numBtns[8] = document.getElementById("btn9");
numBtns[9] = document.getElementById("btn0");

opBtns[0] = document.getElementById("add");
opBtns[1] = document.getElementById("sbtr");
opBtns[2] = document.getElementById("mult");
opBtns[3] = document.getElementById("divsn");
opBtns[4] = document.getElementById("equals");

var fin; 
var sin;


for (var a=0; a<numBtns.length; a++){
	numBtns[a].addEventListener("click", function(){
		var fin = a;
		display.textContent = fin;
	})
}


for (var b=0; b<opBtns.length; b++){
	opBtns[b].addEventListener("click", function(){
		console.log("op btn clicked");
	})
}

