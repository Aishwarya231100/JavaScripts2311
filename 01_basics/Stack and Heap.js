/************************** Stack and Heap ************************/
// Stack  - Use Primitive data type

//let MyName = "ABC";
//let anotherName = MyName;

console.log(anotherName);  // OP = ABC 

let MyName = "ABC";
let anotherName = MyName;
anotherName = "XYZ"      //-----------------dose not change the value

console.log(anotherName);
console.log(MyName);


// Heap - Use non Primituve data type

let UserOne = {                             // You can change the origanal vaule 
    email: "abc@gmail.com",
    UPI: "User@ybl",
}

let UserTwo = UserOne;
UserTwo.email = "xyz@gmail.com";

console.log(UserOne);
console.log(UserTwo);    // OP = xyz@gmail.com


