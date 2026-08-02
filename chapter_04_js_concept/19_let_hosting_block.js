// let is blocl-scoped

let x=10;
if(true){
    console.log(x); //10
    
    
    
    
    let x="black";
    console.log(x); 
}
console.log(x);

//ReferenceError: Cannot access 'x' before initialization