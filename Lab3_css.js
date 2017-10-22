// QUINTEN BATTERMAN
//EECS 488

function looksGood()
{
	let text = document.getElementById("garbage");
	let body = document.getElementById("body");
	let R1 = document.getElementById("backR").value;
	let B1 = document.getElementById("backB").value;
	let G1 = document.getElementById("backG").value;
	let R2 = document.getElementById("borderR").value;
	let B2 = document.getElementById("borderB").value;
	let G2 = document.getElementById("borderG").value;
	let width = document.getElementById("width").value;

	text.style.backgroundColor = "rgb("+R1+","+G1+","+B1+")";
	text.style.borderColor = "rgb("+R2+","+G2+","+B2+")";
	text.style.borderWidth = width;
}
