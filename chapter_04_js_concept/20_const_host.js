// let is blocl-scoped

const x=10;
if(true){
    console.log(x); //10
    
    
    
    
    const x="black";
    console.log(x); 
}
console.log(x);

//ReferenceError: Cannot access 'x' before initialization