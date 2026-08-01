let a = 10;
console.log(a);  //10

function printHello(){
    console.log("Hello this is prateek saxena");
    let a=20;
    console.log("C-> ", a); //20
    if(true){
        let a=30;
        console.log("I-> ", a); //30
    }
    console.log("F-> ", a); //20
}

console.log("G-> ", a); //10
printHello();
