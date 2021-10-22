const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/404-notfound')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config();

const app = express();


//middleware
app.use(express.static('./public'));
app.use(express.json());


 
//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const PORT = 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, console.log(`server listening on ${PORT}`));
    } catch (err) {
        console.log(err)
    }
}

start();


