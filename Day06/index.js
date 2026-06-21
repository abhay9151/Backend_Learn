const express = require("express");

// create a server using express
const app = express();

// "/detail"
// "/contact/person"
// "/detail/person"
// "/about"
// "/detail/home/10"

// ? char become Optional
// + char can be repeated multiple times
// * any number of character can arrive
//  rohit_negi9

// app.use is a method in Express.js 
// that is used to define middleware functions that will be executed for every incoming request to the server. 
// It allows you to specify a path and a callback function that will be executed when a request matches that path.
//  The callback function takes two parameters: req (the request object) and res (the response object).
//  You can use app.use to handle different routes and send responses back to the client based on the requested URL.


//we are using Route Parameters (:id and :user) to capture dynamic values from the URL.

app.use("/about/:id/:user", (req,res)=>{
        console.log(req.params);
        res.send({"name":"Rohit", "age":20, "money":70, "Mon":20});
})








// app.use("/about", (req,res)=>{
//     res.send({"name":"Rohit", "age":20, "money":70, "Mon":3000});
// })

// app.use("/contact", (req,res)=>{
//     res.send("I am your Contact Page");
// })

// app.use("/detail", (req,res)=>{
//     res.send("I am your Detail Page");
// })

// // In Express, route order matters. Specific routes should be defined before general routes like app.use("/") because Express processes routes from top to bottom.
// app.use("/", (req,res)=>{
//     res.send("I am Your Home Page");
// })



// yaha se ye listen karega ki server chal raha hai ya nahi.
app.listen(4000, ()=>{
    console.log("Listening at port 4000");
})