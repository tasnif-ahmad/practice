async function loadData() {
    document.getElementById("result").innerHTML = "Loading...";

    
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data Loaded Successfully!"), 2000);
    });

    let result = await promise; // waits here
    document.getElementById("result").innerHTML = result;
}
