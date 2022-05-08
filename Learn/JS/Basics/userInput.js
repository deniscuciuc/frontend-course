// window prompt : 

// let userName = window.prompt("Whats your name?");
// console.log(userName);

// html textbox
let username;

document.getElementById("userNameButton").onclick = function() {
    username = document.getElementById("userName").value;
    console.log(username);
    document.getElementById("userNameLabel").innerHTML = "Hello " + username;
}