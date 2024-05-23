const express=require("express")
const path=require("path")
const mysql=require('mysql2')

 const regRouter=require("./routers/register")
 const loginRouter=require("./routers/login")
 const contactRouter=require("./routers/contact")
const app=express()

app.use("/reg",regRouter)
app.use("/login",loginRouter)
app.use("/contact",contactRouter)


app.get("/",(req,res)=>{
    // res.send("<h1>Welcome to our server.......")
    res.sendFile(path.join(__dirname,"pages","index.html"))
 })
app.get("/about",(req,res)=>{
    // res.send("<h1>Welcome to our server.......")
    res.sendFile(path.join(__dirname,"pages","about.html"))
 })


 
app.get("/register",(req,res)=>{
  
    res.sendFile(path.join(__dirname,"pages","register.html"))
 })
app.get("/save",(req,res)=>{
   const formData=req.query

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vaishu@1234",
  database: "persondb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `INSERT INTO person (name, age, mobile,password, email, gender) 
             VALUES 
             ('${formData.name}',
             '${formData.age}',
             '${formData.mobile}',
             '${formData.email}',
             '${formData.password}',
             '${formData.gender}')`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});




console.table(formData)
res.sendFile(path.join(__dirname,"pages","login.html"))
})

app.get("/*",(req,res)=>{
    res.status(404)
    res.set("Content-Type","text.html")
    // res.send("<h1>Welcome to our server.......")
    res.sendFile(path.join(__dirname,"pages","404.html"))
 })


    

// app.listen(port,ip,callback-function)   syntax
app.listen(3000,()=>{
    console.log("Server Started on http://127.0.0.1:3000")
})