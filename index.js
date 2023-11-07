// imports
import express from "express";

// creating server
const app = express();

//Request Handlers

// GET Requests

app.get('/',(req,res)=>{
    res.send('Welcome to Ecommerce API');
})






// specifying port number
const port = 3000;
app.listen(port,()=>{
    console.log('server is listing on port',port);
});
