function evaluateInput() {
    let input = document.getElementById("input").value;
    let solution = 64 ** 6;

    if (input == solution) {
        alert("Success");
    }
    else {
        alert("Fail");
    }
}