const http=require('http');
const {load}=require('./myserver.js');
const writer = require('./myserver.js')
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors({
    origin:"*",
}))
const port=5000;
app.listen(port,()=>console.log("server is running..."));
app.get('/user',(req,res)=>
{
    res.send(load())
});

writer.filewriter();

