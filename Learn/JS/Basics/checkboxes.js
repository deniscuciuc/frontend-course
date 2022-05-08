document.getElementById("testBtn").onclick = function() {
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const payPalBtn = document.getElementById("payPalBtn");
    if (document.getElementById("testCheckBox").checked) {
        console.log("You are subscribed!");
    } else {
        console.log("You are not subscribed yet!");
    }

    if (visaBtn.checked) {
        console.log("You selected VISA");
    } else if (masterCardBtn.checked) {
        console.log("You selected Master Card");
    } else if (payPalBtn.checked) {
        console.log("You selected Pay Pal");
    } else {
        console.log("You didn't selected card for paying...");
    }
}