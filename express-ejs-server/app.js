const express=require("express")
const path=require("path")
const mysql=require('mysql2')

 const regRouter=require("./routers/register")
 const loginRouter=require("./routers/login")
 const contactRouter=require("./routers/contact")
const app=express()

app.set("view engine","ejs")
// app.set("views","viewspath")
// app.set("views","pages/views")

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


 

app.get("/auth",(req,res)=>{
  // const email=req.body.email;
  // const password=req.body.password;
const q=req.query
  const email=q.email
  const password=q.password

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vaishu@1234",
    database: "persondb"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = `SELECT * FROM person WHERE email = '${email}' AND password = '${password}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      if(result.length > 0){
        res.sendFile(path.join(process.cwd(),"pages","welcome.html"));
      //   res.redirect("/Welcome")
      } else {
      //  res.sendFile(path.join(process.cwd(),"pages","login.html"));
      res.send("Invalid user");
      }
    });
  });
});

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