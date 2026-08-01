// let - block scope variable
// let is a block scoped variable. It can be updated but not re-declared. It is hoisted to the top of the block scope. It cannot be accessed before declaration.

let retryCount = 5;
retryCount +=5;
console.log("New retry count: " + retryCount);

let retryCount = 10; // SyntaxError: Identifier 'retryCount' has already been declared
