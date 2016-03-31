

function compare () {

var choice1 = prompt("Do you choose rock, paper or scissors?");
var choice2 = Math.random();
    
if (choice2 < 0.34) {
	choice2 = "rock";
} else if(choice2 <= 0.67) {
	choice2 = "paper";
} else {
	choice2 = "scissors";
} console.log("Computer: " + choice2);
    
    if (choice1 === choice2) {
        return compare();
}
    else if (choice1 === "rock") {
        if (choice2 === "scissors"){
            return "rock wins"}
        else {
            return "paper wins"}
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins"}
        else {
            return "scissors wins"}
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins"}
        else {
            return "scissors wins"}
    }
    else  { 
        return "wrong entry, try again."}
};

compare();
