const http = require('http');
const fs = require('fs')
const e = require('express');

const app = e();

app.get("/", (req,res) => {
    logRequest(req);
    return res.send("Hello from Home Page");
});

app.get("/about", (req,res) => {
    logRequest(req);
    return res.send("Hello from About Page."+" Hey "+ req.query.name + " and you are " + req.query.age + " years old.");
});

// Function to log requests
function logRequest(req) {
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    fs.appendFile("loge2.txt", log, (err) => {
        if (err) {
            console.error("Error logging request:", err);
            // Consider using a more robust logging mechanism
        }
    });
} 

app.listen(8001, () => console.log("Server Started!"))


// Create the server
// const myServer = http.createServer(app);

// Start the server
// myServer.listen(8001, () => console.log("Server Started"));


