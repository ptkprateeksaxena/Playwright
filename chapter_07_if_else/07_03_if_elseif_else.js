let isloggedIn = false;
let userRole = "";
if (isloggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin!");
    }else if (userRole === "editor") {
        console.log("Welcome, Editor!");
    }else if (userRole === "subscriber") {
        console.log("Welcome, Subscriber!");
    }else {
        console.log("Welcome, User!");
    }   
} else {
    console.log("Please log in to continue.");
}