
var F
var C
var convertF2C
var clear


document.getElementById("convertF2C").onclick = getTemp;
document.getElementById("clear").onclick = resetall;

function getTemp() {
	var getF = document.getElementById("getF").value;
	var getC = document.getElementById("getC").value;

	
	if (getF != "") {
        getC = (parseFloat(getF) - 32) / 1.8;
    } else {
        getF = (parseFloat(getC) * 1.8) + 32;
    }

	document.getElementById("getF").value = parseFloat(getF).toFixed(1);
    document.getElementById("getC").value = parseFloat(getC).toFixed(1);
}

function resetall() {
    document.getElementById("getF").value = "";
    document.getElementById("getC").value = "";
} 
