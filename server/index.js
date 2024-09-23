// Import required modules
//const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express=require("express");

const app=express(); // this is a handler fucntion

app.get("/",(req,res)=>{
    return res.send('Hello from Homepage');
})

app.get("/about", (req,res)=>{
    // return res.send('Hello from About Page' + 'hey' + req.query.name +
    //     "you are" +
    //     req.query.age 
    // );
    return res.send(`Hello ${req.query.name}`)
})

app.listen(8000, ()=> console.log("Server started"));
// Create an HTTP server
//const myServer = http.createServer(app);

// Start the server
//myServer.listen(8000, () => console.log("Server is listening on port 8000"));


// Define a function to handle incoming requests
// function myHandler(req, res) {
//     // Ignore favicon requests
//     if (req.url === "/favicon.ico") return res.end();
  
//     // Log the request
//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Recieved\n`;
//     fs.appendFile('log.txt', log, (err, data) => {
//       if (err) {
//         // Handle logging error
//         console.error(err);
//         res.statusCode = 500;
//         res.end("Error logging request");
//       } else {
//         // Parse the URL
//         const myUrl = url.parse(req.url, true); // true to parse query string
  
//         // Handle different routes
//         switch (myUrl.pathname) {
//           case '/':
//             // Homepage
//             if (req.method === "GET") {
//               res.end("Homepage");
//             }
//             break;
//           case '/about':
//             // About page
//             const username = myUrl.query.myname;
//             res.end(`Hi, ${username}`);
//             break;
//           case '/search':
//             // Search page
//             const search = myUrl.query.search_query;
//             res.end(`Here are your results for ${search}`);
//             break;
//           case '/signup':
//             // Signup page
//             if (req.method === "GET") {
//               res.end('This is a signup form');
//             } else if (req.method === "POST") {
//               // DB query (TO DO: implement database query)
//               res.end('Signup Successful');
//             }
//             break;
//           default:
//             // 404 Page Not Found
//             res.end("404 Page Not Found");
//         }
//       }
//     });
//   }