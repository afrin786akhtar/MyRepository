const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : String ,
    authorName : String,
    category : {
        type :String ,
        enum :[  "horror", "fantasy", "graphic novel" ]
    } ,
    year : Number
} , {timestamps : true})

//created and updated time 

module.exports =mongoose.model('Bookone' , bookSchema)
  