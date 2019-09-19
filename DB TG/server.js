const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const cors = require('cors');
app.use(cors())


const db = require('./config/db');

db.connection.once("open" , ()=>{
    console.log("db connected")
}).on("error", error =>{
    console.log(error , "eeeeeeeeeeeeeeeee")
})

//listen request listing karti hai
app.listen(process.env.PORT || 3002,()=>{
    console.log("server lesting")
})

app.use('/',require('./routes/index'));

//https://www.youtube.com/watch?v=5yTazHkDR4o