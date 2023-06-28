// const http = require("http")
const mongoose = require('mongoose');
const express = require('express')
const ChannelModel = require("./channel");


const app = express();


// const server = http.createServer((req, res) =>{
//     res.write("this is the response from the server")
//     res.end();
// })



let URI = "mongodb+srv://gautamsingh893591:kVdbP2wSLKG3kgyD@cluster0.ir1q778.mongodb.net/nodejs?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(URI , connectionParams)
.then(()=>{
    console.info("connected DB");
})
.catch((e)=>{
    console.log("error", e);
})
app.listen((2001), ()=>{
    console.log("Node.js is currently active and listening on port: 2000");
})

app.get('',(req, res)=>{
    var channelModel = new ChannelModel()
    channelModel.name = "Gautam"
    channelModel.type = "TECH"

    channelModel.save((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send({"msg":"Inserted to Database"})
        }
    })
})