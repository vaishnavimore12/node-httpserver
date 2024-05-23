const express=require("express")
const router=express.Router()
const path=require("path")
const mysql=require('mysql2')


router.get("/",(req,res)=>{
  
    res.sendFile(path.join(process.cwd(),"pages","register.html"))
 })

router.get("/save",(req,res)=>{
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
             '${formData.password}',
             '${formData.email}',
             '${formData.gender}')`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});




console.table(formData)
res.sendFile(path.join(process.cwd(),"pages","login.html"))
})



module.exports=router