//Step 1: importing server liubra like http 
const http1=require('http');//in built module

//Step 2: Creating a server
const webserver=http1.createServer((req,res)=>{
    res.end("Hello Chennai wel"); //response to the client 
});

//Step 3: assign the port number for the server
//Step 4: Listening the server
webserver.listen(3500,()=>{
    console.log("zzzzzzzzzzThe current server running in http://localhost:3500");
});