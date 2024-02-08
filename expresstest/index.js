const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const courses = ["Java complete beginner course","Java master course","Node fundamentals","node master","django zeor to hero","everything else"]

app.get('/',(req,res)=>{
    res.end("Working fine...")
})

app.get('/api',(req,res)=>{
    res.send('API route...')
})

app.get('/about',(req,res)=>{
    res.send('We delivcer best in class services...')
})

app.get('/get/:id',(req,res)=>{
    const id = req.params.id;
    if(id<courses.length){
        res.send(`respective course to id is ${courses[id]}`)
    }else{
        res.send(`Invalid course id ${id}`)
    }
    
})

app.listen(PORT,()=>{
    console.log("Server running on port",PORT)
})