let x = 5;
let result = x++; // Post-increment: result is assigned the value of x (5), then x is incremented to 6
console.log("result: " + result);


let y = 5;
let result2 = ++y; // Pre-increment: y is incremented to 6, then result2 is assigned the value of y (6)
console.log("result2: " + result2);

let a = 5;
let result3 = a--; // Post-decrement: result3 is assigned the value of a (5), then a is decremented to 4
console.log("result3: " + result3);

let b = 5;
let result4 = --b; // Pre-decrement: b is decremented to 4, then result4 is assigned the value of b (4)
console.log("result4: " + result4);


let xyz = 6;
let result5 = ++xyz; // Post-increment: result5 is assigned the value of xyz (6) + 2, then xyz is incremented to 7
let result6 = xyz++; // Pre-increment: xyz is incremented to 8, then result6 is assigned the value of xyz (7)
let result7 = xyz--; // Post-decrement: result7 is assigned the value of xyz (8), then xyz is decremented to 7
let result8 = --xyz; // Pre-decrement: xyz is decremented to 6, then result8 is assigned the value of xyz (6)
console.log("result5: " + result5);
console.log("result6: " + result6);
console.log("result7: " + result7);
console.log("result8: " + result8);