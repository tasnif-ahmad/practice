class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `Name: ${ this.name }, Age: ${ this.age }`;
    }
}

// Creating an object
const p1 = new Person("Tasnif", 23);

// Displaying result in HTML
document.getElementById("output").innerHTML = p1.getInfo();
