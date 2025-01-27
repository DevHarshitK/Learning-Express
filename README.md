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

# Receiving Requests

    app.use((req,res),callback) is used to receive any types of requests. req and res are the default object parameters for this