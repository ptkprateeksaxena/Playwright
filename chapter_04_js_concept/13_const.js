// const. is a block scoped variable. It cannot be updated or re-declared. It is hoisted to the top of the block scope. It cannot be accessed before declaration.

const baseUrl = "https://api.example.com";
baseUrl = "https://api.example.com/v2"; // TypeError: Assignment to constant variable.
