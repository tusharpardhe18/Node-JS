// const http = require('http');
// const fs = require('fs');

// const myServer = http.createServer( (req, res) => {

//     // console.log(req);
    
//     const log = `${Date.now()}: ${req.url} New Req Received\n`;

//     fs.appendFile("log.txt", log, (err, data) => {

//         switch (req.url) {
//             case '/': res.end("HomePage");
//                 break;
//             case '/about': res.end("About Page");
//                 break;
//             case '/contacts': res.end("Contacts Page");
//                 break;
//             default: res.end("404 Not Found")
//                 break;
//         }
//     } )
// });

// myServer.listen(8000, () => console.log("Server Started"))


const http = require('http');
const fs = require('fs');

// Function to log requests
function logRequest(req) {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error logging request:", err);
        }
    });
}

// Function to handle requests
function handleRequest(req, res) {
    logRequest(req);

    switch (req.url) {
        case '/':
            res.end("HomePage");
            break;
        case '/about':
            res.end("About Page");
            break;
        case '/contacts':
            res.end("Contacts Page");
            break;
        default:
            res.writeHead(404);
            res.end("Page Not Found");
            break;
    }
}

// Create the server
const myServer = http.createServer(handleRequest);

// Start the server
myServer.listen(8000, () => console.log("Server Started"));


