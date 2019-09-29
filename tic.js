var variable="X"
var p1points=0;
var p2points=0
var timer;
var player=1;
var rownum=1;
var t=5;
var gameover=false;

function clear(){
	clearInterval(timer);
		document.getElementById("par").textContent="";
		//reset table
		var table = document.getElementById("table1");
		var i;
		for(i=0;i<9;i++){
			document.getElementById(i.toString()).textContent="";
		}
		rownum++;
		variable="X";
		changeplayer();
		gameover=false;
}

function timefunc(){
	if(player==1) document.getElementById("par").textContent="Player 1 won! Starting a new game in "+t+" seconds...";
			else document.getElementById("par").textContent="Player 2 won! Starting a new game in "+t+" seconds...";
	t=t-1;
	if(t<0){
		clear();
	}
}

function tiefunc(){
	document.getElementById("par").textContent="Match tied! Starting a new game in "+t+" seconds...";
	t=t-1;
	if(t<0){
		clear();
	}
}

function change(){
	if(variable=="X") variable="O";
	else variable="X";
}

function changeplayer(){
	if(player==1) player=2;
	else player=1;
}

function showthis(id) {
	if(gameover){
		clear();
	}
	else{
	if(document.getElementById(id.toString()).textContent==""){
		document.getElementById(id.toString()).textContent = variable;
		if(rowcheck(id) || colcheck(id) || diagcheck(id)){ // someone won
			gameover=true;
			//document.getElementById(id.toString()).textContent = "jeet gaya bhai tu";
			var table = document.getElementById("table2");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = rownum;
			cell2.innerHTML = player;
			if(player==1){
				p1points+=4;
			}
			else{
				p2points+=4;
			} 
			cell3.innerHTML = p1points;
			cell4.innerHTML = p2points;
			t=5;
			timer=setInterval(timefunc, 1000);
		}

		else if(tie()){
			gameover=true;
			var table = document.getElementById("table2");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = rownum;
			cell2.innerHTML = "T";
			p1points+=1;
			p2points+=1; 
			cell3.innerHTML = p1points;
			cell4.innerHTML = p2points;
			t=5;
			timer=setInterval(tiefunc, 1000);
			
		}
		else{
			change();
			changeplayer();
		}		
	}
	}
}

function rowcheck(id){
	if(id==1 || id==2 || id==0){
		if(document.getElementById("0").textContent == 
			document.getElementById("1").textContent &&
			document.getElementById("1").textContent ==
			document.getElementById("2").textContent) return true;
		else return false;
	}
	else if(id==3 || id==4 || id==5){
		if(document.getElementById("3").textContent == 
			document.getElementById("4").textContent &&
			document.getElementById("3").textContent ==
			document.getElementById("5").textContent) return true;
		else return false;
	}
	else{
		if(document.getElementById("6").textContent == 
			document.getElementById("7").textContent &&
			document.getElementById("7").textContent ==
			document.getElementById("8").textContent) return true;
		else return false;
	}
}

function colcheck(id){
	if(id==3 || id==6 || id==0){
		if(document.getElementById("0").textContent == 
			document.getElementById("3").textContent &&
			document.getElementById("0").textContent ==
			document.getElementById("6").textContent) return true;
		else return false;
	}
	else if(id==1 || id==4 || id==7){
		if(document.getElementById("1").textContent == 
			document.getElementById("4").textContent &&
			document.getElementById("1").textContent ==
			document.getElementById("7").textContent) return true;
		else return false;
	}
	else{ // 2 or 5 or 8
		if(document.getElementById("2").textContent == 
			document.getElementById("5").textContent &&
			document.getElementById("2").textContent ==
			document.getElementById("8").textContent) return true;
		else return false;
	}
}

function diagcheck(id){
	if(id==0 || id==4 || id==8){
		if(document.getElementById("0").textContent == 
			document.getElementById("4").textContent &&
			document.getElementById("0").textContent ==
			document.getElementById("8").textContent) return true;
		else return false;
	}
	else if(id==2 || id==4 || id==6){
		if(document.getElementById("2").textContent == 
			document.getElementById("4").textContent &&
			document.getElementById("2").textContent ==
			document.getElementById("6").textContent) return true;
		else return false;
	}
	else{ 
		return false;
	}
}

function tie(){
	var table = document.getElementById("table1");
	var i;
	for(i=0;i<9;i++){
		if(document.getElementById(i.toString()).textContent=="") return false;
	}
	return true;
}
