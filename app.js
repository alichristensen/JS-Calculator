var inputDis = document.querySelector("input");
var val1; 
var val2;
var result;

var one = document.getElementById("btn1");
var two = document.getElementById("btn2");
var three = document.getElementById("btn3");
var four = document.getElementById("btn4");
var five = document.getElementById("btn5");
var six = document.getElementById("btn6");
var seven = document.getElementById("btn7");
var eight = document.getElementById("btn8");
var nine = document.getElementById("btn9");
var zero = document.getElementById("btn0");
var clear = document.getElementById("clear");

var plus = document.getElementById("add");
var minus = document.getElementById("sbtr");
var times = document.getElementById("mult");
var divsn = document.getElementById("divsn");
var equals = document.getElementById("equals");

//update display to show clicked buttons
var dis = ""; 

one.addEventListener("click", function(){
	dis = dis + "1";
	inputDis.value = dis;
});
two.addEventListener("click", function(){
	dis = dis + "2";
	inputDis.value = dis;
});
three.addEventListener("click", function(){
	dis = dis + "3";
	inputDis.value = dis;
});
four.addEventListener("click", function(){
	dis = dis + "4";
	inputDis.value = dis;
});
five.addEventListener("click", function(){
	dis = dis + "5";
	inputDis.value = dis;
});
six.addEventListener("click", function(){
	dis = dis + "6";
	inputDis.value = dis;
});
seven.addEventListener("click", function(){
	dis = dis + "7";
	inputDis.value = dis;
});
eight.addEventListener("click", function(){
	dis = dis + "8";
	inputDis.value = dis;
});
nine.addEventListener("click", function(){
	dis = dis + "9";
	inputDis.value = dis;
});
zero.addEventListener("click", function(){
	dis = dis + "0";
	inputDis.value = dis;
});
clear.addEventListener("click", function(){
	dis = "";
	val1 = 0;
	val2 = 0;
	result = 0;
	inputDis.value = dis;
})

plus.addEventListener("click", function(){
	val1 = parseInt(dis, 10);
	dis = "";
	inputDis.value = 0;

	equals.addEventListener("click", function(){
	val2 = parseInt(dis, 10);
	result = val1 + val2;
	inputDis.value = result;
	val1 = result;
	});
});

minus.addEventListener("click", function(){
	val1 = parseInt(dis, 10);
	dis = "";
	inputDis.value = 0;

	equals.addEventListener("click", function(){
	val2 = parseInt(dis, 10);
	result = val1 - val2;
	inputDis.value = result;
	val1 = result;
	});
});

times.addEventListener("click", function(){
	val1 = parseInt(dis, 10);
	dis = "";
	inputDis.value = 0;

	equals.addEventListener("click", function(){
	val2 = parseInt(dis, 10);
	result = val1 * val2;
	inputDis.value = result;
	val1 = result;
	});
});

divsn.addEventListener("click", function(){
	val1 = parseInt(dis, 10);
	dis = "";
	inputDis.value = 0;

	equals.addEventListener("click", function(){
	val2 = parseInt(dis, 10);
	result = val1/val2;
	inputDis.value = result;
	val1 = result;
	});
});
