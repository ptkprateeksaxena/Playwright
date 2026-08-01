var a=10;
console.log(a);  //10

function printHello(){
    console.log("Hello this is prateek saxena");
    var a=20;
    console.log(a); //20
    if(true){
        var a=30;
        console.log(a); //30
    }
    console.log("F-> ", a); //30
}

console.log("G-> ", a); //10
printHello();
console.log("H-> ", a); //10
