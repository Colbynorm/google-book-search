const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooksearch"
);

const googleBook = [
    {
        title: "The Shining",
        author: "Stephen King",
        synopsis: "This Book was Scary!",
        date: new Date(Date.now())
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        synopsis: "This Book was Fun and Amazing!",
        date: new Date(Date.now())
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(googleBook))
    .then(data => {
        console.log(data.result.n + "books inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });