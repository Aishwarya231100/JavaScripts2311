// console.log(2 > 1); = Greter than
// console.log(2 >= 1); = Greter than equal
// console.log(2 < 1); = less than
// console.log(2 == 1); = equal
// console.log(2 != 1); = not equal

/* Note
some data is not comparing
*/


// console.log("2" > 1); = op - true
// console.log("02" > 1); = op - true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true

/* Very IMP Notes
The reason is that an equality check == and comparisons > < >= work differently 
Comparisons canvert null to number treating it as 0
Thats why(3) null >=0 is true and (1) null>0 is false 
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //true

// === 

console.log("2" === 2);  // check data type first then it is same they convert the value