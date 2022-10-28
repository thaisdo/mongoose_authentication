const express = require("express");
const mongoose = require("mongoose");

const contatoRouter = require('./routes/contatoRouter');

const url = "mongodb+srv://thainaraiesb:4Opjww5EZq6XgDnB@cluster1.9ovrltd.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.use('/contatos', contatoRouter);

mongoose.connect(url)
    .then(app.listen(3000, () => {
        console.log("API is on door 3000!");
    }))
    .catch(error => console.log("API is of!", error));