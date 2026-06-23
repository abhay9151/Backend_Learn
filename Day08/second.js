const express= require("express");
const app=express();//Yahan hum Express ko call kar rahe hain:

//Note-> Ham kabhi bhi do response ak sath nhi bhej sakte he.
// Nina mange server kuch nhi bhejega 

//Route Handler he ye.

app.get("/user1",(req,res,next)=>{
    // res.send("Hello ji");
    console.log("First Function");
    next();
}
,(req,res)=>{
    console.log("First");
    res.send("Hello I am Second");
    // console.log("First First");
    // res.send("HEllo");
})

app.listen(3000,()=>{
    console.log("Listenig at port 3000");
})