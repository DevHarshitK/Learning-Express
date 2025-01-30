const express = require("express");
const app = express();

let port=3000;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});

// app.use((req,res)=>{
//     console.log("Request is received");
//     res.send("<h1> Hello </h1>")
// })

app.get("/",(req,res)=>{
    res.send("<h1>I am gRoot</h1>");
    console.log("root directory connected");
});

// app.get("/home",(req,res)=>{
//     let code = "<ul><li>home directory</li></ul>"
//     res.send(code);
//     console.log("home directory connected");
// });

app.get("/:username/*",(req,res)=>{
    res.send("This path does not exist");
    console.log("Invalid path accessed");
});

// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     res.send(`I am ${username}`);
//     console.error("Request received");
// });

app.get("/search",(req,res)=>{
    let {q} = req.params;
    // res.send("You queried for <br>");
    console.log(q);
    res.send(req.query.name);
});