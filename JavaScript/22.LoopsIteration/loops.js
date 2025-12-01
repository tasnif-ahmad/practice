let fruits = ["Apple", "Mango", "Banana"];
let text = "";

for (let fruit of fruits) {
    text += fruit + "<br>";   // each fruit = 1 iteration
}

document.getElementById("result").innerHTML = text;
