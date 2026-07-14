const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.4ugikcf.mongodb.net/Instagram");
  
}


module.exports = main;//exporting the function so that we can use it in other files.