function validateForm() {
    let name = document.getElementById("username").value;

    if (name === "") {
        alert("Name cannot be empty!");
        return false; // stop form submission
    }

    alert("The Form Has been submitted successfully!");
    return true; // allow form submission
}
