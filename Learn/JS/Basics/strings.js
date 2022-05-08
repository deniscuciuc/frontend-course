let userName = "Dennis";

let length = userName.length;

console.log("The length of", userName, "is", length);
console.log(userName.charAt(0));
console.log(userName.indexOf("e"));
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.trim());

userName = userName.replaceAll("n", "A");

console.log(userName);