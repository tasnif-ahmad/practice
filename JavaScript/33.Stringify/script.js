
const product = {
    name: "Laptop",
    price: 45000,
    inStock: true
};


const jsonData = JSON.stringify(product);


document.getElementById("output").innerHTML = jsonData;
