const express = require("express");
const app = express();

//BOOK STORE PROJECT

const BookStore = [
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2, name:"Friends", author: "Vikas"},
    {id:3 , name:"Nexus", author:"Rohit"},
    {id:4 , name:"DSA", author:"Maharaj"},
    {id:5, name:"Prem Kahani", author:"Rohan"}
]

app.use(express.json());// this is used to convert the json data into js object so that we can use it in our program. It is a middleware function that parses incoming JSON requests and puts the parsed data in req.body.

// // localhost:3000/book/3

app.get("/book", (req,res)=>{

    res.send(BookStore);
})
// id as a parameter pass karna hai to uske liye :id use karte hai aor check karte hai ki id kya hai aor uske hisab se data bhejte hai
//  app.get("/book/:id",(req,res)=>{
//     console.log(req.params);
//     res.send("agya he");
//  })


app.get("/book/:id", (req,res)=>{

    const id = parseInt(req.params.id);
    // console.log(typeof req.params.id)// isme pahle wo string ke format me output araha tha.to use parseInt() function ka use karke number me convert kar diya.
    const Book =  BookStore.find(info=> info.id===id);
    res.send(Book); 
})

app.post("/book", (req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
})






app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})










// // app.use("/user", (req,res)=>{

// //     res.send({name:"Rohit"})
// // })


//NOTE -> // parsing karni hoti hai (IMP);
// jab bhi ab request maroge to server se apko kuch na kuh to response milega.

// app.use(express.json()); 
//  middleware: json format data=> JS Object me convert karta he
//JSON data bhejne ka format hai, JavaScript Object data ko program me use karne ka format hai.
//Postman JSON bhejta hai, express.json() us JSON ko JavaScript Object me convert karta hai

// app.get("/user", (req,res)=>{
//     console.log(req);

//     res.send({name:"Rohit"})
// })

// app.post("/user", (req,res)=>{

//     console.log("Data saved successfully");//print karega console me
//     console.log(req.body);

//     console.log(typeof req.body.age);//string

//     res.send("Data Saved Successfully");
// })



// get, post, patch, put , delete


// app.listen(4000, ()=>{
//     console.log("Listening at port 4000");
// })



// route match honge: app.use  app.get // ye exact match karata he 

// app.get app.post app.patch app.put app.delete // ye alag alag method ke liye use karte hai exact match hona chiye url.