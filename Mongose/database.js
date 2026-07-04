const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("mongodb+srv://abhaypratap:11223344@codingadda.v5u1mck.mongodb.net/");

  // code likhna shuru kar do

  // const userSchema = new Schema({
  //   name:String,
  //   age: Number,
  //   city:String,
  //   gender: String
  // })

  // ok chaliye shuru karte he suru ok karte he 

  // Model ko create === Collection create karna(Table ko create karna)
  // Class create kari hai
  // const User = mongoose.model("user",userSchema);

   
  // Document ko create kiya hai or Object ko create kiya hai
  // const user1 = new User({name:"Rohit",age:20,city:"dwarka", gender:"Male"});
  // await user1.save();

  // await User.create({name:"Mohan", city:"pakistan", age:30});


  // await User.insertMany([{name:"Ipsita", age:18},{age:25, gender:"Male"}]);


  // const ans = await User.find({});
  // console.log(ans);

  // find document by particular field

  // const result = await User.find({name:"Rohit"});
  // console.log(result);

}


module.exports = main;