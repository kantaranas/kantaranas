var total = 0;


document.getElementById("a10").onclick = a10;
document.getElementById("a20").onclick = a20;
document.getElementById("a30").onclick = a30;
document.getElementById("n10").onclick = n10;
document.getElementById("n20").onclick = n20;
document.getElementById("n30").onclick = n30;
document.getElementById("red").onclick = red;
document.getElementById("blue").onclick = blue;

function a10() {
  total = total + 10;
  document.getElementById("out").innerHTML = total;
}

function a20() {
  total = total + 20;
  document.getElementById("out").innerHTML = total;
}

function a30() {
  total = total + 30;
  document.getElementById("out").innerHTML = total;
}

function n10() {
  total = total - 10;
  document.getElementById("out").innerHTML = total;
}

function n20() {
  total = total - 20;
  document.getElementById("out").innerHTML = total;
}

function n30() {
  total = total - 30;
  document.getElementById("out").innerHTML = total;
}


function red() {
  document.getElementById("out").style.backgroundColor = "red";
}

function blue() {
  document.getElementById("out").style.backgroundColor = "blue";
}

