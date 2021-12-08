const express = require('express');
const bodyParser = require('body-parser');
// import mysql2 from "mysql2";

// Hostname and Port is not too important, as it varies across different computers and users
const hostname = "localhost";
const port = 3036;

const app = express();
// const conn = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "",
// });

// conn.connect((err) => {
//     if (err) throw err;
//     console.log("MySQL WorkBench is Connected...!");
// });

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile("public/index.html");
});

app.get("/api/register", (req, res) => {
    res.sendFile("public/register.html");
});

app.listen(port, () => {
    console.log(`Server Running at ${hostname}:${port}`);
});