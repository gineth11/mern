const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



//import routes

const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const db_url = 'mongodb+srv://gineth:govindani@cluster0.db10zjr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB is connected')

    })
    .catch((err) => console.log('DB connection error', err))

app.listen(port, () => {

    console.log(`App is running on ${port}`);
});