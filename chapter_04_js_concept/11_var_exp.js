var a= 11; //global scope //var is a function scoped variable. It can be re-declared and updated. It is not block scoped. It is hoisted to the top of the function or global scope. It can be accessed before declaration but will return undefined.

console.log(a);

function printHello(){
    console.log("Hello this is prateek saxena");
    var a=20; //local scope //var is a function scoped variable.
    console.log(a);
}

printHello();

//var is flipper, not trust worthy, dual face.
