const express = require('express')
var app = express()
app.get("/loginsuccess",(req,res)=>{
    res.redirect("/")
})
var server = app.listen(8081)