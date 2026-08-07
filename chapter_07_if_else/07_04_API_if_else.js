let statusCode = 400;

if (statusCode === 200) {
    console.log("API is working fine.");
} else if (statusCode === 404) {
    console.log("API not found.");
} else if (statusCode === 500) {
    console.log("Internal server error.");
}else {
    console.log("Unknown status code.");
}