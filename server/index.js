// const express=require("express");
// const bodyParser=require("body-parser");
// const cors =require("cors");

// const db=require('./db');
// const app=express();
// const productRouter = require('./routes/productRouter');


// var corsOptions = {
//     origin: "http://localhost:3000"
// }

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to Food Ordering"});
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// app.use('/api/', productRouter);

// new 

// app.use('/api/', productRouter);const express=require("express");

require('dotenv').config();
const express=require('express');
const bodyParser=require("body-parser");
const cors =require("cors");

const db=require('./db');
const app=express();
//product router
const productRouter = require('./routes/productRouter');
//user router
const userRouter = require('./routes/userRouter');
//rider router
const riderRouter=require('./routes/riderRouter')

const { configure } = require('@testing-library/react');


var corsOptions = {
    origin: "http://localhost:3000"
}


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Food Ordering"});
});
app.use('/api',riderRouter)
app.use('/api/', productRouter);
app.use('/api/', userRouter);



// db connection and listen on port
db.on('open',()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Connected to Database and Server is running on port ${process.env.PORT}`);
    });
    
}).on('error',(error)=>{
    console.log('Failed to conncet :',error)
})
