/* prompt version
 let a, b, c;

 take sizes from user and convert it from String to Number
 a = window.prompt("Enter side A");
 a = Number(a);

 b = window.prompt("Enter side B");
 b = Number(b);

 c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

 console.log("Hypotenuse C is: ", c); */

// html
document.getElementById("submitButton").onclick = function() {
    let a, b, c;

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "The result is " + c;
}