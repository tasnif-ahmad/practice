let a = 10;
let b = 7;

let msg = "";
msg += "a > b : " + (a > b) + "<br>";
msg += "a == 10 : " + (a == 10) + "<br>";
msg += "a === '10' : " + (a === "10") + "<br>";

document.getElementById("output").innerHTML = msg;
