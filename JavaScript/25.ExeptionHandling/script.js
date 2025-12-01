function checkAge() {
    try {
        let age = prompt("Enter your age:");

        if (age === "") {
            throw "Age cannot be empty!";
        }
        if (isNaN(age)) {
            throw "Age must be a number!";
        }

        alert("Your age is " + age);
    }

    catch (error) {
        alert("Error: " + error);
    }

    finally {
        console.log("Age check completed.");
    }
}
