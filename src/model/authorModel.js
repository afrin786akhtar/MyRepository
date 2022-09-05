const mongoose = require('mongoose')
const emailValidator = require('email-validator')

const authorSchema = new mongoose.Schema({
     fname:{
        type : String ,
        required : true
     },
      lname: {
        type : String ,
        required : true
      }, 
      title: {
        type : String ,
        required : true,
        enum : ["Mr", "Mrs", "Miss"]
      }, 
      email: {
        type : emailValidator.validate(),
        // required : true , 
        // unique : true
      }, 
        password: {
            type : String,
            required : true
        }

} , {timestamps: true} )

module.exports = mogoose.model('author' , authorSchema)





// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }