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
const url = require('url');

// Function to log requests
function logRequest(req) {
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error logging request:", err);
            // Consider using a more robust logging mechanism
        }
    });
} 

// Function to handle requests
function handleRequest(req, res) {
    logRequest(req);

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    switch (myUrl.pathname) {
        
        case '/':
            if (req.method === "GET") res.end("HomePage");   
            break;

        case '/about':
            res.end("About Page")
            break;

        case '/signup':
            if (req.method === "GET") res.end("This is a signup page");
            else if(req.method === "POST"){
                // DB Query
                res.end("Success")
            }
            break;

        case '/contacts':
            const qp = myUrl.query.mynumber;
            if (qp) {
                res.end(`Contact Us on : +91-${qp}`);
            } else {
                res.end("No contact number provided");
            }
            break;

        case '/search':
            const s = myUrl.query.search_query;
            if (s) {
                res.end(`Here are your results for ${s}`);
            } else {
                res.end("No search query provided");
            }
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


