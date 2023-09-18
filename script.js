//your code here
let x = Math.floor((Math.random() * 10) + 1);
let min;
function submit(){
let n = document.getElementById("guess").value;
	if(n!==x){
		min = x-n;
		if(n < min){
		document.getElementById("respond").innerHTML = "Getting hotter and guess higher";
		}
		else if(n > min){
			document.getElementById("respond").innerHTML = "Getting hotter and guess lower";
		}
		else{
		document.getElementById("respond").innerHTML = "guess is right";
		}
	}
	else{
		document.getElementById("respond").innerHTML = "guess is right";
		}
	
	

}
