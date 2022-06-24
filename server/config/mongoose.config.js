const mongoose = require("mongoose");
const dbName = "noteDb";

mongoose.connect("mongodb+srv://xenofy:Senpou_23@cluster0.ykyzw.mongodb.net/?retryWrites=true&w=majority", { 
        useNewUrlParser: true,
        useUnifiedTopology: true

})
        .then(() => console.log("Established connection with "+ dbName))
        .catch(err => console.log("Something wrong when connecting with " +dbName));