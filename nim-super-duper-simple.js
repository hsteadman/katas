var count=0; playerInput=0; cpuInput=0; var winner=null;
alert("Welcome to Nim! You go first.");
while(count<21){
	winner="CPU";
	count+=playerTurn();
	alert("Current count is "+count);
	if(count<21){
		winner="you";
		count+=cpuTurn();
		alert("Current count is "+count);
	}
}
alert(winner+" won!");

function playerTurn(){
	var turn=prompt("Count how many? 1-3");
	if(turn>0&&turn<4) return Number(turn);
	else alert("Invalid input. Try again.");
}

function cpuTurn(){
	var turn=Math.floor(Math.random()*3)+1;
	if(turn<21){
		alert("CPU counts "+turn+".");
		return turn;
	}
	else return winner="you";
}
