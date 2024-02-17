const express = require('express')

const app = express()

app.use(express.json())

let category = [
    {id:1 , name: "Web"},
    {id:2 , name: "Mobile"},
    {id:3 , name: "Photography"},
    {id:4 , name: "Desktops"},
]

const PORT = process.env.PORT | 3000;

app.get('/api/categories',(req,res)=>{
     res.json(category)
})

app.post('/api/categories',(req,res)=>{
    const c = {
        id: category.length+1,
        name: req.body.name
    }
    category.push(c)
    res.send(category)
})
app.delete('/api/categories',(req,res)=>{
    const id = req.body.id
    category = category.filter(c=> c.id != id)
    res.send(category)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}..`)
})