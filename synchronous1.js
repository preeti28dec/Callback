function greeting(name) {
    console.log( 'Hello ' + name);
}
function takeUserInput(callback) {
    var readlineSync=require("readline-sync");
    var name=readlineSync.question("Enter the name ")
    callback(name);
}
takeUserInput(greeting);