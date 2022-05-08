// condition ? ifTrueExpretion : ifFalseExpretion

let adult = checkAge(18);

if (adult) {
    console.log("You are adult!");
} else {
    console.log("Teen");
}

function checkAge(age) {
    return age >= 18 ? true : false;
}