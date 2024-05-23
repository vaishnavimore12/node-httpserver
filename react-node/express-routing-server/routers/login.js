const express = require("express")
const router = express.Router()
const path = require("path")
const mysql = require('mysql2');

router.post("/", (req, res) => {
    // res.send("<h1>Welcome to our server.....")
    const formData = req.body
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "vaishu@1234",
        database: "persondb"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.connect(function (err) {
            if (err) throw err;
            con.query(`SELECT * FROM person where email='${formData.email}' and password='${formData.password}'`, function (err, result, fields) {
                if (err) throw err;
                console.log(result.length)
                res.send(result.length > 0 ? true : false);
            });
        });
    });


})

module.exports = router