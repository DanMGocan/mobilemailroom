const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();
const { employeesEmails } = require("./controllers/getNames.js");


/* Used to serve express static files */
app.use(express.static('public'));

/* Allowing cross origin */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept");
    next();
});

console.log(employeesEmails);

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server initiated on PORT ${PORT} and ${NODE_ENV} environment`);
})



