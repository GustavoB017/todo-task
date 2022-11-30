var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var query = "mongodb+srv://gus_parquesoft:1234@cluster0.vroxppg.mongodb.net/taskBD?retryWrites=true&w=majority"

const db = (query);

mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    } else {
        console.log("Se ha conectado con la base de datos exitosamente");
    }
});

module.exports = router;