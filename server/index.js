const express = require('express');    //import express 
const app = express();     //call function "app" intance of express 
const cors = require("cors"); //import CORS policy
const port = 8000;    //set PORT for localhost server
app.use(cors());    //app.use middleware function calls the CORS method
app.use(express.json()); //app.use middleware function calls express.json  = It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({extended: true})); //app.use calls express.urlencoded 
require("./config/mongoose.config"); // Import Connection from MongoDb DB 

require("./routers/note.routes")(app);


app.listen(port , () => console.log("Connected to  localhost " + port ));
//app.listen connect/test if port 8000 is connected


