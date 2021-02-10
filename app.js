const express = require("express");
const bodyParser = require("body-parser");
//const logger = require("morgan");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server initiated on PORT ${PORT} and ${NODE_ENV} environment`);
})

