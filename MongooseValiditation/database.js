const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.4ugikcf.mongodb.net/Instagram");
  //database name is Instagram, if it is not present then it will create a new database with the name Instagram
  
}


module.exports = main;