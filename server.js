const express = require("express");
const mysql2 = require("mysql2");
const pages = require("./routes/pages");
const session = require("express-session");
const path = require("path");
// const fileUpload = require("express-fileupload");

const port = 3000;

const app = express();
const conn = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_db_home",
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    session({
        secret: "key that will sign cookie",
        path: "/",
        cookie: { maxAge: 300000 },
        resave: false,
        saveUninitialized: false,
    })
);

conn.connect((err) => {
    if (err) throw err;
    console.log("MySQL WorkBench is Connected...!");
});

app.use("/", pages);

// app.use(fileUpload());

// ! Work in Progress

// app.post("/", (req, res) => {
//     if (!req.files) return; // res.status(400).sendFile(__dirname + "/public/home.html");

//     let file = req.files.afp;

//     let uploadPath = __dirname + "/uploads/" + file.name;

//     file.mv(uploadPath, (err) => {
//         if (err) return res.status(500).send(err);
//         // res.sendFile(__dirname + "/public/home.html");
//     });
// });

app.listen(port, () => {
    console.log(`Server Running at localhost:${port}`);
});