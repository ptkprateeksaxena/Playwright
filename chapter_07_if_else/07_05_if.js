if ("hello") console.log("String is true");
if (43) console.log("Number is true");
if ({}) console.log("Empty objext is true");
if ([]) console.log("Empty array is true");

//----------different if----------
//-----output will not print bcz value is false------

if("") console.log("won't print");
if(null) console.log("won't print");
if(NaN) console.log("won't print");
if(0) console.log("won't print");
if(undefined) console.log("won't print")