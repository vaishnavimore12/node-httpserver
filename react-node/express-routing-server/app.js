const express = require("express")
const path = require("path")
const mysql = require('mysql2');
const cors=require("cors")
const bodyParser=require("body-parser")

const regRouter=require("./routers/register")
const loginRouter=require("./routers/login")
const contactRouter=require("./routers/contact")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/static",express.static("assests"))

app.use("/reg",regRouter)
app.use("/login",loginRouter)
app.use("/contact",contactRouter)

app.get("/", (req, res) => {
 res.send("server started...........")
})
app.get("/c", (req, res) => {
 res.sendFile(path.join(__dirname,"pages","contact.html"))
})




app.get("/*", (req, res) => {
    res.status(404)
    res.set("Content-Type", "text/html")
  
})
// app.listen(port,ip,callback-function)
app.listen(4000, () => {
    console.log("Server started on http://127.0.0.1:4000")
})

// req/res status codes
//200-299 ok  req & res success
//300-399 information req & res success
//400-499 req failed  req invalid
//500-599 req succes   but res failed    

