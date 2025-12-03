
let jsonString = '{"name": "Tasnif", "age": 23, "city": "Nagpur"}';

let student = JSON.parse(jsonString);


document.getElementById("result").innerHTML =
    "Name: " + student.name + "<br>" +
    "Age: " + student.age + "<br>" +
    "City: " + student.city;
