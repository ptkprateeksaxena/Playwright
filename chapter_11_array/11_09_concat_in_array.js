// combine a array

let a = [1,2]
let b = [3,4]
//let c = a+b; // wrong method

let c= a.concat(b)
console.log(c)

//spread concatenation :: modern way

let d = [...a, ...b] // in this method "," is used to add
console.log(d)

let s = ["pass", "fail", "skip", "stop"].join(" ")
console.log(s)