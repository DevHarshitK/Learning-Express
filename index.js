const express = require("express");
const app = express();

let port=100;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});

app.use((req,res)=>{
    console.log("Request is received");
    res.send("<h1> Hello </h1>")
})