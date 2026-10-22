let url = "https://www.string.vwo.com/api/login?retry=true"

console.log(url.includes("www"));
console.log(url.includes("abc"));

console.log ( url.startsWith("https"));
console.log(url.endsWith("true"));


//index of

console.log(url.indexOf("a"))
console.log(url.lastIndexOf("b"))

//search

console.log(url.search(/vwo/)); //regex //