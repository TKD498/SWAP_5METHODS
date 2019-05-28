var readlineSync = require('readline-sync');
var nu1 = readlineSync.question('Type a value for Num1 ');
var nu2 = readlineSync.question('Type a value for Num2 ');
var n1 = Number(nu1);
var n2 = Number(nu2);
function tempVarSwap(){
    let num1 = n1
    let num2 = n2 
    var temp = 0;
    temp = num1; // 0 = 6
    num1 = num2; // 6 = 4
    num2 = temp; // 4 = 6
    console.log("-----------------------" + "\nSwaped Num1 to equal: " + num1,  "\nSwaped Num2 to equal: " + num2 + "\n-----------------------");
}

function plusMinusSwap(){
    let num1 = n1
    let num2 = n2 
    num1 = num1 + num2; //6 + 4 = 10"num1"
    num2 = num1 - num2; //10 - 4 = 6"num2"
    num1 = num1 - num2; //10 - 6 = 4"num1"
    console.log("Swaped Num1 to equal: " + num1,  "\nSwaped Num2 to equal: " + num2 + "\n-----------------------");
}

function multiplyDivideSwap(){
    let num1 = n1
    let num2 = n2 
    num1 = num1 * num2; // 6 * 4 = 24
    num2 = num1 / num2; // 24 / 4 = 6
    num1 = num1 / num2; // 24 / 6 = 4
    console.log("Swaped Num1 to equal: " + num1,  "\nSwaped Num2 to equal: " + num2 + "\n-----------------------");
}

function xor(){
    let num1 = n1
    let num2 = n2 
    num1 = num1^num2; //
    num2 = num1^num2; //
    num1 = num1^num2; //
    console.log("Swaped Num1 to equal: " + num1,  "\nSwaped Num2 to equal: " + num2 + "\n-----------------------");
}
function xnor(){
    let num1 = n1
    let num2 = n2 
    num1 = ~(num1^num2); //
    num2 = ~(num1^num2); //
    num1 = ~(num1^num2); //
    console.log("Swaped Num1 to equal: " + num1,  "\nSwaped Num2 to equal: " + num2 + "\n-----------------------");
}


tempVarSwap()
plusMinusSwap()
multiplyDivideSwap()
xor()
xnor()