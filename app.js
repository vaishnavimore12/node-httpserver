const http=require("http")
const fs=require("fs")
//This is a comment from github repo....
const app=http.createServer((req,res)=>{


    if(req.url==="/")
    {
        const pageData=fs.readFileSync("pages/index.html")
        // res.write("<h1>Server started.... </h1>")
        res.write(pageData)
        res.end()
    }
    else if(req.url==="/about")
    {
        const pageData=fs.readFileSync("pages/about.html")
        // res.write("<h1>About page</h1>")
        res.write(pageData)
     res.end()
    }
    else if(req.url==="/contact")
    {
        const pageData=fs.readFileSync("pages/contact.html")
        // res.write("<h1>Contact</h1>")
        res.write(pageData)
     res.end()
    }
    else{
        // res.writeHead(404,{"Content-Type":"text/plain"})      //html code will send as a plain text then tags will not work
        res.writeHead(404,{"Content-Type":"text/html"})
        
        res.write("<h1>404 error page not found :( </h1>")
     res.end()
    }
     
})

// app.listen(port,ip,callback-function)   syntax
app.listen(3000,()=>{
    console.log("Server Started on http://127.0.0.1:3000")
})
