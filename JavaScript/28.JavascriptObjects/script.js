// JavaScript Object
const student = {
    name: "Tasnif",
    age: 23,
    course: "JavaScript",
    info() {
        return `${ this.name }, Age ${ this.age }, studying ${ this.course }`;
    }
};

// Display object data on webpage
document.getElementById("display").innerHTML = student.info();
