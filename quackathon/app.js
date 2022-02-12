const express = require("express")
const app  = express()
const bodyParser = require("body-parser")
const https = require("https")
const ejs  = require("ejs")

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// I commented




app.listen(3000, function(req, res){
    console.log("Your site is up and running")
})