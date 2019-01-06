var fs = require("fs");
var http = require("http");
var url = require("url");
var filename = "greetings.txt";

// read greetings
fs.readFile(filename, function(err, buffer) {
    if (err === null) {
        // no error
        var data = buffer.toString().split("\n");

        // create server listening on port 8080
        http.createServer(function(req, res) {
            res.writeHead(200, {"Content-Type": "text/plain"});

            // name value in query
            var name = url.parse(req.url, true).query.name

            // choose random greeting
            var random = Math.floor(Math.random() * (data.length - 1));

            if (name === undefined) {
                // if there is no name, print random greeting
                res.end(data[random]);
            } else {
                // if there is a name, print random greeting followed by name
                res.end(data[random] + ", " + name);
            }
        }).listen(8080);
    } else {
        // print the error to the terminal
        console.log(err);
    }
});
