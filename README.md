# Express

    Features: 
        * Listen for requests
        * Parse
        * match responses with suitable routes
        * sending responses

    * Ports are the endpoints of the web server where the client and server communicates.

# Starting a server
    
    * express() => returns a object which has several functions

    * app.listen(port,callback) starts the server at the given port

# Nodemon

    It automatically restarts the server whenever we make changes to the code

# Receiving Requests

    app.use((req,res),callback) is used to receive any types of requests. req and res are the default object parameters for this

# Sending a Response

    HTTPS requests are initally in text-based format so that any language can easily handle requests.

    But express changes it into object.

    res.send(data we need to send) is used to send respones.

# Routing

    It is a process of selecting the path for traffic in a network or between different networks.

    app.get(path,callback)
    app.post(path,callback)

    Example:
    app.get("/home",(req,res)=>{
        console.log("home directory connected");
    });


# Path Parameters

    app.get("/:username",(req,res)=>{
        let {username}=req.params;
        console.log(req.params);
        res.send(username);
    });

    :username => treated as a variable
    req.params => returns a object containing parameters


# Query String

    req.query ==> returns all the queries attached to your request in a object/JSON format
