const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/MongooseNodeJS', { useNewUrlParser: true, useUnifiedTopology: true });

const booksSchema = new mongoose.Schema({

    _id: Number,
    title: String,
    price: Number

});

const Book = mongoose.model("Book",booksSchema);

const Harry = new Book({
    _id: 1,
    title: "Harry Potter",
    price: 10.2
});
const Welcom = new Book({
    _id: 2,
    title: "Welcom Me",
    price: 16
});
const Us = new Book({
    _id: 3,
    title: "Us in Winter",
    price: 20
});
/*
Book.insertMany ([Harry, Welcom, Us], (error)=> {
    if(error){
        console.log(err);
    }else {
        console.log("Books successfully added to the MongooseNodeJS");
    }
});
*/
Book.updateOne({_id: 1}, {description: "Good Book"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});


Book.find(function(error, Books) {
    if(error){
        console.log(error);
    } else {
        //console.log(Books);
        Books.forEach(book => {
            console.log(book.title);
        });
    }
});
/*
Book.deleteOne({ _id: 2}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Item successfully deleted.");
    }
});
*/
Book.find(function(error, Books) {
    if(error){
        console.log(error);
    } else {
        //console.log(Books);
        Books.forEach(book => {
            console.log(book.title);
        });
    }
});







app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
})