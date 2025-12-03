
const user = {
    name: "Tasnif",
    showName() {
        return "Hello, " + this.name;
    }
};


document.getElementById("output").innerHTML = user.showName();


// Event listener using 'this'
document.getElementById("btn").onclick = function () {
    this.innerHTML = "Clicked!";   // 'this' refers to the button
};
