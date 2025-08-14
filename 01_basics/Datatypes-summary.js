//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100       //String
const scoreValue = 100.3 //number
const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined
const id = Symbol('123') //symbol  fined unique vale
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3456543576654356754n //bigInt 

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = { //Object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //Function
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
Type of value                                        Resulet
1) undefined                                         undefined
2) Null                                               Object
3) boolean                                            boolean
4) Number                                            Number
5) String                                            Number
6) Object(native and does not implement(call))       object
7) object(navtive or host and does implement(call))  function
8) object(host and does not implement(call))         "undefined" "object"
                                                     "boolean"  "number"
                                                     "string"
*/


