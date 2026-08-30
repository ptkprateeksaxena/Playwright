// iterate -- go from one to another
let test = ["login,", "Logout,", "signin,", "checkout,"]

for(let i=0;i<test.length;  i++){
    console.log(test[i])
}

console.log("------------------")

for(abc of test){
    console.log(abc)
}