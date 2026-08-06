let a=10;
console.log(a++ + a); //10 + 11 = 21
console.log(a); //11

let b=10;
console.log(b++ + ++b); //10 + 12 = 22
console.log(b); //12

let c=10;
console.log(++c + ++c); //11 + 12 = 23
console.log(c); //12

let d=10;
console.log(d++ + ++d - --d + d-- + ++d); // 10 + 12 - 11 + 11 + 11 = 33
console.log(d); //11