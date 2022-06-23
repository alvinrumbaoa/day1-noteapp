const mongoose = require("mongoose");
const dbName = "noteDb";

mongoose.connect("mongodb://localhost/" + dbName, { 
        useNewUrlParser: true,
        useUnifiedTopology: true

})
        .then(() => console.log("Established connection with "+ dbName))
        .catch(err => console.log("Something wrong when connecting with " +dbName));