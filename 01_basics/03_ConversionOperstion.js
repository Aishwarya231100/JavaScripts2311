let score = "33"

console.log(typeof score);
// or
console.log(typeof (score));

// Convert string to number
let ValueInNumber = Number (score)
console.log(typeof (ValueInNumber));

/* OUTPUT
NaN = 0
Undefined = Nan
True = 1
Falsew = 0 
"33" = 33
"33abc" = nan

*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
1 = true
0 = false
" " = false
"Aiswarya" = true
*/

let someNumber 
let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof stringNumber);

//*************************************************Operations************************************//
let value = 3
let negValue = -value
console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/

let str1 = "hello"
let str2 = " Aishwarya"
let str3 = str1+str2
console.log(str3);  //hello Aishwarya

console.log("1" + 2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32 -------------Add value then second value print as is is

console.log(3+4*5%3); // Write in this fromat console.log((3+4)*5%3);

console.log(+true); //op- 1
//console.log(true+); //op- error

console.log(+" "); //op = 0

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //op = 101

//or 

gameCounter++
console.log(gameCounter++); //op = 101









