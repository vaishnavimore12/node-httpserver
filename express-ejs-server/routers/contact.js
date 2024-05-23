const express=require("express")
const router=express.Router()
const path=require("path")
const mysql=require('mysql2')
const fs=require("fs")


const profiles=[
   { id:1,desg:"HR",name:"Sunita Didi", mobile:"541434413" },
   { id:2,desg:"sales",name:"Pinku", mobile:"841434413" },
   { id:3,desg:"Admin",name:"Sumit", mobile:"256434413" },
]
router.get("/",(req,res)=>{
    // res.send("<h1>Welcome to our server.......")
    res.sendFile(path.join(process.cwd(),"pages","contact.html"))

    res.render("contact",{profiles})
 })


 router.get("/:id",(req,res)=>{
    
    // res.send("<h1>Welcome to our server.......")
   const {id}=req.params
   console.log(req.params)
   const idProfile=getProfile(id)
   let len=0
    if(idProfile.length==0)
    {
     console.log("id not found")  
     len=0
    }
    else{
       len=idProfile.length
    }
   //  const filePath=path.join(process.cwd(),"pages","contactProfile.html")
   //  fs.appendFileSync(filePath,len? `<h1>Found Id is:${id}`:`Id not found...`)
   //  res.sendFile(filePath)

   res.render("contactProfile",idProfile[0])
 })

 const getProfile=(id)=>{
    return profiles.filter((p)=>{
        return id==p.id
    })
   
 }

 module.exports=router