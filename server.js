const express=require('express');
const app=express();
const mongoose = require('mongoose')
const routerurl=require('./Routes/routes')
const cors=require('cors');

app.use(express.json());
app.use(cors())

app.use("/app",routerurl)

if(mongoose.connect('mongodb+srv://sivaranjanibalachithra:Shiva200121@cluster0.lqy5lcj.mongodb.net/final-db?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log("Database is connected");
    }

app.listen(4000,()=>{
    console.log('server is up and run')
})