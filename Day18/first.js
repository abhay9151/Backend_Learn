const bcrypt = require("bcrypt")
// we can use bcrypt to hash the password and store it in the database. When the user logs in, we can compare the hashed password with the password entered by the user. If they match, we can allow the user to log in.
// for that we have to install bcrypt package using npm install bcrypt.
const password = "Rohit@123";

async function Hashing(){
// hashcode + salt

// const salt = await bcrypt.genSalt(10);
const hashpass = await bcrypt.hash(password,10);// ye jo process he usme time lagta he execute karne me par java script kya dusre line ko to execute kar deta he, isliye humne async await ka use kiya he taki ye process complete hone ke baad hi dusre line ko execute karne lagega isliye hame await ka use karna padega.
// Aor await use karne ke liye function ko async banana padega. Aor ye jo 10 he ye salt ka length he, jitna bada hoga utna secure hoga par utna time bhi lagega.  


const ans = await bcrypt.compare("Rohit",hashpass);

console.log(ans);

// console.log(salt);
// console.log(hashpass);

// console.log(hashpass);
}

// $2b$10$N5ehmB3b5kW1D3Mdhpl5JO
// $2b$10$N5ehmB3b5kW1D3Mdhpl5JOr9WCkz9sqnsdjUtut8BgG5rFTzOyqcO

Hashing();

// Algorithm --> hashCode

// $2b$10$FGFrKRj/qnlZtzdbX8yiW.a1ss63.MbDLXk22ByuWfnrqEYwPimOG
// $2b$10$gj64VbN4D5qqqGwRzihk8Oa3g9wh0kBORHQi/69PBQHts53R.n5FO