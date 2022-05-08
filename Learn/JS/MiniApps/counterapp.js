let counter = 0;

document.getElementById("decreaseBtn").onclick = function() {
    counter -= 1;
    document.getElementById("counter-number").innerHTML = counter;
}

document.getElementById("increaseBtn").onclick = function() {
    counter += 1;
    document.getElementById("counter-number").innerHTML = counter;
}

document.getElementById("resetBtn").onclick = function() {
    counter = 0;
    document.getElementById("counter-number").innerHTML = counter;
}