const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 3,// it will not allow to create user with firstName less than 3 characters
        maxLength: 20 //it will not allow to create user with firstName more than 20 characters
    },
    lastName:{
        type:String
    },
    age:{
        type: Number,
        min: 14,
        max: 70,
        required: true,// it will not allow to create user without age
    },
    gender:{
        type: String,
        // enum: ["male","female","others"]
        validate(value){ // it will check the value of gender.
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
    },
    emailId:{
        type: String,
        required: true,// it will not allow to create user without emailId
        unique: true,// it will not allow to create duplicate emailId
        trim: true,// it will remove the extra space from the emailId
        lowercase:true,// it will convert the emailId to lowercase
        immutable: true,// it will not allow to change the emailId once it is created
    },
    password:{
        type: String
    },
    photo:{
        type: String,
        default: "This is the default photo" // by defailt photo ka url yaha pe dalna hai.
    }
}, { timestamps: true })// it will automatically create createdAt and updatedAt fields in the document in the database.Pichle 30 dino me kitne active user he .


const User = mongoose.model("user",userSchema);

module.exports = User;