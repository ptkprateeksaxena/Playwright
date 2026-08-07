// prinr a number is even or odd

x =8;
if(x%2==0){
    console.log("Its a even number")
}else{
    console.log("It is a odd number")
}

//studene grade calculator

let marks = 55;
if(marks >= 90){
    console.log("Grade A")
}else if(marks >= 80){
    console.log("Grade B")
}else if(marks >= 70){
    console.log("Grade C")
}else if(marks >= 60){
    console.log("Grade D")
}else if( marks <= 60){
    console.log("Fail")
}


//--------leap year program------

//Rule: 
// divisible by 4 AND Not divisible by 100 -> Leap year
// Or divisible by 400 -> Lear year
// Else -> Not a leap year

let year = 2028

if (year % 4 ==0 && year % 100 !==0 || year%400 ===0){
    console.log("Its a leap year")
}else{
    console.log("Not a leap year")
}