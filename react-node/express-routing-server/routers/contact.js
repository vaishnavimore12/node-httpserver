const express = require("express")
const router = express.Router()
const path = require("path")
const mysql = require('mysql2');
const fs = require("fs")

router.get("/", (req, res) => {
   
})

const profiles = [
    { id: 1, desg: "HR", name: "Sunita Didi", mobile: "823648236" },
    { id: 2, desg: "Sales", name: "Pinki Didi", mobile: "993648236" },
    { id: 3, desg: "Admin", name: "Sumit Bhiya", mobile: "773648236" },
]


router.get("/:id", (req, res) => {
  
    const {id}=req.params //{id:1}
    console.log(req.params)
    const idProfile=getProfile(id)
    let len=0
    if (idProfile.length == 0) {
        console.log("id not found")
        len=0
    }
    else {
       len=idProfile.length
    }
    const filePath = path.join(process.cwd(), "pages", "contactProfile.html")
    fs.appendFileSync(filePath,len? `<h1>Found ID is:${id}`:`Id not found...`)
   
})


const getProfile = (id) => {
    return  profiles.filter((p) => {
        return id == p.id
    })
  
}

module.exports = router