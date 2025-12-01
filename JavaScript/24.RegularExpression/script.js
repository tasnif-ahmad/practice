let text = "Hello 123";
let pattern = /\d+/;   // matches digits

if (pattern.test(text)) {
    console.log("Number found");
} else {
    console.log("No number found");
}
