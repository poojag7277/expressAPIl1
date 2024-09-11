const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 5000

app.get("/",(req,res) =>{
    res.send("hello frombackend")
})

//adding body parser for parser
app.use(bodyParser.json())
//this is dummy api
app.get("/api/v1", (req,res)=> {
    res.json(
        {
            message:"hello from the api version"
        }
    )
})
app.listen(port,()=>{
    console.log(`begin from the api of post${port}`)
})
