var fs = require("fs");
var buffer = fs.readFileSync("greetings.txt"); // reads greetings
var data = buffer.toString().split("\n");

// create interface to handle user input and output
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// prompts user for their name, then prints a random greeting five times
// followed by the provided name.
rl.question("What is your name?> ", function(name){
    for (var i = 0; i < 5; i++) {
        var random = Math.floor(Math.random() * (data.length - 1));
        console.log(data[random] + ", " + name);
    }
    rl.close();
});
