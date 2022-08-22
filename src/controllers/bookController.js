const BookController= require("../models/bookModel")

const createbook = async function (req, res) {
    let data= req.body
    let savedData= await BookController.create(data)
    res.send({msg: savedData})
}

const getBookData = async function (req , res){
    let allbooks = await BookController.find()
    res.send({msg : allbooks})
}

module.exports.createbook = createbook
module.exports.getBookData = getBookData