const mongoose = require("mongoose");
const validator = require('validator');

const usersmessage = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10,   
    },
    message:{
        type: String,
        required: true,
        minlength: 4
    }
})
//creating a collection with mongoose model compiling
const Websteruser = mongoose.model("Websteruser", usersmessage);

module.exports = Websteruser;