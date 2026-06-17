// this is http module which is used to create server in node js.
const http = require('http');

// this is used to create a server in node js. it takes a callback function as an argument 
// which is called when a request is made to the server. the callback function takes two arguments, req and res. 
// req is the request object which contains information about the request made to the server and res is the response
// object which is used to send a response back to the client.
// const server = http.createServer((req,res)=>{
    
//     // res.end("Hello Coder Army");

//     if(req.url==="/"){
//         res.end("Hello Coder Army");
//     }
//     else if(req.url==="/contact"){
//         res.end("This is our Contact Page")
//     }
//     else if(req.url==="/about"){
//         res.end("This is our About Page")
//     }
//     else
//     {
//         res.end("Error: Page Not Found");
//     }
// });
const server=http.createServer((req,res)=>{
        if(req.url==="/"){
            res.end("Hello Abhay Kase ho App");
        }
        else if(req.url==="/contact"){
            res.end("This is the contact App")
        }
        else{
            res.end("Error.")
        }
});

// thi s is used to listen the server at port number 4000.
server.listen(8000, ()=>{
    console.log("I am Listening at port number 8000");
})